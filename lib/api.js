// lib/api.js

// Backend URL from environment variable only
// Must be configured in .env.local or docker-compose.yml
export const API_BASE = (process.env.NEXT_PUBLIC_BLOG_API_URL || "").replace(/\/$/, "");

if (!API_BASE) {
  console.error("❌ NEXT_PUBLIC_BLOG_API_URL is not configured!");
}

console.log("🌐 API BASE URL:", API_BASE);

function resolveMediaUrl(possibleUrl) {
  if (!possibleUrl) return null;
  if (possibleUrl.startsWith("http://") || possibleUrl.startsWith("https://")) return possibleUrl;
  if (possibleUrl.startsWith("/")) return `${API_BASE}${possibleUrl}`;
  return `${API_BASE}/${possibleUrl}`;
}

export async function fetchBlogs() {
  const url = `${API_BASE}/api/blogs`;
  console.log("🔍 fetchBlogs URL:", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 1 minute
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("❌ fetchBlogs FAILED", res.status, text);
      return []; // Return empty array instead of throwing
    }

    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error("❌ fetchBlogs ERROR:", error.message);
    return []; // Return empty array on network error
  }
}

export async function fetchBlog(slug) {
  const url = `${API_BASE}/api/blogs/${slug}`;
  console.log("🔍 fetchBlog URL:", url);

  const res = await fetch(url, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("❌ fetchBlog FAILED", res.status, text);
    throw new Error("Failed to fetch blog");
  }

  const data = await res.json();

  // Normalize cover_image to absolute URL
  if (data && data.cover_image) {
    data.cover_image = resolveMediaUrl(data.cover_image);
  }

  // Rewrite relative markdown image links to absolute API urls
  if (data && data.content && data.slug) {
    data.content = data.content.replace(/!\[([^\]]*)\]\((?!https?:\/\/|\/)([^)]+)\)/g, (m, alt, relPath) => {
      const cleaned = relPath.replace(/^\.\//, "");
      const abs = `${API_BASE}/blogs/${data.slug}/${cleaned}`;
      return `![${alt}](${abs})`;
    });

    // paths starting with / -> prefix API_BASE
    data.content = data.content.replace(/!\[([^\]]*)\]\((\/[^)]+)\)/g, (m, alt, path) => {
      const abs = `${API_BASE}${path}`;
      return `![${alt}](${abs})`;
    });
  }

  return data;
}
