"use client";
import React from "react";
import Image from "next/image";
import MeetOurTeam from "./MeetOurTeam";

export default function Story() {
  // ---------- TIMELINE DATA ----------
  const timelineItems = [
    { year: "2019", title: "Launched AviaraAI" },
    { year: "2020", title: "Registered at Sillicon Valley, CA" },
    { year: "2021", title: "Receives Series-A funding" },
    { year: "2022", title: "Expanded to 100+ cities" },
    { year: "2023", title: "Launched OYO Global" },
    { year: "2024", title: "Raised Series-B funding" },
  ];

  // ---------- STATE ----------
  const [index, setIndex] = React.useState(0);
  const visibleItems = timelineItems.slice(index, index + 3);

  const handleNext = () => {
    if (index + 3 < timelineItems.length) {
      setIndex((i) => i + 3);
    }
  };

  const handlePrev = () => {
    if (index - 3 >= 0) {
      setIndex((i) => i - 3);
    }
  };

  return (
    <main className="font-sora text-[#0F4C75] bg-white">
      {/* ---------- MISSION ---------- */}
      <section className="w-full h-screen flex flex-col md:flex-row bg-[#efefef]">
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

        <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
          <img
            src="/api/media/about_us.gif"
            alt="About Us Animation"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
      </section>

      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- VISION ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Our Vision
        </h2>

        <p className="lead mb-6">
          At Aviara AI, we believe AI should be accessible, practical, and
          impactful. Many of the technologies we are building might exist in
          theory — but are not adapted or deployed in the real world.
        </p>

        <p className="text-lg text-black/80 leading-relaxed mb-4">
          As early adopters of cutting-edge AI, we take the responsibility to
          bring these innovations to clients, tailor them to real environments,
          and make them usable at scale.
        </p>

        <p className="text-lg text-black/80 leading-relaxed mb-4">
          We are building products that can save lives, protect assets, and
          transform industries — all with the infrastructure organizations
          already have.
        </p>

        <p className="text-lg text-black/80 leading-relaxed font-semibold">
          Aviara AI is not just a company. It is a vision for a safer, smarter
          future.
        </p>
      </section>

      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- STORY ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Our Story
        </h2>

        <div className="prose max-w-none lg:columns-2 lg:gap-12 text-black/80 prose-lg">
          <p>
            Aviara AI was born from a realization: Most disasters — accidents,
            thefts, health emergencies, and safety failures — are only
            recognized after the damage is done.
          </p>

          <p>
            By the time someone notices a problem, it is already too late. Lives
            are affected, finances are lost, and response time becomes the
            enemy.
          </p>

          <blockquote className="border-l-4 border-[#0F4C75] pl-6 italic my-4">
            “What if we could identify danger at the moment it starts — or even
            before?”
          </blockquote>

          <p>That question led to the foundation of Aviara AI.</p>

          <p>
            Leveraging the latest advancements in computer vision, machine
            learning, and edge AI, we began designing a suite of Predictive
            Alert Systems — specialized AI models that can work on existing
            camera infrastructure and send real-time alerts to authorities.
          </p>

          <p>
            Today, Aviara AI is shaping the next phase of safety technology with
            smart, adaptable, and proactive AI solutions for industries, cities,
            public spaces, and enterprises. We are committed to building systems
            that not only observe but also understand and respond.
          </p>

          <p className="font-semibold mt-2">
            Because safety shouldn’t wait for something to go wrong.
          </p>
        </div>
      </section>

      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- TIMELINE (side arrows only on 2xl+, bottom for others) ---------- */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src="/api/media/team_com.gif"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/65 md:via-black/40 md:to-transparent" />
        </div>

        {/* Heading */}
        <div className="absolute left-8 top-10 md:left-16 md:top-16 z-40">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Our Timeline
          </h1>
        </div>

        {/* CARDS (centered in the section) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-6 items-start">
              {visibleItems.map((item, i) => {
                const justifyClass =
                  i === 0
                    ? "justify-start"
                    : i === 1
                    ? "justify-center"
                    : "justify-end";

                return (
                  <div
                    key={index + i}
                    className={`col-span-12 md:col-span-4 lg:col-span-4 flex ${justifyClass}`}
                  >
                    <div className="relative w-full max-w-md p-6 pt-12 bg-white/5 backdrop-blur-sm rounded-md min-h-[130px]">
                      {/* year */}
                      <div className="absolute left-4 top-4 z-40">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 text-white text-xs shadow">
                          <span className="w-2 h-2 rounded-full bg-white" />
                          <span>{item.year}</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight m-0">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ---------- BOTTOM CONTROLS for screens < 2xl (in-flow, never absolute) ---------- */}
            <div className="mt-8 flex 2xl:hidden items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className={`w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center ${
                  index === 0
                    ? "opacity-40 pointer-events-none"
                    : "hover:bg-white/30"
                }`}
                aria-label="Previous timeline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className={`w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center ${
                  index + 3 >= timelineItems.length
                    ? "opacity-40 pointer-events-none"
                    : "hover:bg-white/30"
                }`}
                aria-label="Next timeline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ---------- SIDE ARROWS for extra-large screens (2xl+) ---------- */}
        {/* PREV (only when there's a previous page) */}
        {index > 0 && (
          <button
            onClick={handlePrev}
            className="hidden 2xl:flex absolute left-12 top-1/2 -translate-y-1/2 z-50 
                  w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white 
                  hover:bg-white/30 items-center justify-center"
            aria-label="Previous timeline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* NEXT (visible on 2xl+, disabled visually when end reached) */}
        <button
          onClick={handleNext}
          className={`hidden 2xl:flex absolute right-12 top-1/2 -translate-y-1/2 z-50 
                w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white 
                hover:bg-white/30 items-center justify-center ${
                  index + 3 >= timelineItems.length
                    ? "opacity-40 pointer-events-none"
                    : ""
                }`}
          aria-label="Next timeline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </section>

      {/* --------- INSERT MEET OUR TEAM PAGE BELOW THE TIMELINE --------- */}
      <MeetOurTeam />

    </main>
  );
}
