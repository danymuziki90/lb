"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-20 dark:bg-night md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-night to-institutional p-[1px]"
              >
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 transition-colors group-hover:bg-night dark:bg-night dark:group-hover:bg-night/90 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-night">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-night transition-colors group-hover:text-white dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-night/60 transition-colors group-hover:text-white/70 dark:text-white/60">
                    {service.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-12" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
