"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="bg-white py-20 dark:bg-night md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.expertise.label}
          title={t.expertise.title}
          subtitle={t.expertise.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.expertise.items.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-night/5 bg-light p-6 transition-shadow hover:shadow-xl hover:shadow-institutional/10 dark:border-white/10 dark:bg-night/80 dark:hover:shadow-gold/5"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-institutional/5 transition-transform group-hover:scale-150 dark:bg-gold/5" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-institutional p-3 text-white transition-colors group-hover:bg-gold group-hover:text-night">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-night dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-night/60 dark:text-white/60">
                    {area.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}