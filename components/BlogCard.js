// components/BlogCard.js

import { API_BASE } from "../lib/api";
import { formatDate, estimateReadingTime } from "../lib/markdown";

export default function BlogCard({ blog }) {
  const { slug, title, summary, tags = [], date, cover_image, content } = blog;

  const readingTime = estimateReadingTime(content || "");

  return (
    <a
      href={`/blogs/${slug}`}
      className="blog-card"
    >
      {cover_image && (
        <div className="blog-card-cover-wrapper">
          <img
            src={`${API_BASE}${cover_image}`}
            alt={title}
            className="blog-card-cover"
          />
        </div>
      )}

      <div className="blog-card-body">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-summary">{summary}</p>

        <div className="blog-card-meta">
          <span className="blog-card-date">
            {formatDate(date)}
          </span>
          <span className="blog-card-dot">•</span>
          <span className="blog-card-reading">{readingTime}</span>
        </div>

        {tags && tags.length > 0 && (
          <div className="blog-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="blog-card-tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
