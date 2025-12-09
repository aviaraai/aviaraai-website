// lib/api.js

// Prefer env var NEXT_PUBLIC_BLOG_API_URL; fallback to local backend at port 8445
export const API_BASE = (process.env.NEXT_PUBLIC_BLOG_API_URL || "http://localhost:8445").replace(/\/$/, "");

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

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("❌ fetchBlogs FAILED", res.status, text);
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  return data.blogs || [];
}

export async function fetchBlog(slug) {
  const url = `${API_BASE}/api/blogs/${slug}`;
  console.log("🔍 fetchBlog URL:", url);

  const res = await fetch(url, { next: { revalidate: 60 } });
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
