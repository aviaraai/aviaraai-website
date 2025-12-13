// app/blogs/page.js

import { fetchBlogs } from "@/lib/api";
import BlogsClient from "@/components/BlogsClient";
import "@/styles/blog.css";

export const metadata = {
  title: "Blogs — AviaraAI",
  description: "Insights on AI, education, and product design.",
};

// Cache for 5 minutes - faster loading
export const revalidate = 300;

export default async function BlogsPage() {
  let blogs = [];
  try {
    blogs = await fetchBlogs();
  } catch (e) {
    console.error("Error fetching blogs:", e);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* HERO */}
        <section className="mb-10 md:mb-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] text-slate-500 uppercase">
                Aviara AI · Engineering Blog
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Insights on AI, education &amp; product design.
            </h1>

            <p className="max-w-2xl text-sm md:text-[15px] text-slate-500">
              Essays, case studies, and behind-the-scenes stories on how we
              design systems, ship AI features, and build learning products at scale.
            </p>
          </div>
        </section>

        {/* Thin divider only – no big white popup */}
        <div className="border-t border-slate-200 mb-8" />

        {/* MAIN CONTENT */}
        <section>
          <BlogsClient blogs={blogs} />
        </section>
      </main>
    </div>
  );
}
