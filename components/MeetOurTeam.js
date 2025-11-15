// components/MeetOurTeam.js
"use client";
import React from "react";

export default function MeetOurTeam() {
  const team = [
    {
      id: 1,
      name: "Peter McKay",
      title: "CEO",
      img: "/team/Peter.png",
      linkedin: "#",
      bio: "Peter is the CEO of Snyk. In previous roles as CEO, Peter led multiple software companies through hypergrowth, including Watchfire (acquired by IBM), Desktone (acquired by VMWare), and Veeam. When not running Snyk, Peter can be found reading or listening to books, biking, or running.",
    },
    {
      id: 2,
      name: "Diana Brunelle",
      title: "Chief People Officer",
      img: "/team/Diana.png",
      linkedin: "#",
      bio: "Diana focuses on culture and people systems, scaling teams with empathy and operational rigor. She has 15+ years building people ops for fast-growing companies.",
    },
    {
      id: 3,
      name: "Ken MacAskill",
      title: "Chief Financial Officer",
      img: "/team/Ken.png",
      linkedin: "#",
      bio: "Ken manages finance, operations and investor relations with precision. He brings deep experience in scaling finance teams and SaaS unit-economics.",
    },
    {
      id: 4,
      name: "Danny Allan",
      title: "Chief Technology Officer",
      img: "/team/Danny.png",
      linkedin: "#",
      bio: "Danny heads engineering and platform architecture across our products. He focuses on reliability, developer experience and scalable systems.",
    },
  ];

  const [flippedId, setFlippedId] = React.useState(null);
  const handleFlip = (id) => setFlippedId((cur) => (cur === id ? null : id));

  // Flip card styles
  const cardOuterStyle = { perspective: "1200px" };
  const innerBaseStyle = {
    transition: "transform 700ms cubic-bezier(.2,.9,.3,1)",
    transformStyle: "preserve-3d",
    position: "relative",
    width: "100%",
    height: "100%",
  };
  const faceStyle = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    position: "absolute",
    inset: 0,
  };

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">
          Meet our team
        </h2>

        <div className="relative">
          {/* Scroll on mobile, grid on desktop */}
          <div className="overflow-x-auto md:overflow-visible -mx-3 md:mx-0 pb-6">
            <div className="flex md:grid md:grid-cols-4 gap-6 px-3 md:px-0">
              {team.map((person) => {
                const isFlipped = flippedId === person.id;

                return (
                  <div
                    key={person.id}
                    className="min-w-[280px] flex-shrink-0 md:min-w-0 md:w-full snap-start md:snap-none h-[420px]"
                    style={cardOuterStyle}
                  >
                    <div
                      className="h-[420px] w-full relative rounded-xl"
                      style={{
                        ...innerBaseStyle,
                        transform: isFlipped
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                      }}
                    >
                      {/* FRONT */}
                      <article
                        style={faceStyle}
                        className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white h-full flex flex-col"
                        aria-hidden={isFlipped}
                      >
                        <div className="h-56 bg-gray-900">
                          <img
                            src={person.img}
                            alt={person.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-lg font-semibold text-black">
                            {person.name}
                          </h3>
                          <p className="text-sm text-black/70 mt-2">
                            {person.title}
                          </p>

                          <div className="mt-auto flex items-center justify-between">
                            {/* LinkedIn */}
                            <a
                              href={person.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="3.5"
                                  fill="#0A66C2"
                                />
                                <path
                                  d="M6.94 9.23h2.37V18H6.94zM8.15 6.9a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92zM11.58 9.23h2.27v1.17h.03c.32-.61 1.1-1.25 2.27-1.25 2.43 0 2.88 1.6 2.88 3.68V18h-2.37v-4.07c0-.97 0-2.22-1.35-2.22-1.35 0-1.55 1.05-1.55 2.13V18h-2.37z"
                                  fill="#fff"
                                />
                              </svg>
                            </a>

                            {/* Flip Button */}
                            <button
                              onClick={() => handleFlip(person.id)}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-black flex items-center gap-2 hover:bg-white/10"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 opacity-80"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                                />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                              Bio
                            </button>
                          </div>
                        </div>
                      </article>

                      {/* BACK */}
                      <aside
                        style={{ ...faceStyle, transform: "rotateY(180deg)" }}
                        className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#031133] p-6 text-white h-full flex flex-col"
                        aria-hidden={!isFlipped}
                      >
                        <div className="text-sm mb-4 leading-relaxed overflow-auto">
                          {person.bio}
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="3.5"
                                fill="#0A66C2"
                              />
                              <path
                                d="M6.94 9.23h2.37V18H6.94zM8.15 6.9a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92zM11.58 9.23h2.27v1.17h.03c.32-.61 1.1-1.25 2.27-1.25 2.43 0 2.88 1.6 2.88 3.68V18h-2.37v-4.07c0-.97 0-2.22-1.35-2.22-1.35 0-1.55 1.05-1.55 2.13V18h-2.37z"
                                fill="#fff"
                              />
                            </svg>
                          </a>

                          <button
                            onClick={() => setFlippedId(null)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white"
                          >
                            Close
                          </button>
                        </div>
                      </aside>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="mt-3 text-sm text-white/40 italic px-3 md:hidden">
            Swipe → to see more
          </div>
        </div>
      </div>
    </section>
  );
}
