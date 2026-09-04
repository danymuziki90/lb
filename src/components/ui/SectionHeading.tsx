"use client";

import { motion, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-8 sm:mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`mb-2.5 inline-block text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
            light ? "text-gold" : "text-institutional"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl break-words ${
          light ? "text-white" : "text-night dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg break-words ${
            align === "center" ? "" : "mx-0"
          } ${light ? "text-white/75" : "text-night/65 dark:text-white/65"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-gold sm:mt-6 sm:w-16 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </motion.div>
  );
}
