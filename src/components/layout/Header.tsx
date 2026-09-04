"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { getFlagUrl } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const { lang, setLang, t } = useLanguage();
  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md shadow-night/5 backdrop-blur-md dark:bg-night/95 dark:shadow-black/30"
          : "bg-night/30 backdrop-blur-xs lg:bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 md:px-8 lg:px-12"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a
          href="#accueil"
          className="font-display text-lg font-bold tracking-tight text-gold transition-colors sm:text-xl md:text-2xl"
        >
          {t.siteConfig.name}
          <span className="text-gold">.</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {t.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled
                    ? "text-night/80 hover:bg-light dark:text-white/80 dark:hover:bg-white/10"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action controls: language toggle & mobile menu trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Header language switcher - visible on all screens */}
          <div
            className={`flex items-center rounded-full border p-0.5 transition-colors ${
              isScrolled
                ? "border-night/15 bg-night/5 dark:border-white/15 dark:bg-white/5"
                : "border-white/20 bg-white/10"
            }`}
          >
            <button
              type="button"
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all sm:px-3 sm:py-1.5 sm:text-sm ${
                lang === "fr"
                  ? isScrolled
                    ? "bg-gold text-night shadow-sm"
                    : "bg-gold text-night shadow-sm"
                  : isScrolled
                    ? "text-night/70 hover:text-night dark:text-white/70 dark:hover:text-white"
                    : "text-white/70 hover:text-white"
              }`}
            >
              <img
                src={getFlagUrl("fr")}
                alt="Français"
                className="h-3.5 w-3.5 rounded-xs object-cover sm:h-4 sm:w-4"
              />
              <span>FR</span>
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all sm:px-3 sm:py-1.5 sm:text-sm ${
                lang === "en"
                  ? isScrolled
                    ? "bg-gold text-night shadow-sm"
                    : "bg-gold text-night shadow-sm"
                  : isScrolled
                    ? "text-night/70 hover:text-night dark:text-white/70 dark:hover:text-white"
                    : "text-white/70 hover:text-white"
              }`}
            >
              <img
                src={getFlagUrl("gb")}
                alt="English"
                className="h-3.5 w-3.5 rounded-xs object-cover sm:h-4 sm:w-4"
              />
              <span>EN</span>
            </button>
          </div>

          {/* Desktop CTA */}
          <a
            href={t.siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-gold px-4 py-2 text-xs font-semibold text-night transition-all hover:bg-gold-light sm:flex lg:text-sm"
          >
            {t.header.appointment}
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              isScrolled
                ? "text-night hover:bg-night/5 dark:text-white dark:hover:bg-white/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileOpen ? t.header.menuClose : t.header.menuOpen}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-white/10 bg-night/98 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            <div className="flex flex-col px-4 py-5 sm:px-6">
              <ul className="flex flex-col space-y-1">
                {t.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile drawer actions */}
              <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLang("fr");
                    }}
                    aria-pressed={lang === "fr"}
                    className={`flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      lang === "fr"
                        ? "bg-gold text-night"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    <img
                      src={getFlagUrl("fr")}
                      alt="France"
                      className="h-4 w-4 rounded-xs"
                    />
                    <span>Français (FR)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLang("en");
                    }}
                    aria-pressed={lang === "en"}
                    className={`flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      lang === "en"
                        ? "bg-gold text-night"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    <img
                      src={getFlagUrl("gb")}
                      alt="UK"
                      className="h-4 w-4 rounded-xs"
                    />
                    <span>English (EN)</span>
                  </button>
                </div>

                <a
                  href={t.siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-gold px-4 py-3 text-center text-sm font-bold text-night shadow-md transition-all hover:bg-gold-light"
                >
                  {t.header.appointment}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
