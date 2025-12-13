// components/MarkdownRenderer.js

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

// Choose highlight.js theme:
// You can change this to:
//   github.css
//   atom-one-dark.css
//   monokai.css
//   vs2015.css
//   github-dark.css
import "highlight.js/styles/github-dark.css";

import { API_BASE } from "../lib/api"; // 👈 use same base URL as API
import "../styles/blog.css";

export default function MarkdownRenderer({ content, slug }) {
  if (!content) return <p>No content available.</p>;

  return (
    <article className="blog-article">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // ---------- HEADINGS ----------
          h1: ({ node, ...props }) => <h1 className="blog-h1" {...props} />,
          h2: ({ node, ...props }) => <h2 className="blog-h2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="blog-h3" {...props} />,

          // ---------- PARAGRAPHS ----------
          p: ({ node, ...props }) => (
            <p className="blog-paragraph" {...props} />
          ),

          // ---------- IMAGES (fixed) ----------
          img: ({ node, ...props }) => {
            let src = props.src || "";

            // Check if URL contains /blogs/ pattern (from backend)
            if (src && src.includes('/blogs/')) {
              const match = src.match(/\/blogs\/(.+)/);
              if (match) {
                src = `/api/blog-images/${match[1]}`;
              }
            }
            // If it's a relative path, treat it as a blog-local asset
            else if (src && !src.startsWith("http")) {
              // remove leading "./" or "/" etc
              src = src.replace(/^\.\//, "").replace(/^\/+/, "");

              // If we have a slug, build proxy URL:
              //   /api/blog-images/<slug>/<file>
              if (slug) {
                src = `/api/blog-images/${slug}/${src}`;
              }
            }

            return (
              <img
                {...props}
                src={src}
                className="blog-image"
                loading="eager"
                alt={props.alt || ""}
              />
            );
          },

          // ---------- INLINE + BLOCK CODE ----------
          code: ({ inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code className="blog-inline-code" {...props}>
                  {children}
                </code>
              );
            }

            return (
              <pre className="blog-code-block">
                <code className={className || ""} {...props}>
                  {children}
                </code>
              </pre>
            );
          },

          // ---------- LISTS ----------
          ul: ({ node, ...props }) => <ul className="blog-ul" {...props} />,
          ol: ({ node, ...props }) => <ol className="blog-ol" {...props} />,
          li: ({ node, ...props }) => <li className="blog-li" {...props} />,

          // ---------- QUOTES ----------
          blockquote: ({ node, ...props }) => (
            <blockquote className="blog-blockquote" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
