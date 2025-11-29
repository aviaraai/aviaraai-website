"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroRotator() {
  const texts = [
    "AviaraAI Where Vision Meets Intelligence",
    "Research That Redefines Tomorrow",
    "Products That Power Possibility",
    "Designs That Speak Human",
  ];

  const DISPLAY_MS = 5500;
  const ANIM_MS = 800;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, DISPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/fixed_main_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: ANIM_MS / 1000, ease: "easeInOut" }}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight"
          >
            {index === 0 ? (
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AviaraAI{" "}
                <span className="text-gradient">
                  Where Vision Meets Intelligence
                </span>
                <br />
              </h1>
            </div>
            ) : (
              texts[index]
            )}
          </motion.h1>
        </AnimatePresence>
      </div>
    </section>
  );
}
