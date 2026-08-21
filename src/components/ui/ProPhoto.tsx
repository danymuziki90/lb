"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspect?: "portrait" | "landscape" | "square";
  priority?: boolean;
  sizes?: string;
}

const aspectMap = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

export default function ProPhoto({
  src,
  alt,
  caption,
  className = "",
  aspect = "portrait",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ProPhotoProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${className}`}
    >
      <div
        className="absolute -inset-2 rounded-[1.6rem] border border-gold/15 transition-colors duration-500 group-hover:border-gold/35"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border-2 border-gold/60 shadow-xl shadow-night/10 transition-transform duration-500 group-hover:scale-[1.01] dark:shadow-black/30">
        <div className={`relative w-full ${aspectMap[aspect]}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={sizes}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-widest text-night/50 dark:text-white/50">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
