"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="overflow-hidden bg-night text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8 lg:px-12">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65 }}
          className="mb-10 sm:mb-12 border-l-4 border-gold pl-4 sm:pl-6 md:pl-8"
        >
          <blockquote className="font-display text-lg italic leading-relaxed text-white/90 sm:text-xl md:text-2xl lg:text-3xl break-words">
            &laquo;&nbsp;{t.footer.quote}&nbsp;&raquo;
          </blockquote>
        </motion.div>

        {/* 3 Columns Grid: 1 col on mobile -> 2 cols on tablet -> 3 cols on desktop */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, delay: 0.1 }}
          className="grid gap-8 border-t border-white/10 pt-10 sm:gap-12 sm:pt-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Identity & Contacts */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gold">
              {t.siteConfig.name}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/60">{t.siteConfig.title}</p>
            
            <div className="mt-5 sm:mt-6 flex flex-col gap-3 text-xs sm:text-sm text-white/75">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <FaEnvelope className="text-gold shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <FaPhone className="text-gold shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <span className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-gold shrink-0" />
                <span>{t.siteConfig.location}</span>
              </span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <FaLinkedin className="text-gold shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
              {t.footer.navTitle}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {t.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration CTA */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
              {t.footer.collaborateTitle}
            </h4>
            <p className="mb-4 text-xs sm:text-sm leading-relaxed text-white/65">
              {t.footer.collaborateDescription}
            </p>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gold px-5 py-2.5 text-xs sm:text-sm font-bold text-night transition-all hover:bg-gold-light"
            >
              {t.footer.scheduleButton}
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:pt-8 text-xs text-white/45 sm:flex-row text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.name}. {t.footer.copyright}
          </p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
