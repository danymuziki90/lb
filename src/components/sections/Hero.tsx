"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: EASE },
  }),
};

function AfricaWatermark() {
  return (
    <svg
      viewBox="0 0 400 420"
      className="h-full w-full"
      fill="none"
      aria-hidden
    >
      <path
        d="M60 80 C90 50 140 45 180 55 C220 40 270 50 310 75 C340 100 355 140 345 180 C360 220 350 270 320 310 C280 360 220 380 170 370 C120 365 80 340 55 300 C30 260 25 210 40 170 C50 130 45 100 60 80 Z"
        stroke="#0B1F3A"
        strokeWidth="0.6"
        fill="#0B1F3A"
        fillOpacity="0.02"
        strokeOpacity="0.06"
      />
      <line
        x1="40"
        y1="200"
        x2="360"
        y2="200"
        stroke="#C8A96B"
        strokeWidth="0.4"
        strokeOpacity="0.12"
      />
      <line
        x1="80"
        y1="280"
        x2="320"
        y2="280"
        stroke="#C8A96B"
        strokeWidth="0.4"
        strokeOpacity="0.08"
      />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-night"
    >
      {/* Fond premium discret */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Subtle two-tone gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222] via-[#0f172a] to-[#111827]" />

        {/* Modern geometric pattern (very low opacity) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='none' stroke='%230b1f3a' stroke-width='0.8' stroke-opacity='0.03'%3E%3Cpath d='M0 20 L20 0 M40 20 L60 0 M80 20 L100 0 M120 20 L140 0 M160 20 L180 0'/%3E%3Cpath d='M0 60 L20 40 M40 60 L60 40 M80 60 L100 40 M120 60 L140 40 M160 60 L180 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "160px 160px",
            mixBlendMode: "overlay",
          }}
        />
        {/* Filigrane Afrique */}
        <div className="absolute -right-12 top-1/2 h-[68%] w-[44%] max-w-lg -translate-y-1/2 opacity-20 blur-[0.2px] lg:right-8">
          <AfricaWatermark />
        </div>
        {/* Lignes diplomatiques */}
        <div className="absolute left-0 top-[18%] h-px w-1/3 bg-gradient-to-r from-[#C8A96B]/25 to-transparent" />
        <div className="absolute bottom-[22%] right-0 h-px w-1/4 bg-gradient-to-l from-[#0B1F3A]/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Colonne gauche */}
          <div className="order-1">
            <motion.p
              custom={0}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mb-5 flex items-center gap-2.5 text-sm text-white\/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              {t.hero.label}
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Linda J. Bauma
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 space-y-1.5"
            >
              <p className="text-lg font-semibold text-white sm:text-xl">
                {t.hero.role}
              </p>
              <p className="text-base text-white\/70 sm:text-lg">
                {t.hero.specialty1}
              </p>
              <p className="text-base text-white\/70 sm:text-lg">
                {t.hero.specialty2}
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 h-px w-12 bg-[#C8A96B]"
              aria-hidden
            />

            <motion.p
              custom={4}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-lg font-display text-base italic leading-relaxed text-white/80 sm:text-lg"
            >
              {t.hero.intro}
            </motion.p>

            <motion.p
              custom={5}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl text-justify text-base leading-[1.75] text-white/65 sm:text-[1.05rem]"
            >
              {t.hero.description}
            </motion.p>

            <motion.p
              custom={6}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-4 text-sm font-medium tracking-wide text-white/50"
            >
              {t.hero.regions}
            </motion.p>

            <motion.div
              custom={7}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href={siteConfig.cvPath}
                download
                  className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-night shadow-lg transition-transform duration-300 hover:bg-gold-light"
              >
                <FaDownload className="text-[#C8A96B] transition-transform duration-300 group-hover:-translate-y-px" />
                {t.hero.downloadCv}
              </a>
              <a
                href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md border border-gold bg-transparent px-6 py-3 text-sm font-semibold text-gold transition-shadow duration-300 hover:bg-gold/10 hover:shadow-lg"
              >
                <FaEnvelope className="text-[#C8A96B]/80" />
                {t.hero.contact}
              </a>
              <a
                href="#parcours"
                className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white"
              >
                {t.hero.discover}
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Colonne droite — portrait */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="order-2 flex justify-center lg:justify-end"
          >
            <figure className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-tr from-[#081227] via-[#0f172a] to-[#132033] border border-white/6 shadow-2xl">
                <Image
                  src={siteConfig.heroPortrait}
                  alt={t.hero.portraitAlt}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
              </div>
              {/* Encadrement discret */}
              <div
                className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-white/6"
                aria-hidden
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



