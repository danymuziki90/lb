"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-warm-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            label={t.services.label}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-night/6 bg-white p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                {/* Hover gold stripe */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-night/60">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy/80 hover:shadow-lg"
          >
            {t.contact.scheduleButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
