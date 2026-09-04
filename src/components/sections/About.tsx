"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { sitePhotos } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const valueIcons = ["🤝", "🕊️", "🌍"];

  return (
    <section id="apropos" className="relative overflow-hidden bg-warm-white py-14 sm:py-20 md:py-28 lg:py-32">
      {/* Subtle warm background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 0%, #f5f0e8 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.sectionSubtitle}
          align="left"
        />

        {/* Main two-column layout: photo + text */}
        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, ease: EASE }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={sitePhotos.about.src}
                  alt={sitePhotos.about.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 50vw"
                />
                {/* Gold caption bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 via-night/50 to-transparent p-4 sm:p-6">
                  <p className="font-display text-xs font-medium italic text-gold sm:text-sm">
                    {sitePhotos.about.caption}
                  </p>
                </div>
              </div>
              {/* Decorative frame */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-2xl border-2 border-gold/20 -z-10"
                aria-hidden
              />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, ease: EASE, delay: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Paragraphs */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-base leading-[1.8] text-night sm:text-lg sm:leading-[1.85]">
                {t.about.paragraphs[0]}
              </p>
              <p className="text-sm leading-[1.8] text-night/70 sm:text-base sm:leading-[1.85]">
                {t.about.paragraphs[1]}
              </p>
            </div>

            {/* Highlighted quote */}
            <blockquote className="border-l-4 border-gold pl-4 sm:pl-6">
              <p className="font-display text-sm italic leading-relaxed text-night/85 sm:text-base md:text-[1.05rem]">
                &ldquo;{t.about.highlight}&rdquo;
              </p>
            </blockquote>

            {/* Stats row: 2 cols on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 sm:grid-cols-4">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-night/8 bg-cream p-3 text-center sm:p-4"
                >
                  <p className="font-display text-xl font-bold text-navy sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-medium text-night/60 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Core expertise tags */}
            <div>
              <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-gold">
                {t.about.expertiseTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.expertiseItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy/15 bg-navy/5 px-3 py-1.5 text-xs font-medium text-navy sm:px-4"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, ease: EASE, delay: 0.1 }}
          className="mt-16 sm:mt-24"
        >
          <p className="mb-6 sm:mb-10 text-center text-xs font-bold uppercase tracking-widest text-gold">
            {t.about.valuesTitle}
          </p>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.values.map((value, i) => {
              const [title, ...rest] = value.split(" — ");
              return (
                <div
                  key={value}
                  className="group rounded-2xl border border-night/8 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-gold/30 hover:shadow-md"
                >
                  <div className="mb-3 text-2xl sm:text-3xl">{valueIcons[i]}</div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-night/65 sm:text-sm">{rest.join(" — ")}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
