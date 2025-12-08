// lib/api.js

// =====================================================
// BASE URL FOR BLOG BACKEND
// -----------------------------------------------------
// PRIORITY:
//  1) NEXT_PUBLIC_BLOG_API_URL → from .env.local or docker-compose
//  2) fallback → http://localhost:8000 (LOCAL DEV ONLY)
// -----------------------------------------------------
// In production Docker Compose, this becomes:
//   NEXT_PUBLIC_BLOG_API_URL=http://blog-backend:8000
//
// In local dev (.env.local):
//   NEXT_PUBLIC_BLOG_API_URL=http://localhost:8000
// =====================================================

export const API_BASE =
  process.env.NEXT_PUBLIC_BLOG_API_URL || "http://localhost:8000";

console.log("🌐 API BASE URL:", API_BASE);


// =====================================================
// FETCH ALL BLOGS
// GET /api/blogs
// Returns: { blogs: [...] }
// =====================================================

export async function fetchBlogs() {
  const url = `${API_BASE}/api/blogs`;
  console.log("🔍 fetchBlogs URL:", url);

  const res = await fetch(url, {
    // Optional: ISR (Next.js revalidates every 60 sec)
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("❌ fetchBlogs FAILED", res.status, text);
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  return data.blogs || [];
}


// =====================================================
// FETCH BLOG BY SLUG
// GET /api/blogs/:slug
// Returns: { title, content, cover_image, ... }
// =====================================================

export async function fetchBlog(slug) {
  const url = `${API_BASE}/api/blogs/${slug}`;
  console.log("🔍 fetchBlog URL:", url);

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("❌ fetchBlog FAILED", res.status, text);
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}
