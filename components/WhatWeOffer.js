"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    id: "ai",
    title: "AI & ML",
    description:
      "End-to-end AI systems, production pipelines, and intelligent automation.",
    img: "/aiml.png",
    path: "/services/ai",
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    description:
      "Full-stack Web3 apps, smart contracts, and enterprise blockchain integration.",
    img: "/blockchain.png",
    path: "/services/fullstackwebsite",
  },
  {
    id: "design",
    title: "Product Design",
    description:
      "UX, UI, and complete digital product design with systems thinking.",
    img: "/product_design.png",
    path: "/services/design",
  },
  {
    id: "mobile",
    title: "Android & iOS",
    description:
      "High-performance native and cross-platform mobile experiences.",
    img: "/mobile_development.png",
    path: "/services/mobile",
  },
  {
    id: "saas",
    title: "SaaS",
    description:
      "Scalable multi-tenant SaaS infrastructure and end-to-end dashboards.",
    img: "/SAAS.png",
    path: "/services/saas",
  },
];

export default function WhatWeOffer() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const hoverTransform = reduceMotion ? {} : { scale: 1.03, translateY: -6 };

  const renderCard = (card, size = "lg") => {
    let heightClass;

    if (size === "lg") {
      heightClass = "h-[260px] md:h-[340px]";
    } else if (size === "md") {
      heightClass = "h-[220px] md:h-[340px]";
    } else {
      heightClass = "h-[170px] md:h-[200px]";
    }

    return (
      <button
        key={card.id}
        onClick={() => router.push(card.path)}
        aria-label={`Go to ${card.title} page`}
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

        <h3 className="absolute top-3 left-4 text-white text-xl md:text-2xl font-semibold">
          {card.title}
        </h3>
      </button>
    );
  };

  return (
    <section className="py-8 md:py-10 w-full bg-[#ffffff]">
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
    </section>
  );
}
