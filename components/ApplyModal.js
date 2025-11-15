"use client";
import React, { useEffect, useState } from "react";

/**
 * Focused, low-friction apply modal:
 * - Captures name, email (and optional resume)
 * - Submits FormData to /api/apply (you can adapt backend)
 */
export default function ApplyModal({ open, onClose, job, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const brand = "#0F4C75";

  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setResume(null);
      setLoading(false);
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("jobId", job?.id ?? "");
      if (resume) fd.append("resume", resume);

      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (!res.ok) throw new Error("submit failed");

      onSuccess && onSuccess();
      alert("Thanks — your application is received. We’ll be in touch if there’s a match.");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-6">
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} onClick={onClose} />

      <div className="relative z-10 w-full max-w-md bg-white border border-black rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-black">{job?.title ?? "Apply"}</h3>
            {job && <p className="text-sm mt-1" style={{ color: "rgba(0,0,0,0.7)" }}>{job.team} • {job.location}</p>}
          </div>

          <button onClick={onClose} className="text-black text-2xl leading-none" aria-label="Close">×</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="text-sm block text-black">Full name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md px-3 py-2"
              style={{ border: "1px solid #000" }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm block text-black">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md px-3 py-2"
              style={{ border: "1px solid #000" }}
              placeholder="you@domain.com"
            />
          </div>

          <div>
            <label className="text-sm block text-black">Resume (optional)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-2"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            />
            <p className="text-xs mt-1" style={{ color: "rgba(0,0,0,0.6)" }}>
              PDF or DOC accepted. We only use this for hiring.
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-full border text-sm" style={{ borderColor: "#000" }}>
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 rounded-full text-white text-sm"
              style={{ backgroundColor: brand }}
            >
              {loading ? "Sending…" : "Send application"}
            </button>
          </div>
        </form>

        <div className="mt-3 text-xs" style={{ color: "rgba(0,0,0,0.6)" }}>
          Prefer email? <a href="mailto:careers@aviaraai.com" style={{ color: brand }} className="underline">careers@aviaraai.com</a>
        </div>
      </div>
    </div>
  );
}
