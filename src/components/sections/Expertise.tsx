"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            label={t.expertise.label}
            title={t.expertise.title}
            subtitle={t.expertise.subtitle}
          />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.expertise.items.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: EASE }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                {/* Top gold accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-gold to-gold-light" />

                <div className="flex flex-1 flex-col p-8 md:p-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy/8 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Number */}
                  <p className="mb-3 font-display text-5xl font-bold text-cream-dark">
                    0{index + 1}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold leading-snug text-navy md:text-2xl">
                    {area.title}
                  </h3>

                  {/* Divider */}
                  <div className="my-5 h-px w-10 bg-gold" />

                  {/* Description */}
                  <p className="flex-1 text-sm leading-[1.85] text-night/65 md:text-[0.95rem]">
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
