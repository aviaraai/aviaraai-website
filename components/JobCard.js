"use client";
import React from "react";

/**
 * Professional job card — compact, readable, conversion-friendly.
 * Uses inline `brand` for the primary accent so no tailwind.config is needed.
 */
export default function JobCard({ job, onApply }) {
  const brand = "#0F4C75";

  return (
    <article
      className="bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
      aria-labelledby={`job-${job.id}`}
      role="listitem"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-md flex items-center justify-center shrink-0"
            style={{ backgroundColor: brand, color: "#fff", fontWeight: 700 }}
            aria-hidden
          >
            <span className="text-sm">
              {String(job.team || "A").trim().charAt(0).toUpperCase()}
            </span>
          </div>

          <div>
            <h3 id={`job-${job.id}`} className="text-lg font-semibold text-black leading-snug">
              {job.title}
            </h3>
            <p className="mt-1 text-sm" style={{ color: "rgba(0,0,0,0.7)" }}>
              {job.team} • {job.location}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-black text-xs font-medium text-black">
            {job.type}
          </div>
          <div className="text-xs mt-2" style={{ color: "rgba(0,0,0,0.5)" }}>
            {job.id}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.85)" }}>
        {job.summary}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>
          {job.experience}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onApply(job)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm focus:outline-none"
            style={{ backgroundColor: brand, color: "#fff" }}
            aria-label={`Apply for ${job.title}`}
          >
            Apply
          </button>

          <a
            href={job.link || "#"}
            onClick={(e) => { if (!job.link) e.preventDefault(); }}
            className="text-sm underline"
            style={{ color: brand }}
            aria-label={`View details for ${job.title}`}
          >
            Details
          </a>
        </div>
      </div>
    </article>
  );
}
