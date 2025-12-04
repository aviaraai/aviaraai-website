"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const cards = [
  {
    id: "ai",
    title: "AI & ML",
    description:
      "End-to-end AI systems, production pipelines, and intelligent automation.",
    img: "/aiml.png",
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    description:
      "Full-stack Web3 apps, smart contracts, and enterprise blockchain integration.",
    img: "/blockchain.png",
  },
  {
    id: "design",
    title: "Product Design",
    description:
      "UX, UI, and complete digital product design with system thinking.",
    img: "/product_design.png",
  },
  {
    id: "mobile",
    title: "Android & iOS",
    description:
      "High-performance native and cross-platform mobile experiences.",
    img: "/mobile_development.png",
  },
  {
    id: "saas",
    title: "SaaS",
    description:
      "Scalable multi-tenant SaaS infrastructure and end-to-end dashboards.",
    img: "/SAAS.png",
  },
];

export default function WhatWeOffer() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

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

  const renderCard = (card, size = "lg") => {
    let heightClass;

    if (size === "lg") {
      // big AI card
      heightClass = "h-[260px] md:h-[340px]";
    } else if (size === "md") {
      // Product Design: taller so it lines up visually with bottom row
      heightClass = "h-[220px] md:h-[340px]";
    } else {
      // "sm" → Blockchain, Android & iOS, SaaS
      heightClass = "h-[170px] md:h-[200px]";
    }

    return (
      <button
        onClick={() => setActive(card)}
        aria-label={`${card.title} — open details`}
        className="group relative w-full rounded-2xl overflow-hidden shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
      >
        <div className={`relative w-full ${heightClass}`}>
          <motion.div
            whileHover={hoverTransform}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 to-black/60" />
        <h3 className="absolute top-3 left-4 text-white text-xl md:text-2xl font-semibold">
          {card.title}
        </h3>
      </button>
    );
  };

  return (
    <section className="py-8 md:py-10 w-full bg-[#ffffff]">
      {/* full-screen grey background */}

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          What We Offer
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            <motion.div variants={cardVariants}>
              {renderCard(cards[0], "lg")}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={cardVariants}>
                {renderCard(cards[3], "sm")}
              </motion.div>
              <motion.div variants={cardVariants}>
                {renderCard(cards[4], "sm")}
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            <motion.div variants={cardVariants}>
              {renderCard(cards[1], "sm")}
            </motion.div>
            <motion.div variants={cardVariants}>
              {renderCard(cards[2], "md")}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
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
                  src={active?.img}
                  alt={active?.title || ""}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/35" />

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-6 right-6 bg-white/90 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Close
                </button>

                <div className="absolute left-6 bottom-6 text-white">
                  <h3 className="text-2xl font-semibold">{active?.title}</h3>
                  <p className="text-sm max-w-xl mt-2">
                    {active?.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {active?.title} — Services
                </h4>
                <p className="mt-3 text-gray-600">
                  {active?.description} — we deliver production-grade solutions.
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#contact"
                    className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm"
                  >
                    Talk to sales
                  </a>
                  <a
                    href="#case-studies"
                    className="px-5 py-2 border rounded-md text-sm"
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
