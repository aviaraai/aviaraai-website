"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

// === Sample posts (replace with real data) ===
const SAMPLE_POSTS = [
  {
    id: "1",
    title: "How AI is Transforming Modern Education",
    excerpt:
      "Discover how adaptive tutoring, personalization and real-time feedback are changing classrooms — and how Aviara AI fits in.",
    date: "2025-11-01",
    category: "Education",
    readingTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&q=80",
    slug: "/blog/ai-education",
  },
  {
    id: "2",
    title: "Designing Delightful Tutor Avatars",
    excerpt:
      "Best practices for avatar animation, lip-sync, and micro-expressions to keep learners engaged.",
    date: "2025-10-20",
    category: "Design",
    readingTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    slug: "/blog/tutor-avatars",
  },
  {
    id: "3",
    title: "Scaling AI Workflows on a Budget",
    excerpt:
      "Practical tips to host models, handle realtime audio, and reduce inference costs without sacrificing UX.",
    date: "2025-09-30",
    category: "Engineering",
    readingTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    slug: "/blog/scale-ai",
  },
];

const uniqueCategories = (posts) => Array.from(new Set(posts.map((p) => p.category)));

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...uniqueCategories(SAMPLE_POSTS)], []);

  const filtered = useMemo(() => {
    return SAMPLE_POSTS.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Aviara AI Blog</h1>
          <p className="mt-3 text-lg text-gray-600">Insights on AI, Education & Product Design.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* MAIN POSTS */}
          <div className="lg:col-span-3">
            {/* Search + Category Filter */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, categories, or keywords..."
                className="w-full md:w-2/3 rounded-xl border border-gray-700 px-4 py-3 shadow-sm
                           bg-gray-900 text-white placeholder-gray-300
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <Link href={post.slug} className="block">
                    <div className="h-44 md:h-36 w-full bg-gray-200">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <time className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
                        <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readingTime}</span>
                        <span className="text-indigo-600 text-sm font-medium">Read →</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full bg-white rounded-2xl p-8 text-center text-gray-600">
                  No posts matched your search.
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm font-semibold">About Aviara AI</h4>
                <p className="mt-2 text-sm text-gray-600">
                  We build practical AI tools for education — blending delightful UX with real learning outcomes.
                </p>
                <Link href="/about" className="inline-block mt-3 text-indigo-600 text-sm font-medium">
                  Learn more →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm font-semibold">Popular Categories</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {categories.slice(1).map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => setActiveCategory(c)}
                        className={`text-left w-full ${activeCategory === c ? "font-semibold text-indigo-600" : ""}`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
  <h4 className="text-sm font-semibold">Subscribe</h4>
  <p className="mt-2 text-sm text-gray-600">
    Get monthly updates on new posts & product news.
  </p>

 <form className="mt-3 flex items-center gap-3 w-full">
  <input
    placeholder="Your email"
    className="min-w-0 flex-1 h-11 rounded-lg border border-gray-700 px-3 text-sm
               bg-gray-900 text-white placeholder-gray-400"
  />
  <button
    type="button"
    className="h-11 px-4 rounded-lg bg-indigo-600 text-white text-sm flex items-center"
  >
    Join
  </button>
</form>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
