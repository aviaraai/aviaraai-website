// app/blogs/[slug]/page.js

import { fetchBlog, API_BASE } from "@/lib/api";
import { formatDate } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import "@/styles/blog.css";

// Optionally: generate metadata dynamically in future
export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const blog = await fetchBlog(slug);
    return {
      title: `${blog.title} | Your Company`,
      description: blog.summary,
      openGraph: {
        title: blog.title,
        description: blog.summary,
        images: blog.cover_image
          ? [
              {
                // Make sure OG image is absolute
                url: blog.cover_image.startsWith("http")
                  ? blog.cover_image
                  : `${API_BASE}${blog.cover_image}`,
              },
            ]
          : [],
      },
    };
  } catch {
    return {
      title: "Blog | Your Company",
      description: "Technical blogs and engineering stories.",
    };
  }
}

export default async function BlogPage({ params }) {
  const { slug } = params;

  let blog;
  try {
    blog = await fetchBlog(slug);
  } catch (e) {
    console.error("❌ BlogPage fetch error:", e);
    return (
      <main className="blog-detail-root">
        <article className="blog-detail-article">
          <h1 className="blog-detail-title">Blog not found</h1>
          <p className="blog-detail-summary">
            We couldn&apos;t load this article. It may have been removed or the
            link is incorrect.
          </p>
        </article>
      </main>
    );
  }

  return (
    <main className="blog-detail-root">
      <article className="blog-detail-article">
        {blog.cover_image && (
          <div className="blog-detail-cover-wrapper">
            <img
              src={
                blog.cover_image.startsWith("http")
                  ? blog.cover_image
                  : `${API_BASE}${blog.cover_image}`
              }
              alt={blog.title}
              className="blog-detail-cover"
            />
          </div>
        )}

        <header className="blog-detail-header">
          <p className="blog-detail-meta">
            {blog.date ? formatDate(blog.date) : null}{" "}
            {blog.tags && blog.tags.length > 0 && (
              <>
                <span className="blog-card-dot">•</span>
                <span>{blog.tags.join(", ")}</span>
              </>
            )}
          </p>
          <h1 className="blog-detail-title">{blog.title}</h1>
          {blog.summary && (
            <p className="blog-detail-summary">{blog.summary}</p>
          )}
        </header>

        {/* blog.content = markdown from backend */}
        <MarkdownRenderer content={blog.content} slug={blog.slug} />
      </article>
    </main>
  );
}
