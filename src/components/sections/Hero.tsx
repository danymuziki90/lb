"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        delay: shouldReduceMotion ? 0 : i * 0.08,
        ease: EASE,
      },
    }),
  };

  return (
    <section
      id="accueil"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-night"
    >
      {/* Editorial background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1923] via-[#111827] to-[#1a2942]" />
        <div className="absolute -bottom-20 -left-20 h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-gold/8 blur-[90px] sm:blur-[120px]" />
        <div className="absolute -right-20 top-1/4 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-navy/60 blur-[80px] sm:blur-[100px]" />
        <div className="absolute left-0 top-[20%] h-px w-[30%] bg-gradient-to-r from-gold/30 to-transparent" />
        <div className="absolute left-0 top-[22%] h-px w-[15%] bg-gradient-to-r from-gold/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-14 sm:pt-28 sm:pb-20 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* Column 1 — text */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              custom={0}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-white/80">{t.hero.label}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-7xl break-words"
            >
              Linda J. Bauma
            </motion.h1>

            {/* Personal tagline */}
            <motion.p
              custom={2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-3 font-display text-lg italic text-gold sm:mt-4 sm:text-xl md:text-2xl break-words"
            >
              {t.hero.tagline}
            </motion.p>

            {/* Role */}
            <motion.div
              custom={3}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 space-y-1 sm:mt-6"
            >
              <p className="text-sm font-semibold text-white/95 sm:text-base md:text-lg">
                {t.hero.role}
              </p>
              <p className="text-xs text-white/60 sm:text-sm md:text-base">
                {t.hero.specialty1}
              </p>
              <p className="text-xs text-white/60 sm:text-sm md:text-base">
                {t.hero.specialty2}
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              custom={4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 h-px w-14 bg-gold sm:mt-6 sm:w-16"
              aria-hidden
            />

            {/* Description */}
            <motion.p
              custom={5}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl text-sm leading-[1.8] text-white/70 sm:mt-6 sm:text-base sm:leading-[1.85]"
            >
              {t.hero.description}
            </motion.p>

            {/* Regions */}
            <motion.p
              custom={6}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-4 text-[11px] font-bold uppercase tracking-widest text-gold/80 sm:text-xs"
            >
              {t.hero.regions}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={7}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <a
                href={siteConfig.cvPath}
                download
                className="group inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-night shadow-lg transition-all duration-300 hover:bg-gold-light hover:shadow-gold/20 sm:w-auto"
              >
                <FaDownload className="transition-transform duration-300 group-hover:-translate-y-px" />
                {t.hero.downloadCv}
              </a>
              <a
                href="#contact"
                className="group inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-white/10 sm:w-auto"
              >
                <FaEnvelope className="text-gold/90" />
                {t.hero.contact}
              </a>
              <a
                href="#expertise"
                className="group inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                {t.hero.discover}
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Column 2 — portrait with secure decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: 0.15, ease: EASE }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] p-2 xs:max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Contained decorative frames that do not cause horizontal overflow */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-2xl border border-gold/25"
                aria-hidden
              />
              <div
                className="pointer-events-none hidden sm:block absolute -bottom-3 -right-3 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-2xl border border-gold/15"
                aria-hidden
              />

              {/* Portrait */}
              <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-night/80">
                <Image
                  src={siteConfig.heroPortrait}
                  alt={t.hero.portraitAlt}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 460px"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/70 to-transparent" />
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
