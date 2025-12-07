"use client";

import { useState, useMemo } from "react";
import JobCard from "./JobCard";
import ApplyModal from "./ApplyModal";

export default function Careers() {
  const jobs = [
    {
      title: "Frontend Developer (React + Next.js)",
      type: "Full-time",
      location: "Hyderabad, India",
      description:
        "We’re looking for a frontend engineer skilled in React, Next.js, and modern UI frameworks to build clean, scalable interfaces.",
    },
    {
      title: "Backend Developer (Python/FastAPI)",
      type: "Full-time",
      location: "Remote / Hyderabad",
      description:
        "Help us build high-performance backend systems, APIs, and AI-driven pipelines for enterprise-grade deployments.",
    },
    {
      title: "UI/UX Designer",
      type: "Internship / Full-time",
      location: "Remote",
      description:
        "Work with our design team to create intuitive product experiences, wireframes, prototypes, and visual systems.",
    },
    // later you can add more jobs here…
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  // 🔍 search + filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const handleApplyClick = (jobTitle) => {
    setSelectedRole(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRole("");
  };

  const handleSubmitApplication = (formData) => {
    console.log("Application submitted:", Object.fromEntries(formData));
    alert("Application submitted! We'll get back to you soon.");
    handleCloseModal();
  };

  // 🔁 Build filtered list of jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = searchQuery.toLowerCase().trim();

      const matchesSearch =
        q === "" ||
        job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);

      const matchesType =
        typeFilter === "all" || job.type.toLowerCase().includes(typeFilter);

      const matchesLocation =
        locationFilter === "all" ||
        job.location.toLowerCase().includes(locationFilter);

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [jobs, searchQuery, typeFilter, locationFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
            Careers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Join Our Mission-Driven Team
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl">
            We’re building powerful AI-driven systems and digital products that
            make a real impact. Be part of a fast-moving environment where your
            work actually matters.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 space-y-16">
        {/* Open Positions */}
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Open Positions
            </h2>

            {/* 🔍 Search + filters */}
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search by role, tech, or location…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full md:w-40 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All types</option>
                <option value="full-time">Full-time</option>
                <option value="internship">Internship</option>
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full md:w-40 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All locations</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>

          {/* Jobs grid */}
          {filteredJobs.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No roles match your filters right now. Try clearing filters or
              sending a general application below.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={index} job={job} onApply={handleApplyClick} />
              ))}
            </div>
          )}
        </section>

        {/* Why Work With Us */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Work on real AI products used at scale.</li>
            <li>Freedom to innovate and bring your own ideas.</li>
            <li>Flexible working environment (remote-friendly).</li>
            <li>Opportunities for rapid growth and leadership.</li>
            <li>Collaborative, friendly, and learning-focused culture.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center pt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Didn’t find a suitable role?
          </h3>
          <p className="text-gray-600 mb-6">
            We’re always open to meeting talented people passionate about AI and
            product development.
          </p>
          <button
            onClick={() => handleApplyClick("General Application")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
          >
            Send a General Application
          </button>
        </section>
      </main>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        selectedRole={selectedRole}
        onClose={handleCloseModal}
        onSubmit={handleSubmitApplication}
      />
    </div>
  );
}
