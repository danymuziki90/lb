"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { sitePhotos, visitePhotos } from "@/lib/data";


const EASE = [0.22, 1, 0.36, 1] as const;

export default function PhotoMoments() {
  const { t } = useLanguage();
  const { formation, ceremonyOfficial, ceremonyMuganga } = sitePhotos;

  return (
    <section className="bg-white py-20 dark:bg-night md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.photoMoments.label}
          title={t.photoMoments.title}
          subtitle={t.photoMoments.subtitle}
        />

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          {/* Formation — grande tuile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative md:col-span-7"
          >
            <div className="absolute -inset-2 rounded-3xl border border-gold/15 transition-colors group-hover:border-gold/35" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold/50 shadow-xl">
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src={formation.src}
                  alt={formation.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-[#0B1F3A]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <span className="mb-2 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
                    {formation.caption}
                  </span>
                  <p className="max-w-md font-display text-lg font-semibold text-white md:text-xl">
                    {t.photoMoments.formationCaption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cérémonie officielle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="group relative md:col-span-5"
          >
            <div className="absolute -inset-2 rounded-3xl border border-gold/15 transition-colors group-hover:border-gold/35" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold/50 shadow-xl">
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[320px]">
                <Image
                  src={ceremonyOfficial.src}
                  alt={ceremonyOfficial.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {t.photoMoments.ceremonyCaption}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MUGANGA — bande pleine largeur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="group relative md:col-span-12"
          >
            <div className="absolute -inset-2 rounded-3xl border border-gold/15 transition-colors group-hover:border-gold/35" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold/50 shadow-xl">
              <div className="relative aspect-[16/7] sm:aspect-[21/9]">
                <Image
                  src={ceremonyMuganga.src}
                  alt={ceremonyMuganga.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/80 via-[#0B1F3A]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 md:p-10 lg:p-12">
                    <span className="mb-3 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
                      {t.photoMoments.mugangaCaption}
                    </span>
                    <p className="max-w-lg font-display text-xl font-bold text-white md:text-2xl lg:text-3xl">
                      {t.photoMoments.mugangaHeading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        </div>

        {/* Suite de la galerie (sans nouvelle section) */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:gap-6 mt-6 md:mt-8">
          {visitePhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border-2 border-gold/20 shadow-lg sm:mb-5 lg:mb-6"
            >
              <div className="relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-full translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-lg font-bold text-white">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
