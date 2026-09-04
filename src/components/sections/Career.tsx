"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          x: window.innerWidth < 768 ? -16 : -32,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="parcours"
      className="overflow-hidden bg-light py-14 sm:py-20 dark:bg-night/50 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.career.label}
          title={t.career.title}
          subtitle={t.career.subtitle}
        />

        <div ref={timelineRef} className="relative mx-auto max-w-4xl overflow-hidden">
          {/* Vertical timeline bar */}
          <div
            className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-gold via-institutional to-gold/30 sm:left-6 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          {t.career.items.map((item, index) => (
            <div
              key={`${item.title}-${item.period}`}
              className={`timeline-item relative mb-8 flex sm:mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div
                className={`w-full pl-8 sm:pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  className="rounded-2xl border border-night/5 bg-white p-4 sm:p-6 shadow-md shadow-night/5 transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-night"
                >
                  <span className="inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-night dark:text-white break-words">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-institutional dark:text-gold break-words">
                    {item.organization}
                  </p>
                  {item.location && (
                    <p className="mt-0.5 text-xs sm:text-sm text-night/50 dark:text-white/50">
                      {item.location}
                    </p>
                  )}

                  <h4 className="mt-3 sm:mt-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-night/45 dark:text-white/45">
                    {item.type === "responsibilities"
                      ? t.career.types.responsibilities
                      : t.career.types.achievements}
                  </h4>
                  <ul
                    className={`mt-2 space-y-1.5 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {item.items.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-night/70 dark:text-white/70 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span className="break-words">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline indicator node */}
              <div
                className="absolute left-4 top-6 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-gold bg-white dark:bg-night sm:h-4 sm:w-4 sm:border-4 sm:left-6 md:left-1/2"
                aria-hidden
              >
                <div className="h-1.5 w-1.5 rounded-full bg-institutional sm:h-2 sm:w-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
