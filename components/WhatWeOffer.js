"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const cards = [
  {
    id: "ai",
    title: "AI & ML",
    description: "End-to-end AI systems, production pipelines, and intelligent automation.",
    img: "/aiml.png",
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    description: "Full-stack Web3 apps, smart contracts, and enterprise blockchain integration.",
    img: "/blockchain.png",
  },
  {
    id: "design",
    title: "Product Design",
    description: "UX, UI, and complete digital product design with system thinking.",
    img: "/product_design.png",
  },
  {
    id: "mobile",
    title: "Android & iOS",
    description: "High-performance native and cross-platform mobile experiences.",
    img: "/mobile_development.png",
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Scalable multi-tenant SaaS infrastructure and end-to-end dashboards.",
    img: "/SAAS.png",
  },
];

export default function WhatWeOffer() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  // Close modal on Escape
  useEffect(() => {
    if (!active) return;
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const hoverTransform = reduce ? {} : { scale: 1.03, translateY: -6 };

  return (
    <section className="py-20 w-full" style={{ backgroundColor: "#efefef" }}>
      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full px-6 md:px-10 lg:px-16">

        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          What We Offer
        </h2>

        <motion.div
          variants={!reduce ? containerVariants : undefined}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6"
        >
          {/* LEFT BIG CARD */}
          <motion.div
            variants={!reduce ? cardVariants : undefined}
            className="md:col-span-2 md:row-span-2"
          >
            <button
              onClick={() => setActive(cards[0])}
              aria-label={`${cards[0].title} — open details`}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
              style={{ touchAction: "manipulation" }}
            >
              <div className="relative h-[360px] md:h-[480px]">
                <motion.div
                  whileHover={hoverTransform}
                  transition={{ type: "tween", duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={cards[0].img}
                    alt={cards[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/18 to-black/60 pointer-events-none" />
              <h3 className="absolute top-6 left-6 text-white text-3xl font-semibold drop-shadow-sm">
                {cards[0].title}
              </h3>
            </button>
          </motion.div>

          {/* RIGHT TOP */}
          <motion.div variants={!reduce ? cardVariants : undefined}>
            <button
              onClick={() => setActive(cards[1])}
              aria-label={`${cards[1].title} — open details`}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg h-[180px] md:h-full focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="relative w-full h-full">
                <motion.div
                  whileHover={hoverTransform} transition={{ type: "tween", duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image src={cards[1].img} alt={cards[1].title} fill className="object-cover" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              <h3 className="absolute top-6 left-6 text-white text-2xl font-semibold">
                {cards[1].title}
              </h3>
            </button>
          </motion.div>

          {/* RIGHT MIDDLE */}
          <motion.div variants={!reduce ? cardVariants : undefined}>
            <button
              onClick={() => setActive(cards[2])}
              aria-label={`${cards[2].title} — open details`}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg h-[180px] md:h-full focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="relative w-full h-full">
                <motion.div
                  whileHover={hoverTransform} transition={{ type: "tween", duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image src={cards[2].img} alt={cards[2].title} fill className="object-cover" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-black/28 pointer-events-none" />
              <h3 className="absolute top-6 left-6 text-white text-2xl font-semibold">
                {cards[2].title}
              </h3>
            </button>
          </motion.div>

          {/* BOTTOM LEFT */}
          <motion.div variants={!reduce ? cardVariants : undefined}>
            <button
              onClick={() => setActive(cards[3])}
              aria-label={`${cards[3].title} — open details`}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[230px] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="relative w-full h-full">
                <motion.div
                  whileHover={hoverTransform} transition={{ type: "tween", duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image src={cards[3].img} alt={cards[3].title} fill className="object-cover" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <h3 className="absolute top-6 left-6 text-white text-2xl font-semibold">
                {cards[3].title}
              </h3>
            </button>
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div variants={!reduce ? cardVariants : undefined}>
            <button
              onClick={() => setActive(cards[4])}
              aria-label={`${cards[4].title} — open details`}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[230px] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="relative w-full h-full">
                <motion.div
                  whileHover={hoverTransform} transition={{ type: "tween", duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image src={cards[4].img} alt={cards[4].title} fill className="object-cover" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <h3 className="absolute top-6 left-6 text-white text-2xl font-semibold">
                {cards[4].title}
              </h3>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-auto"
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[320px] md:h-[420px]">
                <Image
                  src={active.img}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/35" />
                <button
                  onClick={() => setActive(null)}
                  autoFocus
                  className="absolute top-6 right-6 bg-white/90 px-3 py-2 rounded-md text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Close
                </button>
                <div className="absolute left-6 bottom-6 text-white">
                  <h3 className="text-2xl font-semibold">{active.title}</h3>
                  <p className="text-sm max-w-xl mt-2">{active.description}</p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {active.title} — Services
                </h4>
                <p className="mt-3 text-gray-600">
                  {active.description} — we deliver production-grade
                  solutions, observability, security-first development and scalable teams that ship fast.
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#contact"
                    className="inline-block px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Talk to sales
                  </a>
                  <a
                    href="#case-studies"
                    className="inline-block px-5 py-2 border border-gray-200 text-sm font-semibold rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    See case studies
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
