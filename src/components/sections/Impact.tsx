"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Impact() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-navy py-14 sm:py-20 md:py-28"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -left-[10%] -top-[10%] h-[300px] w-[300px] sm:h-[40%] sm:w-[40%] rounded-full bg-gold/5 blur-[80px] sm:blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[300px] w-[300px] sm:h-[50%] sm:w-[50%] rounded-full bg-white/5 blur-[90px] sm:blur-[120px]" />
        
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.impact.label}
          title={t.impact.title}
          subtitle={t.impact.subtitle}
          light
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6"
        >
          {t.impact.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.03,
                y: -3,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-5 md:p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:shadow-gold/10"
            >
              {/* Inner glowing effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold/0 via-gold/0 to-gold/0 opacity-0 transition-opacity duration-300 group-hover:from-gold/10 group-hover:opacity-100" />
              
              <p className="relative font-display text-2xl font-extrabold text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="relative mt-2 text-xs font-medium tracking-wide text-white/80 sm:mt-3 sm:text-sm md:text-base break-words">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
