// lib/api.js

// =====================================================
// BASE URL FOR BLOG BACKEND
// -----------------------------------------------------
// TEMP: Hardcode for debugging so we are 100% sure
// Next.js is calling the same URL you tested in browser.
//
// Later, when everything works, switch back to:
//
//   const API_BASE =
//     process.env.NEXT_PUBLIC_BLOG_API_URL || "http://localhost:8000";
//
// and manage the domain from .env.local
// =====================================================

const API_BASE = "http://localhost:8000";


// =====================================================
// FETCH ALL BLOGS
// GET /api/blogs
// Returns: { blogs: [...] }
// =====================================================
export async function fetchBlogs() {
  const url = `${API_BASE}/api/blogs`;
  console.log("🔍 fetchBlogs URL:", url);

  const res = await fetch(url, {
    // ISR revalidate every 60s (optional)
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
// FETCH SINGLE BLOG BY SLUG
// GET /api/blogs/{slug}
// Returns: { title, summary, content, cover_image, ... }
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


// =====================================================
// EXPORT BASE URL (Frontend needs this to load cover images)
// Example:
//   <img src={`${API_BASE}${blog.cover_image}`} />
// =====================================================
export { API_BASE };
