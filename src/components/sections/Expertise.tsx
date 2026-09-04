"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Expertise() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="expertise" className="bg-cream py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.expertise.label}
          title={t.expertise.title}
          subtitle={t.expertise.subtitle}
        />

        <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {t.expertise.items.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.65,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: EASE,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xs transition-all duration-300 hover:shadow-lg"
              >
                {/* Top gold accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-gold to-gold-light" />

                <div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-navy/8 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  {/* Number */}
                  <p className="mb-2 font-display text-4xl sm:text-5xl font-bold text-cream-dark">
                    0{index + 1}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-navy md:text-2xl break-words">
                    {area.title}
                  </h3>

                  {/* Divider */}
                  <div className="my-4 sm:my-5 h-px w-10 bg-gold" />

                  {/* Description */}
                  <p className="flex-1 text-xs leading-[1.8] text-night/70 sm:text-sm sm:leading-[1.85] md:text-[0.95rem]">
                    {area.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
