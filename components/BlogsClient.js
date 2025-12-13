"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function BlogsClient({ blogs = [] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  // Tags / categories
  const allTags = useMemo(() => {
    const tags = new Set();
    (blogs || []).forEach((b) => {
      if (Array.isArray(b.tags)) b.tags.forEach((t) => t && tags.add(t));
      if (b.category) tags.add(b.category);
    });
    return ["All", ...Array.from(tags)];
  }, [blogs]);

  // Filter logic
  const filteredBlogs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (blogs || []).filter((blog) => {
      const title = (blog.title || "").toLowerCase();
      const summary = (blog.summary || "").toLowerCase();
      const category = (blog.category || "").toLowerCase();
      const tagsString = Array.isArray(blog.tags)
        ? blog.tags.join(" ").toLowerCase()
        : "";

      const matchesQuery =
        !q ||
        title.includes(q) ||
        summary.includes(q) ||
        category.includes(q) ||
        tagsString.includes(q);

      const matchesTag =
        activeTag === "All" ||
        blog.category === activeTag ||
        (Array.isArray(blog.tags) && blog.tags.includes(activeTag));

      return matchesQuery && matchesTag;
    });
  }, [blogs, query, activeTag]);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center text-sm text-slate-500 py-10">
        No blog posts yet. Once you publish, they&apos;ll appear here.
      </div>
    );
  }

  const noneAfterFilter = filteredBlogs.length === 0;

  return (
    <div className="flex flex-col gap-7 md:gap-8">
      {/* ========= CENTERED SEARCH + TAGS (FLAT) ========= */}
      <div className="space-y-3">
        <div className="flex justify-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts, categories, or keywords..."
            className="w-full max-w-3xl rounded-full bg-slate-900 text-slate-50 placeholder:text-slate-400 px-5 py-3 text-sm outline-none border border-slate-900 shadow-md"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={
                  "px-3 py-1 rounded-full text-xs font-medium border transition " +
                  (isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200")
                }
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========= BLOG CARDS ========= */}
      {noneAfterFilter ? (
        <div className="text-center text-sm text-slate-500 py-10">
          No posts match this search yet. Try a different keyword or tag.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.slug || blog.id || index} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

function BlogCard({ blog }) {
  const href = blog.slug
    ? `/blogs/${blog.slug}`
    : blog.id
    ? `/blogs/${blog.id}`
    : "#";

  // Get cover image and convert to proxy URL if it's from backend
  let imageSrc = blog.imageUrl || blog.coverImage || blog.cover_image || blog.image || null;

  if (imageSrc && imageSrc.includes('/blogs/')) {
    // Extract path after /blogs/
    const match = imageSrc.match(/\/blogs\/(.+)/);
    if (match) {
      imageSrc = `/api/blog-images/${match[1]}`;
    }
  }
  const published = blog.publishedAt || blog.date || "";
  const readTime =
    typeof blog.readTime === "number"
      ? `${blog.readTime} min read`
      : blog.readTime ||
        (blog.readTimeMinutes ? `${blog.readTimeMinutes} min read` : "Read");

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* Flat, decent-sized cover image */}
      <div className="w-full overflow-hidden">
        {imageSrc ? (
          <div className="h-52 md:h-60">
            <img
              src={imageSrc}
              alt={blog.title || "Blog cover"}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="h-44 md:h-52 bg-gradient-to-r from-slate-800 via-indigo-700 to-sky-500" />
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-3 px-5 pt-4 pb-5">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>{published}</span>
          {blog.category && (
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600">
              {blog.category}
            </span>
          )}
        </div>

        <h2 className="text-sm sm:text-[15px] font-semibold text-slate-900 leading-snug group-hover:text-indigo-700">
          {blog.title || "Untitled post"}
        </h2>

        {blog.summary && (
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
            {blog.summary}
          </p>
        )}

        <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
          <span>{readTime}</span>
          <span className="inline-flex items-center text-[11px] font-medium text-indigo-600 group-hover:text-indigo-700">
            Read →
          </span>
        </div>

        {Array.isArray(blog.tags) && blog.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {blog.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
