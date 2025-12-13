import { NextResponse } from 'next/server';

// Proxy blog images from backend to frontend
export async function GET(request, { params }) {
  const { path } = params;
  const imagePath = Array.isArray(path) ? path.join('/') : path;

  // Backend URL from environment variable only
  // In Docker: http://blog-backend:8445 (from docker-compose.yml)
  // In dev: http://localhost:8445 (from .env.local)
  const backendUrl = process.env.NEXT_PUBLIC_BLOG_API_URL;

  if (!backendUrl) {
    console.error('NEXT_PUBLIC_BLOG_API_URL is not configured');
    return new NextResponse('Backend URL not configured', { status: 500 });
  }

  const imageUrl = `${backendUrl}/blogs/${imagePath}`;

  try {
    // Fetch image from backend
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new NextResponse('Image not found', { status: 404 });
    }

    // Get image data and content type
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return image with proper headers and caching
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error) {
    console.error('Error fetching blog image:', error);
    return new NextResponse('Failed to fetch image', { status: 500 });
  }
}
