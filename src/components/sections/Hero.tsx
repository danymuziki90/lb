"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-night"
    >
      {/* Warm editorial background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1923] via-[#111827] to-[#1a2942]" />
        {/* Warm gold accent blobs */}
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-gold/8 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-navy/60 blur-[100px]" />
        {/* Subtle diagonal lines */}
        <div className="absolute left-0 top-[20%] h-px w-[30%] bg-gradient-to-r from-gold/30 to-transparent" />
        <div className="absolute left-0 top-[22%] h-px w-[15%] bg-gradient-to-r from-gold/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left column — text */}
          <div className="order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              custom={0}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-white/70">{t.hero.label}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[3.5rem] xl:text-7xl"
            >
              Linda J. Bauma
            </motion.h1>

            {/* Personal tagline */}
            <motion.p
              custom={2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-4 font-display text-xl italic text-gold sm:text-2xl"
            >
              {t.hero.tagline}
            </motion.p>

            {/* Role */}
            <motion.div
              custom={3}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-6 space-y-1"
            >
              <p className="text-base font-semibold text-white/90 sm:text-lg">{t.hero.role}</p>
              <p className="text-sm text-white/55 sm:text-base">{t.hero.specialty1}</p>
              <p className="text-sm text-white/55 sm:text-base">{t.hero.specialty2}</p>
            </motion.div>

            {/* Divider */}
            <motion.div
              custom={4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-6 h-px w-16 bg-gold"
              aria-hidden
            />

            {/* Description */}
            <motion.p
              custom={5}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-[1.8] text-white/60 sm:text-[1.05rem]"
            >
              {t.hero.description}
            </motion.p>

            {/* Regions */}
            <motion.p
              custom={6}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-4 text-xs font-medium uppercase tracking-widest text-gold/70"
            >
              {t.hero.regions}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={7}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={siteConfig.cvPath}
                download
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-night shadow-lg transition-all duration-300 hover:bg-gold-light hover:shadow-gold/20 hover:shadow-xl"
              >
                <FaDownload className="transition-transform duration-300 group-hover:-translate-y-px" />
                {t.hero.downloadCv}
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-white/10"
              >
                <FaEnvelope className="text-gold/80" />
                {t.hero.contact}
              </a>
              <a
                href="#expertise"
                className="group inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white"
              >
                {t.hero.discover}
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right column — portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <figure className="relative w-full max-w-sm lg:max-w-md">
              {/* Warm decorative frame */}
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-gold/20"
                aria-hidden
              />
              <div
                className="absolute -bottom-8 -right-8 h-full w-full rounded-2xl border border-gold/10"
                aria-hidden
              />
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={siteConfig.heroPortrait}
                  alt={t.hero.portraitAlt}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                />
                {/* Subtle warm overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/60 to-transparent" />
              </div>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
