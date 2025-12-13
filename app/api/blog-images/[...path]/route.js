import { NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

// Rate limiter: 100 requests per minute per IP
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

// Proxy blog images from backend to frontend
export async function GET(request, { params }) {
  const { path } = params;
  const imagePath = Array.isArray(path) ? path.join('/') : path;

  // Rate limiting
  try {
    const ip = getClientIp(request);
    await limiter.check(100, ip); // 100 requests per minute
  } catch {
    return new NextResponse('Rate limit exceeded. Please try again later.', {
      status: 429,
      headers: {
        'Retry-After': '60',
      },
    });
  }

  // Backend URL from environment variable only
  // In Docker: http://blog-backend:8445 (from docker-compose.yml)
  // In dev: http://localhost:8445 (from .env.local)
  const backendUrl = process.env.NEXT_PUBLIC_BLOG_API_URL;

  if (!backendUrl) {
    console.error('[Blog Images API] NEXT_PUBLIC_BLOG_API_URL is not configured');
    return new NextResponse('Backend URL not configured', { status: 500 });
  }

  const imageUrl = `${backendUrl}/blogs/${imagePath}`;

  try {
    // Fetch image from backend with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(imageUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'AviaraAI-Frontend/1.0',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[Blog Images API] Image not found: ${imageUrl} (${response.status})`);
      return new NextResponse('Image not found', {
        status: 404,
        headers: {
          'Cache-Control': 'public, max-age=300', // Cache 404s for 5 minutes
        },
      });
    }

    // Get image data and content type
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Validate content type
    if (!contentType.startsWith('image/')) {
      console.error(`[Blog Images API] Invalid content type: ${contentType}`);
      return new NextResponse('Invalid image type', { status: 400 });
    }

    // Return image with proper headers and caching
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Accept-Ranges': 'bytes',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(`[Blog Images API] Request timeout: ${imageUrl}`);
      return new NextResponse('Request timeout', { status: 504 });
    }

    console.error('[Blog Images API] Error fetching blog image:', error);
    return new NextResponse('Failed to fetch image', {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
  }
}
