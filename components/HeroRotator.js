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

  const TYPING_SPEED = 80;
  const PAUSE_AFTER_FULL_MS = 1000;
  const ANIM_MS = 1400;
  const CURSOR_BLINK_MS = 700;

  // delay before typing starts (milliseconds)
  const TYPING_START_DELAY_MS = 400;

  const reduce = useReducedMotion();

  const [index, setIndex] = useState(0);

  // typed parts
  const [typedSubtitle, setTypedSubtitle] = useState(""); // for Aviara slide
  const [typedRemainder, setTypedRemainder] = useState(""); // for other slides (now instant)

  // global typing flag
  const [isTyping, setIsTyping] = useState(false);

  const typingTimerRef = useRef(null);
  const advanceTimerRef = useRef(null);
  const typingDelayRef = useRef(null); // holds the startup delay timeout

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      if (typingDelayRef.current) clearTimeout(typingDelayRef.current);
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
    if (typingDelayRef.current) {
      clearTimeout(typingDelayRef.current);
      typingDelayRef.current = null;
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
    // NOTE: don't set isTyping here — we want the cursor to appear only AFTER the startup delay
    // clear any existing startup delay just in case
    if (typingDelayRef.current) {
      clearTimeout(typingDelayRef.current);
      typingDelayRef.current = null;
    }

    // Start typing logic after the small startup delay so "AviaraAI" is visible first
    typingDelayRef.current = setTimeout(() => {
      // Now typing is effectively starting — show cursor
      setIsTyping(true);

      // reduced-motion branch
      if (reduce) {
        if (index === 0) {
          // leading space so typing visually starts after "AviaraAI "
          setTypedSubtitle(" Where Vision Meets Intelligence");
        } else {
          // show other slides instantly (no typing)
          const [, remainder] = splitFirstWord(texts[index] || "");
          setTypedRemainder(remainder);
        }

        advanceTimerRef.current = setTimeout(() => {
          setIsTyping(false);
          setIndex((i) => (i + 1) % texts.length);
        }, PAUSE_AFTER_FULL_MS);
        typingDelayRef.current = null;
        return;
      }

      // non-reduced motion
      if (index === 0) {
        // Aviara slide: keep typing animation
        const subtitle = " Where Vision Meets Intelligence";
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
        // Other slides: immediately set the remainder (no typing), then advance after pause
        const [, remainder] = splitFirstWord(texts[index] || "");
        setTypedRemainder(remainder);
        advanceTimerRef.current = setTimeout(() => {
          setIsTyping(false);
          setIndex((s) => (s + 1) % texts.length);
        }, PAUSE_AFTER_FULL_MS);
      }

      typingDelayRef.current = null;
    }, TYPING_START_DELAY_MS);
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
    @media (prefers-reduced-motion: reduce) {
      .typed-cursor { animation: none; opacity: 1; }
    }
  `;

  // cursor visibility helpers (only used for Aviara)
  const showCursorForAviara = () => isTyping || typedSubtitle.length > 0;

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
          preload="auto"
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
              /* Aviara slide — AviaraAI static, subtitle typed inline, cursor after subtitle */
              <div className="mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
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
              /* Other slides — first word static, remainder shown instantly, NO cursor */
              (() => {
                const full = texts[index] || "";
                const [first, remainder] = splitFirstWord(full);

                return (
                  <div>
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold block">
                      <span className="font-extrabold">{first}</span>

                      {/* remainder is shown immediately (includes leading space) */}
                      <span>{typedRemainder || remainder}</span>
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
