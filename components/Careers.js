"use client";
import React, { useEffect, useMemo, useState } from "react";
import JobCard from "./JobCard";
import ApplyModal from "./ApplyModal";

/**
 * Company-style Careers page (updated controls with white text)
 * Colors used: black, white, brand (#0F4C75).
 */
export default function Careers() {
  const brand = "#0F4C75";

  // sample data — replace with your API if you have one
  const sampleJobs = [
    {
      id: "AVI-001",
      title: "Frontend Engineer — AI UX",
      team: "Product",
      location: "Remote (India)",
      type: "Full-time",
      summary:
        "Design polished, accessible UI for our AI tutor products. Ship production quality features end-to-end.",
      experience: "2+ years",
    },
    {
      id: "AVI-002",
      title: "ML Engineer — Speech & TTS",
      team: "AI",
      location: "Bengaluru • Hybrid",
      type: "Full-time",
      summary:
        "Improve TTS pipelines and low-latency speech inference to power real-time avatars.",
      experience: "3+ years",
    },
    {
      id: "AVI-003",
      title: "Product Designer — Learning UX",
      team: "Design",
      location: "Remote",
      type: "Contract",
      summary:
        "Prototype and ship delightful assessment and lesson experiences for learners.",
      experience: "3+ years",
    },
  ];

  const [jobs, setJobs] = useState([]);
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("all");
  const [type, setType] = useState("all");
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data = await res.json();
          if (mounted && Array.isArray(data)) setJobs(data);
          else if (mounted) setJobs(sampleJobs);
        } else {
          if (mounted) setJobs(sampleJobs);
        }
      } catch {
        if (mounted) setJobs(sampleJobs);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  const list = jobs.length ? jobs : sampleJobs;
  const locations = useMemo(
    () => ["all", ...Array.from(new Set(list.map((j) => j.location)))],
    [list]
  );
  const types = useMemo(
    () => ["all", ...Array.from(new Set(list.map((j) => j.type)))],
    [list]
  );

  const filtered = useMemo(() => {
    return list.filter((job) => {
      if (loc !== "all" && job.location !== loc) return false;
      if (type !== "all" && job.type !== type) return false;
      if (!q.trim()) return true;
      const hay = `${job.title} ${job.summary} ${job.team}`.toLowerCase();
      return hay.includes(q.toLowerCase());
    });
  }, [list, loc, type, q]);

  function onApplyClick(job) {
    setSelectedJob(job);
    setModalOpen(true);
  }

  // inline white arrow SVG (encoded) for select background
  const arrowSvg =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>";

  return (
    <main className="pt-24 min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h1 className="text-4xl font-extrabold">
              Build AI that helps learners succeed
            </h1>
            <p className="mt-4 text-lg" style={{ color: "rgba(0,0,0,0.75)" }}>
              Join AviaraAI — small teams, big impact. We ship fast, iterate
              responsibly, and focus on measurable outcomes.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#jobs"
                className="inline-block px-6 py-3 rounded-full font-semibold"
                style={{ backgroundColor: brand, color: "#fff" }}
              >
                View open roles
              </a>

              <a
                href="mailto:careers@aviaraai.com"
                className="inline-block px-5 py-3 rounded-full border"
                style={{ borderColor: "#000", color: "#000" }}
              >
                Send CV
              </a>

              <span
                className="ml-3 text-sm"
                style={{ color: "rgba(0,0,0,0.6)" }}
              >
                Hiring across Product, AI, Design & Engineering
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 border border-black rounded-lg p-5 text-center">
              <div className="text-2xl font-semibold">20k+</div>
              <div className="text-sm" style={{ color: "rgba(0,0,0,0.7)" }}>
                Monthly learners
              </div>
            </div>

            <div className="flex-1 border border-black rounded-lg p-5 text-center">
              <div className="text-2xl font-semibold">{list.length}</div>
              <div className="text-sm" style={{ color: "rgba(0,0,0,0.7)" }}>
                Open roles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + JOB GRID */}
      <section id="jobs" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* ====== UPDATED FILTER CONTROLS (white text + brand bg) ====== */}
          <div className="flex gap-3 w-full md:w-auto items-center">
            {/* Search input */}
            <input
              aria-label="Search jobs"
              placeholder="Search roles, skills, or teams"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="flex-1 md:w-80 rounded-full px-4 py-2 text-white placeholder-white/70 focus:outline-none"
              style={{
                backgroundColor: brand,
                border: "1px solid #000",
                // ensure caret and selection are visible
                caretColor: "#ffffff",
              }}
            />

            {/* Location select */}
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="rounded-full px-4 py-2 text-white text-sm appearance-none pr-10 focus:outline-none"
              style={{
                backgroundColor: brand,
                border: "1px solid #000",
                backgroundImage: `url("${arrowSvg}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.9rem center",
              }}
            >
              {locations.map((l) => (
                <option
                  key={l}
                  value={l}
                  style={{ color: "#ffffff", backgroundColor: brand }}
                >
                  {l === "all" ? "All locations" : l}
                </option>
              ))}
            </select>

            {/* Type select */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-full px-4 py-2 text-white text-sm appearance-none pr-10 focus:outline-none"
              style={{
                backgroundColor: brand,
                border: "1px solid #000",
                backgroundImage: `url("${arrowSvg}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.9rem center",
              }}
            >
              {types.map((t) => (
                <option
                  key={t}
                  value={t}
                  style={{ color: "#ffffff", backgroundColor: brand }}
                >
                  {t === "all" ? "All types" : t}
                </option>
              ))}
            </select>
          </div>

          <div className="text-sm" style={{ color: "rgba(0,0,0,0.7)" }}>
            Showing <strong style={{ color: "#000" }}>{filtered.length}</strong>{" "}
            roles
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            <div
              className="col-span-full p-6 rounded-lg border text-center"
              style={{ borderColor: "#000" }}
            >
              Loading roles…
            </div>
          ) : filtered.length ? (
            filtered.map((job) => (
              <JobCard key={job.id} job={job} onApply={onApplyClick} />
            ))
          ) : (
            <div
              className="col-span-full p-6 rounded-lg border text-center"
              style={{ borderColor: "#000" }}
            >
              No roles match your search. Try different keywords or{" "}
              <a
                className="underline"
                href="mailto:careers@aviaraai.com"
                style={{ color: brand }}
              >
                send your CV
              </a>
              .
            </div>
          )}
        </div>

        {/* Perks & Process */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="rounded-lg border p-5"
            style={{ borderColor: "#000" }}
          >
            <h4 className="font-semibold">Hiring process</h4>
            <ol
              className="mt-3 text-sm space-y-2"
              style={{ color: "rgba(0,0,0,0.75)" }}
            >
              <li>
                <strong>1.</strong> Quick application
              </li>
              <li>
                <strong>2.</strong> Short task / chat
              </li>
              <li>
                <strong>3.</strong> Final interview & offer
              </li>
            </ol>
          </div>

          <div
            className="rounded-lg border p-5"
            style={{ borderColor: "#000" }}
          >
            <h4 className="font-semibold">Why AviaraAI</h4>
            <ul
              className="mt-3 text-sm space-y-2"
              style={{ color: "rgba(0,0,0,0.75)" }}
            >
              <li>Work on AI products with measurable educational impact</li>
              <li>Remote-first + flexible schedules and learning stipend</li>
              <li>Small, high-impact teams—ownership from day one</li>
            </ul>
          </div>

          <div
            className="rounded-lg border p-5"
            style={{ borderColor: "#000" }}
          >
            <h4 className="font-semibold">Diversity & inclusion</h4>
            <p className="mt-3 text-sm" style={{ color: "rgba(0,0,0,0.75)" }}>
              We welcome applicants from all backgrounds. If you need
              accommodations, email{" "}
              <a
                href="mailto:careers@aviaraai.com"
                style={{ color: brand }}
                className="underline"
              >
                careers@aviaraai.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p style={{ color: "rgba(0,0,0,0.75)" }}>
            Can't find the right role? Send your CV to{" "}
            <a
              href="mailto:careers@aviaraai.com"
              className="underline"
              style={{ color: brand }}
            >
              careers@aviaraai.com
            </a>
          </p>
        </div>
      </section>

      <ApplyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        job={selectedJob}
        onSuccess={() => {
          /* optional analytics */
        }}
      />
    </main>
  );
}
