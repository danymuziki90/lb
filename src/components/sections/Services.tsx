"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-warm-white py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-10 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: EASE,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-night/6 bg-white p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                {/* Hover gold stripe */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-4 sm:mb-5 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-cream text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-navy break-words">
                  {service.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs leading-[1.8] text-night/65 sm:text-sm sm:leading-[1.8]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: 0.2, ease: EASE }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-navy/80 hover:shadow-lg sm:w-auto"
          >
            {t.contact.scheduleButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
