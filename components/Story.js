"use client";
import React from "react";
import Link from "next/link";

const points = [
  { id: 1, year: "2000", title: "Concept", text: "Idea & initial research. Brainstorming and feasibility." },
  { id: 2, year: "2001", title: "Prototype", text: "Built first prototype and tested core workflows." },
  { id: 3, year: "2002", title: "Beta", text: "Closed beta with early partners to gather feedback." },
  { id: 4, year: "2003", title: "Launch", text: "Public launch and onboarding." },
  { id: 5, year: "2004", title: "Scale", text: "Scale-up, improvements and enterprise integrations." },
  { id: 6, year: "2005", title: "Growth", text: "Expanded product, partnerships and global reach." },
];

export default function Story() {
  return (
    <main className="font-sora text-[#0F4C75] bg-white">

      <section className="w-full h-screen flex flex-col md:flex-row bg-[#efefef]">

        {/* LEFT SIDE — MISSION TEXT */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16">
  <div className="max-w-md">
    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
      Our Mission
    </h2>

    <p className="text-2xl text-gray-700 leading-relaxed tracking-wide">
      Our mission is to build practical, reliable AI systems that help
      organizations solve real-world problems using technology that is
      accurate, scalable, and simple to deploy in real environments.
    </p>
  </div>
</div>



        {/* RIGHT SIDE — GIF */}
        <div
          className="w-full md:w-1/2 h-[300px] md:h-full"
          style={{
            backgroundImage: "url('/about_us.gif')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

      </section>

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- OUR VISION ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Our Vision
        </h2>

        <p className="lead mb-6">
          At Aviara AI, we believe AI should be accessible, practical, and impactful.
          Many of the technologies we are building might exist in theory — but are
          not adapted or deployed in the real world.
        </p>

        <p className="text-lg text-black/80 leading-relaxed mb-4">
          As early adopters of cutting-edge AI, we take the responsibility to bring
          these innovations to clients, tailor them to real environments, and make
          them usable at scale.
        </p>

        <p className="text-lg text-black/80 leading-relaxed mb-4">
          We are building products that can save lives, protect assets, and transform
          industries — all with the infrastructure organizations already have.
        </p>

        <p className="text-lg text-black/80 leading-relaxed font-semibold">
          Aviara AI is not just a company. It is a vision for a safer, smarter future.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- OUR STORY ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Our Story
        </h2>

        <div className="prose max-w-none lg:columns-2 lg:gap-12 text-black/80 prose-lg">
          <p>
            Aviara AI was born from a realization: Most disasters — accidents,
            thefts, health emergencies, and safety failures — are only recognized
            after the damage is done.
          </p>

          <p>
            By the time someone notices a problem, it is already too late.
            Lives are affected, finances are lost, and response time becomes the enemy.
          </p>

          <blockquote className="border-l-4 border-[#0F4C75] pl-6 italic my-4">
            “What if we could identify danger at the moment it starts — or even before?”
          </blockquote>

          <p>
            That question led to the foundation of Aviara AI.
          </p>

          <p>
            Leveraging the latest advancements in computer vision, machine learning, and edge AI,
            we began designing a suite of Predictive Alert Systems — specialized AI models that
            can work on existing camera infrastructure and send real-time alerts to authorities.
          </p>

          <p>
            Today, Aviara AI is shaping the next phase of safety technology with smart,
            adaptable, and proactive AI solutions for industries, cities, public spaces,
            and enterprises. We are committed to building systems that not only observe
            but also understand and respond.
          </p>

          <p className="font-semibold mt-2">Because safety shouldn’t wait for something to go wrong.</p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- ALTERNATING STRAIGHT VERTICAL TIMELINE ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">Roadmap</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">Alternating vertical timeline — left/right cards connected by straight horizontal lines to the center dot.</p>

        <AlternatingTimeline points={points} />
      </section>

    </main>
  );
}

/* ---------------- AlternatingTimeline component ---------------- */
function AlternatingTimeline({ points = [] }) {
  return (
    <div className="relative">
      {/* center vertical thin guide line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gray-200 transform -translate-x-1/2" aria-hidden="true" />

      <div className="space-y-12">
        {points.map((p, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={p.id}
              className="grid grid-cols-1 md:grid-cols-3 items-center gap-4"
              style={{ minHeight: 120 }}
            >
              {/* LEFT CELL */}
              <div className="flex justify-end md:justify-end px-4 md:px-0">
                {isLeft ? (
                  <div className="max-w-md w-full">
                    <div className="p-5 bg-white rounded-2xl shadow-md border border-gray-100">
                      <div className="text-sm text-gray-400 mb-1 font-medium">{p.year}</div>
                      <h3 className="text-lg font-semibold text-[#0F4C75]">{p.title}</h3>
                      <p className="text-gray-600 mt-2">{p.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block w-full" /> /* placeholder to keep grid aligned */
                )}
              </div>

              {/* CENTER CELL - connector + dot */}
              <div className="flex items-center justify-center relative px-4">
                {/* left horizontal connector (desktop only) */}
                <div
                  className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2"
                  style={{ width: isLeft ? "48%" : "0", height: 2 }}
                  aria-hidden="true"
                >
                  <div className="h-0.5 bg-gray-200 w-full" />
                </div>

                {/* right horizontal connector (desktop only) */}
                <div
                  className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2"
                  style={{ width: !isLeft ? "48%" : "0", height: 2 }}
                  aria-hidden="true"
                >
                  <div className="h-0.5 bg-gray-200 w-full" />
                </div>

                {/* node / dot */}
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-full bg-white border-4 border-[#0F4C75] shadow-sm flex items-center justify-center transform transition-transform hover:scale-110">
                    <div className="w-3 h-3 rounded-full bg-[#0F4C75]" />
                  </div>
                </div>
              </div>

              {/* RIGHT CELL */}
              <div className="flex justify-start md:justify-start px-4 md:px-0">
                {!isLeft ? (
                  <div className="max-w-md w-full">
                    <div className="p-5 bg-white rounded-2xl shadow-md border border-gray-100">
                      <div className="text-sm text-gray-400 mb-1 font-medium">{p.year}</div>
                      <h3 className="text-lg font-semibold text-[#0F4C75]">{p.title}</h3>
                      <p className="text-gray-600 mt-2">{p.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block w-full" /> /* placeholder */
                )}
              </div>

              {/* Mobile stacked card (visible only on small screens) */}
              <div className="md:hidden px-4">
                <div className="mt-3">
                  <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-100">
                    <div className="text-sm text-gray-400 mb-1 font-medium">{p.year}</div>
                    <h3 className="text-md font-semibold text-[#0F4C75]">{p.title}</h3>
                    <p className="text-gray-600 mt-1">{p.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* entrance animation for cards */
        .shadow-md { transform: translateY(8px); opacity: 0; animation: enter 420ms ease-out forwards; }
        .space-y-12 > div:nth-child(1) .shadow-md { animation-delay: 0ms; }
        .space-y-12 > div:nth-child(2) .shadow-md { animation-delay: 80ms; }
        .space-y-12 > div:nth-child(3) .shadow-md { animation-delay: 160ms; }
        .space-y-12 > div:nth-child(4) .shadow-md { animation-delay: 240ms; }
        .space-y-12 > div:nth-child(5) .shadow-md { animation-delay: 320ms; }
        .space-y-12 > div:nth-child(6) .shadow-md { animation-delay: 400ms; }

        @keyframes enter { to { transform: translateY(0); opacity: 1; } }

        /* make sure placeholders don't collapse */
        @media (min-width: 768px) {
          .grid > div > .hidden.md\\:block { display: block !important; visibility: hidden; height: 0; }
        }

        /* mobile tweaks */
        @media (max-width: 767px) {
          /* hide desktop connectors on mobile, mobile layout uses stacked cards */
          .hidden.md\\:block { display: none !important; }
        }
      `}</style>
    </div>
  );
}
