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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const { lang, setLang, t } = useLanguage();
  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 shadow-lg shadow-night/5 backdrop-blur-md dark:bg-night/95 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12"
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className="font-display text-xl font-bold text-gold transition-colors md:text-2xl"
        >
          {t.siteConfig.name}
          <span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled
                    ? "text-night/80 hover:bg-light dark:text-white/80 dark:hover:bg-white/10"
                    : "text-white/90 hover:bg-white/10 dark:text-white/90 dark:hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-0.5 md:flex">
            <button
              type="button"
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${lang === "fr" ? "bg-white text-night" : "text-white/70 hover:bg-white/10"}`}
            >
              <img src={getFlagUrl('fr')} alt="France" className="h-4 w-4 rounded-sm" /> FR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${lang === "en" ? "bg-white text-night" : "text-white/70 hover:bg-white/10"}`}
            >
              <img src={getFlagUrl('gb')} alt="UK" className="h-4 w-4 rounded-sm" /> EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`rounded-lg p-2.5 lg:hidden ${
              isScrolled
                ? "text-night dark:text-white"
                : "text-white"
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

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-night lg:hidden"
          >
            <ul className="flex flex-col px-4 py-4">
              {t.navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-lg px-4 py-3 text-white/90 transition-colors hover:bg-white/10 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4 border-t border-white/10 pt-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLang("fr");
                      handleNavClick();
                    }}
                    aria-pressed={lang === "fr"}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${lang === "fr" ? "bg-gold text-night" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                  >
                    <img src={getFlagUrl('fr')} alt="France" className="h-4 w-4 rounded-sm" /> FR
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLang("en");
                      handleNavClick();
                    }}
                    aria-pressed={lang === "en"}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${lang === "en" ? "bg-gold text-night" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                  >
                    <img src={getFlagUrl('gb')} alt="UK" className="h-4 w-4 rounded-sm" /> EN
                  </button>
                </div>
              </li>
              <li className="mt-2">
                <a
                  href={t.siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-gold px-4 py-3 text-center font-semibold text-night"
                >
                  {t.header.appointment}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}