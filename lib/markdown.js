// lib/markdown.js

export function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function estimateReadingTime(text) {
  if (!text) return "0 min read";
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200)); // ~200 wpm
  return `${minutes} min read`;
}
