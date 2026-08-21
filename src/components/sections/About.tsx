"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 dark:from-night/40 dark:via-night/20 dark:to-night/40 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.sectionSubtitle}
          align="left"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="space-y-4 rounded-2xl border border-night/8 bg-white/60 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-10">
              <p className="text-justify text-lg leading-8 text-night dark:text-white">
                {t.about.paragraphs[0]}
              </p>
              <p className="text-justify text-base leading-7 text-night/65 dark:text-white/70">
                {t.about.paragraphs[1]}
              </p>
              <p className="border-l-3 border-gold pl-5 text-justify text-base font-medium leading-7 text-night dark:text-white/90">
                {t.about.highlight}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-night/8 bg-white/60 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-institutional dark:text-gold">
                {t.about.valuesTitle}
              </h3>
              <ul className="mt-7 grid gap-4">
                {t.about.values.map((value) => (
                  <li key={value} className="flex items-center gap-3.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-gold to-gold/70" />
                    <span className="text-sm font-medium text-night dark:text-white/90">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-night/8 bg-white/60 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-institutional dark:text-gold">
                {t.about.expertiseTitle}
              </h3>
              <div className="mt-7 space-y-2.5">
                {t.about.expertiseItems.map((expertise) => (
                  <div
                    key={expertise}
                    className="flex items-center gap-3 rounded-lg border border-night/5 bg-night/[0.02] px-4 py-3 transition-all hover:border-gold/30 hover:bg-gold/5 dark:border-white/8 dark:bg-white/[0.02] dark:hover:bg-gold/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-institutional dark:bg-gold" />
                    <span className="text-sm text-night/75 dark:text-white/80">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-2xl border border-night/8 bg-white/60 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-10"
        >
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-institutional dark:text-gold">
              {t.about.domainTitle}
            </h3>
            <p className="mt-3 text-sm text-night/60 dark:text-white/60">
              {t.about.timelineIntro}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {t.about.domains.map((domain) => (
              <span
                key={domain}
                className="inline-block rounded-full border border-night/10 bg-night/[0.02] px-4 py-2 text-xs font-medium text-night/70 transition-colors hover:border-institutional/30 hover:text-institutional dark:border-white/10 dark:bg-white/[0.02] dark:text-white/70 dark:hover:text-gold"
              >
                {domain}
              </span>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}