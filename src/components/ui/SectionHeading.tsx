"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold" : "text-institutional"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-night dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            align === "center" ? "" : "mx-0"
          } ${light ? "text-white/70" : "text-night/60 dark:text-white/60"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </motion.div>
  );
}
