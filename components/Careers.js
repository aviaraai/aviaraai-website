// components/Careers.js

"use client";

import { useState, useMemo } from "react";
import JobCard from "./JobCard";
import ApplyModal from "./ApplyModal";

export default function Careers() {
  const jobs = [
    {
      id: "frontend-dev",
      title: "Frontend Developer (React + Next.js)",
      type: "Full-time",
      location: "Hyderabad, India",
      description:
        "Build delightful, high-performing interfaces and ship features across our AI platform using React and Next.js.",
      details: {
        about:
          "As a Frontend Developer at AviaraAI, you will own end-to-end implementation of core product surfaces in React and Next.js. You’ll work closely with design, backend, and product to ship clean, performant, and accessible interfaces.",
        responsibilities: [
          "Build, ship, and maintain React + Next.js frontends for our AI products.",
          "Collaborate with designers to translate Figma flows into pixel-perfect, responsive UIs.",
          "Integrate with backend APIs, handle state management, and ensure smooth UX.",
          "Optimize performance, loading times, and Lighthouse scores.",
          "Contribute to our internal UI component library and design system.",
        ],
        requirements: [
          "1–3 years of experience with React (or strong projects if fresher).",
          "Good understanding of modern JavaScript/TypeScript and ES6+ features.",
          "Experience with Next.js, API integration, and basic SEO concepts.",
          "Comfortable with Git, code reviews, and collaborative development.",
          "Solid fundamentals in HTML, CSS, and responsive design.",
        ],
        niceToHave: [
          "Experience with Tailwind CSS or similar utility-first frameworks.",
          "Basic understanding of design tools (Figma, Sketch, etc.).",
          "Interest in AI, ML, or data-heavy products.",
        ],
      },
    },
    {
      id: "backend-dev",
      title: "Backend Developer (Python/FastAPI)",
      type: "Full-time",
      location: "Remote / Hyderabad",
      description:
        "Design and implement robust APIs, data pipelines, and backend services powering real-world AI products.",
      details: {
        about:
          "As a Backend Developer, you will design and build APIs and services that power large-scale AI workloads and real customer-facing products.",
        responsibilities: [
          "Design and implement RESTful APIs using Python (FastAPI preferred).",
          "Work with databases (SQL/NoSQL) to design schemas and queries.",
          "Build reliable, secure, and observable backend services.",
          "Collaborate with frontend and ML teams to integrate models into production.",
          "Write clean, testable, and well-documented code.",
        ],
        requirements: [
          "Strong experience with Python and at least one web framework (FastAPI, Django, Flask, etc.).",
          "Solid understanding of REST APIs, authentication, and authorization.",
          "Experience with relational databases (PostgreSQL/MySQL) or NoSQL stores.",
          "Familiarity with Git, Docker, and basic CI/CD flows.",
        ],
        niceToHave: [
          "Experience with cloud platforms (AWS, GCP, Azure).",
          "Background in ML pipelines, model serving, or data engineering.",
        ],
      },
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      type: "Internship / Full-time",
      location: "Remote",
      description:
        "Craft intuitive product experiences, design systems, and visuals that make complex AI workflows feel simple.",
      details: {
        about:
          "As a UI/UX Designer, you will help shape how users experience our AI platform — from information architecture and flows to visual design and design systems.",
        responsibilities: [
          "Design user flows, wireframes, and high-fidelity mockups for web dashboards and tools.",
          "Collaborate with product and engineering to scope and refine features.",
          "Contribute to a consistent design language and component library.",
          "Run quick user feedback loops and iterate based on insights.",
        ],
        requirements: [
          "Strong portfolio showcasing product design work (web/app).",
          "Comfortable with Figma or similar design tools.",
          "Understanding of UX principles, information hierarchy, and layout.",
        ],
        niceToHave: [
          "Experience working with dev teams and handing off specs.",
          "Interest in data-heavy dashboards or AI tools.",
        ],
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  // NEW: job details modal state
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedJobDetails, setSelectedJobDetails] = useState(null);

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

  const handleViewDetails = (job) => {
    setSelectedJobDetails(job);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedJobDetails(null);
  };

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
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-300 mb-4">
            Careers
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Join the team building AviaraAI.
          </h1>
          <p className="text-gray-300 mt-5 text-sm md:text-base max-w-2xl mx-auto">
            We&apos;re a small, focused team building AI-powered products used
            in real deployments. If you like ownership, impact, and clean
            systems, you&apos;ll feel at home here.
          </p>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        {/* Header + Filter bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Open Positions
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Remote–friendly · High ownership · Fast-moving environment
            </p>
          </div>

          {/* Filter card */}
          <div className="w-full md:w-auto">
            <div className="rounded-2xl border border-gray-200 bg-white/90 shadow-sm px-4 py-3 md:px-5 md:py-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {/* Search */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                    Search
                  </label>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2">
                    <span className="text-gray-400 text-xs"></span>
                    <input
                      type="text"
                      placeholder="Role, tech, location…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent w-full outline-none text-xs md:text-sm"
                    />
                  </div>
                </div>

                {/* TYPE DROPDOWN */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                    Type
                  </label>

                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All</option>
                    <option value="full-time">Full-time</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>

                {/* LOCATION DROPDOWN */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                    Location
                  </label>

                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs grid */}
        {filteredJobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white/70 py-14 px-6 text-center text-sm text-gray-500">
            No roles match these filters right now. Try clearing filters or send
            a general application below.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={handleApplyClick}
                onViewDetails={() => handleViewDetails(job)}
              />
            ))}
          </div>
        )}

        {/* Why section */}
        <section className="mt-20 border-t border-gray-200 pt-10">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            Working at AviaraAI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-[15px] text-gray-700">
            <p>
              <span className="font-medium">Real impact.</span> You&apos;ll ship
              features used by partners and teams in production, not just in
              demos.
            </p>
            <p>
              <span className="font-medium">End-to-end ownership.</span> From
              idea to deployment, you&apos;ll own meaningful parts of the
              product.
            </p>
            <p>
              <span className="font-medium">Deep work culture.</span> Fewer
              meetings, more time to build. We optimise for focus and craft.
            </p>
            <p>
              <span className="font-medium">Flexible & remote-friendly.</span>{" "}
              Work from where you&apos;re most productive, with honest
              expectations and high trust.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm">
            <span style={{ color: "#000000", fontWeight: "600" }}>
              Can&apos;t find the right role?
            </span>
            <span className="text-gray-600"> Send your CV to </span>
            <a
              href="mailto:careers@aviaraai.com"
              className="underline text-indigo-600"
            >
              careers@aviaraai.com
            </a>
          </p>
        </div>
      </main>

      {/* Application Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        selectedRole={selectedRole}
        onClose={handleCloseModal}
        onSubmit={handleSubmitApplication}
      />

      {/* Job Details Modal */}
      {isDetailsOpen && selectedJobDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="max-w-2xl w-full rounded-2xl bg-white shadow-xl p-6 md:p-8 relative">
            {/* Close button */}
            <button
              onClick={handleCloseDetails}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-sm"
            >
              ✕
            </button>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {selectedJobDetails.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">{selectedJobDetails.type}</span> ·{" "}
              <span>{selectedJobDetails.location}</span>
            </p>

            {selectedJobDetails.details?.about && (
              <p className="text-sm text-gray-700 mb-4">
                {selectedJobDetails.details.about}
              </p>
            )}

            {selectedJobDetails.details?.responsibilities && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Responsibilities
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {selectedJobDetails.details.responsibilities.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {selectedJobDetails.details?.requirements && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Requirements
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {selectedJobDetails.details.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedJobDetails.details?.niceToHave && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Nice to have
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {selectedJobDetails.details.niceToHave.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3">
              <button
                onClick={handleCloseDetails}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleApplyClick(selectedJobDetails.title);
                  handleCloseDetails();
                }}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Apply for this role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
