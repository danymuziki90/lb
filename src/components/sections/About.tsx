"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { sitePhotos } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const { t } = useLanguage();
  const valueIcons = ["🤝", "🕊️", "🌍"];

  return (
    <section id="apropos" className="relative overflow-hidden bg-warm-white py-20 md:py-32">
      {/* Subtle warm background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 0%, #f5f0e8 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            label={t.about.label}
            title={t.about.title}
            subtitle={t.about.sectionSubtitle}
            align="left"
          />
        </motion.div>

        {/* Main two-column layout: photo + text */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={sitePhotos.about.src}
                alt={sitePhotos.about.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold caption bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-6">
                <p className="font-display text-sm font-medium italic text-gold">
                  {sitePhotos.about.caption}
                </p>
              </div>
            </div>
            {/* Decorative frame */}
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-gold/20"
              aria-hidden
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Paragraphs */}
            <div className="space-y-5">
              <p className="text-lg leading-[1.85] text-night">
                {t.about.paragraphs[0]}
              </p>
              <p className="text-base leading-[1.85] text-night/70">
                {t.about.paragraphs[1]}
              </p>
            </div>

            {/* Highlighted quote */}
            <blockquote className="border-l-4 border-gold pl-6">
              <p className="font-display text-base italic leading-relaxed text-night/80 md:text-[1.05rem]">
                &ldquo;{t.about.highlight}&rdquo;
              </p>
            </blockquote>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-night/8 bg-cream px-4 py-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-navy">{stat.value}</p>
                  <p className="mt-1 text-xs text-night/55">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Core expertise tags */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                {t.about.expertiseTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.expertiseItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy/15 bg-navy/5 px-4 py-1.5 text-xs font-medium text-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values section — full width, airy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mt-24"
        >
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-gold">
            {t.about.valuesTitle}
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.about.values.map((value, i) => {
              const [title, ...rest] = value.split(" — ");
              return (
                <div
                  key={value}
                  className="group rounded-2xl border border-night/8 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
                >
                  <div className="mb-4 text-3xl">{valueIcons[i]}</div>
                  <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-night/60">{rest.join(" — ")}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
