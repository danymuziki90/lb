"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: -40,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="parcours"
      className="bg-light py-20 dark:bg-night/50 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.career.label}
          title={t.career.title}
          subtitle={t.career.subtitle}
        />

        <div ref={timelineRef} className="relative mx-auto max-w-4xl">
          <div
            className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-gold via-institutional to-gold/30 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          {t.career.items.map((item, index) => (
            <div
              key={`${item.title}-${item.period}`}
              className={`timeline-item relative mb-12 flex md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div
                className={`w-full pl-14 md:w-1/2 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-night/5 bg-white p-6 shadow-lg shadow-night/5 transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-night"
                >
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {item.period}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-night dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-medium text-institutional dark:text-gold">
                    {item.organization}
                  </p>
                  {item.location && (
                    <p className="mt-1 text-sm text-night/50 dark:text-white/50">
                      {item.location}
                    </p>
                  )}

                  <h4 className="mt-4 text-xs font-semibold uppercase tracking-wider text-night/40 dark:text-white/40">
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
                        className={`flex items-start gap-2 text-sm text-night/70 dark:text-white/70 ${
                          index % 2 === 0
                            ? "md:flex-row-reverse"
                            : ""
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div
                className="absolute left-6 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gold bg-white dark:bg-night md:left-1/2"
                aria-hidden
              >
                <div className="h-2 w-2 rounded-full bg-institutional" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
