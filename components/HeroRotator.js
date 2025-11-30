"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function HeroRotator() {
  const texts = [
    "AviaraAI Where Vision Meets Intelligence",
    "Research That Redefines Tomorrow",
    "Products That Power Possibility",
    "Designs That Speak Human",
  ];

  // kept DISPLAY_MS from main in case you want an auto-advance duration later
  const DISPLAY_MS = 5500;

  // preserved the trail branch typing controls (more granular)
  const TYPING_SPEED = 35;
  const PAUSE_AFTER_FULL_MS = 900;
  const ANIM_MS = 1000; // kept trail value (matches typing pacing)
  const CURSOR_BLINK_MS = 700;

  const reduce = useReducedMotion();

  const [index, setIndex] = useState(0);

  // typed parts
  const [typedSubtitle, setTypedSubtitle] = useState(""); // for Aviara slide
  const [typedRemainder, setTypedRemainder] = useState(""); // for other slides

  // global typing flag
  const [isTyping, setIsTyping] = useState(false);

  const typingTimerRef = useRef(null);
  const advanceTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  useEffect(() => {
    // reset typed states and clear timers when index changes
    setTypedSubtitle("");
    setTypedRemainder("");
    setIsTyping(false);

    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  }, [index]);

  const splitFirstWord = (str) => {
    if (!str) return ["", ""];
    const firstSpace = str.indexOf(" ");
    if (firstSpace === -1) return [str, ""];
    const first = str.slice(0, firstSpace);
    const remainder = str.slice(firstSpace); // includes leading space
    return [first, remainder];
  };

  const beginTyping = () => {
    setIsTyping(true);

    if (reduce) {
      if (index === 0) {
        setTypedSubtitle("Where Vision Meets Intelligence");
      } else {
        const [, remainder] = splitFirstWord(texts[index] || "");
        setTypedRemainder(remainder);
      }
      advanceTimerRef.current = setTimeout(() => {
        setIsTyping(false);
        setIndex((i) => (i + 1) % texts.length);
      }, PAUSE_AFTER_FULL_MS);
      return;
    }

    if (index === 0) {
      const subtitle = "Where Vision Meets Intelligence";
      let i = 0;
      setTypedSubtitle("");
      typingTimerRef.current = setInterval(() => {
        i++;
        setTypedSubtitle(subtitle.slice(0, i));
        if (i >= subtitle.length) {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          advanceTimerRef.current = setTimeout(() => {
            setIsTyping(false);
            setIndex((s) => (s + 1) % texts.length);
          }, PAUSE_AFTER_FULL_MS);
        }
      }, TYPING_SPEED);
    } else {
      const [, remainder] = splitFirstWord(texts[index] || "");
      let i = 0;
      setTypedRemainder("");
      typingTimerRef.current = setInterval(() => {
        i++;
        setTypedRemainder(remainder.slice(0, i));
        if (i >= remainder.length) {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          advanceTimerRef.current = setTimeout(() => {
            setIsTyping(false);
            setIndex((s) => (s + 1) % texts.length);
          }, PAUSE_AFTER_FULL_MS);
        }
      }, TYPING_SPEED);
    }
  };

  const variants = {
    enter: { opacity: 0, y: 12, scale: 0.995 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.995 },
  };

  const transition = reduce
    ? { duration: 0.01 }
    : { duration: ANIM_MS / 1000, ease: [0.22, 0.8, 0.2, 1] };

  const cursorStyle = `
    @keyframes blinkCursor {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
    .typed-cursor {
      display: inline-block;
      width: 0.65ch;
      margin-left: 0.12rem;
      animation: blinkCursor ${CURSOR_BLINK_MS}ms steps(2, start) infinite;
      vertical-align: baseline;
    }
    .typed-cursor.faint {
      opacity: 0.45;
    }
    @media (prefers-reduced-motion: reduce) {
      .typed-cursor { animation: none; opacity: 1; }
    }
  `;

  // cursor visibility helpers
  const showCursorForAviara = () => isTyping || typedSubtitle.length > 0;
  const showCursorForOther = () => isTyping || typedRemainder.length > 0;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{cursorStyle}</style>

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

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            onAnimationComplete={(phase) => {
              if (phase === "center") beginTyping();
            }}
            className="text-white text-center"
          >
            {index === 0 ? (
              /* Aviara slide — same as before: AviaraAI static, subtitle typed inline, cursor after subtitle */
              <div className="mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  AviaraAI{" "}
                  <span className="text-gradient">
                    {typedSubtitle}
                    {showCursorForAviara() && (
                      <span
                        className="typed-cursor"
                        aria-hidden="true"
                        style={{ opacity: reduce ? 0.6 : 1 }}
                      >
                        |
                      </span>
                    )}
                  </span>
                  <br />
                </h1>

                <span className="block mt-2 text-lg md:text-xl font-medium opacity-90 tracking-wide">
                  Research &nbsp;&nbsp;•&nbsp;&nbsp; Products &nbsp;&nbsp;•&nbsp;&nbsp; Design
                </span>
              </div>
            ) : (
              /* Other slides — first word static, cursor initially after it (faint), then typed remainder appears and cursor moves after typed remainder */
              (() => {
                const full = texts[index] || "";
                const [first, remainder] = splitFirstWord(full);
                const remainderExists = remainder.length > 0;

                return (
                  <div>
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold block">
                      <span className="font-extrabold">{first}</span>
                      {/* If nothing typed yet, show a faint cursor right after first word */}
                      {!typedRemainder && showCursorForOther() && (
                        <span
                          className="typed-cursor faint"
                          aria-hidden="true"
                          style={{ opacity: reduce ? 0.4 : 0.45 }}
                        >
                          |
                        </span>
                      )}

                      {/* typed remainder appears here (it includes leading space) */}
                      <span>{typedRemainder}</span>

                      {/* once remainder has characters, show the normal cursor after the typed text so it moves */}
                      {typedRemainder && showCursorForOther() && (
                        <span
                          className="typed-cursor"
                          aria-hidden="true"
                          style={{ opacity: reduce ? 0.6 : 1 }}
                        >
                          |
                        </span>
                      )}
                    </span>
                  </div>
                );
              })()
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
