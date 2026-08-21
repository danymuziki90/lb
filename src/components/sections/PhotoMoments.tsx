"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { sitePhotos, visitePhotos } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PhotoMoments() {
  const { t } = useLanguage();

  // Combine all photos into a single array for a cohesive gallery
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
      category: "Événement Officiel",
    },
    ...visitePhotos.map((photo) => ({
      src: photo.src,
      alt: photo.alt,
      caption: photo.caption,
      category: "Mission Ouganda-RDC",
    })),
  ];

  return (
    <section className="bg-[#f8f9fa] py-20 dark:bg-[#0a0f16] md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            label={t.photoMoments.label}
            title={t.photoMoments.title}
            subtitle={t.photoMoments.subtitle}
          />
        </motion.div>

        {/* Premium Masonry Gallery */}
        <div className="mt-12 md:mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
          {allPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.15, ease: EASE }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-night shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-3 inline-block rounded-full border border-gold/40 bg-black/50 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-md">
                    {photo.category}
                  </span>
                  <p className="font-display text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-md">
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
