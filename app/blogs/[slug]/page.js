// app/blogs/[slug]/page.js

import { fetchBlog, API_BASE } from "@/lib/api";
import { formatDate } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import "@/styles/blog.css";

// Cache for 5 minutes
export const revalidate = 300;

// Dynamic metadata for each blog
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const blog = await fetchBlog(slug);

    if (!blog) {
      return {
        title: "Blog | AviaraAI",
        description: "Technical blogs and engineering stories.",
      };
    }

    const ogImage =
      blog.cover_image &&
      (blog.cover_image.startsWith("http")
        ? blog.cover_image
        : `${API_BASE}${blog.cover_image}`);

    return {
      title: `${blog.title} | AviaraAI`,
      description: blog.summary,
      openGraph: {
        title: blog.title,
        description: blog.summary,
        images: ogImage ? [{ url: ogImage }] : [],
      },
    };
  } catch {
    return {
      title: "Blog | AviaraAI",
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
    blog = null;
  }

  // Debug logging
  console.log("🔍 Blog data received:", {
    hasBlog: !!blog,
    hasContent: !!(blog && blog.content),
    contentLength: blog?.content?.length || 0,
    blogKeys: blog ? Object.keys(blog) : [],
  });

  if (!blog) {
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

  if (!blog.content) {
    return (
      <main className="blog-detail-root">
        <article className="blog-detail-article">
          <h1 className="blog-detail-title">{blog.title || "Blog"}</h1>
          <p className="blog-detail-summary" style={{ color: "red" }}>
            ⚠️ Blog data loaded but content field is missing.
            Available fields: {Object.keys(blog).join(", ")}
          </p>
        </article>
      </main>
    );
  }

  // Convert cover image to use proxy if it's from backend
  let coverSrc = blog.cover_image;
  if (coverSrc) {
    // Check if URL contains /blogs/ pattern (from backend)
    if (coverSrc.includes('/blogs/')) {
      const match = coverSrc.match(/\/blogs\/(.+)/);
      if (match) {
        coverSrc = `/api/blog-images/${match[1]}`;
      }
    } else if (!coverSrc.startsWith("http")) {
      // Relative path - convert to proxy URL
      const cleanPath = coverSrc.replace(/^\.\//, "").replace(/^\/+/, "");
      coverSrc = `/api/blog-images/${cleanPath}`;
    }
  }

  return (
    <main className="blog-detail-root">
      <article className="blog-detail-article">
        {coverSrc && (
          <div className="blog-detail-cover-wrapper">
            <img
              src={coverSrc}
              alt={blog.title}
              className="blog-detail-cover"
              loading="eager"
            />
          </div>
        )}

        <header className="blog-detail-header">
          <p className="blog-detail-meta">
            {blog.date ? formatDate(blog.date) : null}
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
