"use client";

import { motion, Variants } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  },
};

export default function Impact() {
  const { t } = useLanguage();

  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-navy py-24 md:py-32"
    >
      {/* Softer Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-white/5 blur-[120px]" />
        
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            label={t.impact.label}
            title={t.impact.title}
            subtitle={t.impact.subtitle}
            light
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-6"
        >
          {t.impact.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:shadow-gold/10"
            >
              {/* Inner glowing effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold/0 via-gold/0 to-gold/0 opacity-0 transition-opacity duration-300 group-hover:from-gold/10 group-hover:opacity-100" />
              
              <p className="relative font-display text-4xl font-extrabold text-white drop-shadow-md md:text-5xl">
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="relative mt-3 text-sm font-medium tracking-wide text-white/80 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
