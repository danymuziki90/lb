"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { sitePhotos, visitePhotos } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PhotoMoments() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const allPhotos = [
    {
      src: sitePhotos.formation.src,
      alt: sitePhotos.formation.alt,
      caption: t.photoMoments.formationCaption,
      category: sitePhotos.formation.caption,
    },
    {
      src: sitePhotos.ceremonyMuganga.src,
      alt: sitePhotos.ceremonyMuganga.alt,
      caption: t.photoMoments.mugangaHeading,
      category: t.photoMoments.mugangaCaption,
    },
    {
      src: sitePhotos.ceremonyOfficial.src,
      alt: sitePhotos.ceremonyOfficial.alt,
      caption: t.photoMoments.ceremonyCaption,
      category: "Engagement officiel",
    },
    ...visitePhotos.map((photo) => ({
      src: photo.src,
      alt: photo.alt,
      caption: photo.caption,
      category: "Mission Ouganda-RDC",
    })),
  ];

  return (
    <section className="bg-cream py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.photoMoments.label}
          title={t.photoMoments.title}
          subtitle={t.photoMoments.subtitle}
        />

        {/* Responsive Masonry Gallery */}
        <div className="mt-10 columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-6 sm:space-y-6 lg:columns-3 sm:mt-16">
          {allPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.65,
                delay: shouldReduceMotion ? 0 : (i % 3) * 0.1,
                ease: EASE,
              }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-night shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover transition-transform duration-700 sm:group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient: visible on mobile for readability, dynamic hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent sm:from-black/90 sm:via-black/20 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100" />
                
                {/* Caption and category: readable on mobile, smooth hover on desktop */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 sm:translate-y-4 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <span className="mb-2 inline-block rounded-full border border-gold/40 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gold backdrop-blur-xs sm:px-3 sm:py-1 sm:text-xs">
                    {photo.category}
                  </span>
                  <p className="font-display text-sm sm:text-base md:text-lg font-bold leading-snug text-white drop-shadow-md break-words">
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
