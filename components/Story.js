"use client";
import React from "react";
import Link from "next/link";

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

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      <section
        className="w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: "url('/about_us.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/65 md:via-black/40 md:to-transparent" />
        </div>

        <div className="absolute left-8 top-10 md:left-16 md:top-16 z-30">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Our Timeline
          </h1>
        </div>

        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-30 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <div className="relative md:pl-6">
                <div className="absolute md:-top-6 left-0 z-40">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 text-white text-sm shadow">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="font-medium">2013</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-2 p-6 bg-white/5 backdrop-blur-sm rounded-md">
                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                    Launched oyorooms.com
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-4 flex items-start justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 left-6 z-40">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 text-white text-sm shadow">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="font-medium">2013</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-2 p-6 bg-white/5 backdrop-blur-sm rounded-md">
                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                    Launched oyorooms.com
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-3 lg:col-span-4 flex items-start justify-end">
              <div className="relative w-full max-w-md md:pr-6">
                <div className="absolute -top-6 right-0 z-40">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 text-white text-sm shadow">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="font-medium">2014</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-2 p-6 bg-white/5 backdrop-blur-sm rounded-md text-right">
                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                    Receives Series-A funding
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
          <div className="text-white/30 select-none">• 2015</div>
        </div>

        <button
          aria-hidden
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white/30 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </section>
    </main>
  );
}
