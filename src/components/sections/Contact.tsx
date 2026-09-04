"use client";

import { useState, FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
        {
          from_name: formData.get("name"),
          from_organization: formData.get("organization"),
          from_email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "key_placeholder"
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-white py-14 sm:py-20 dark:bg-night md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.65 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-gradient-to-br from-night to-institutional p-5 sm:p-8 text-white md:p-10 shadow-xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold break-words">
                {t.contact.infoHeading}
              </h3>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
                {t.contact.infoDescription}
              </p>

              <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 sm:gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <FaEnvelope className="text-sm sm:text-base" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-white/50">{t.contact.emailLabel}</p>
                      <p className="text-xs sm:text-sm font-medium break-all">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 sm:gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <FaPhone className="text-sm sm:text-base" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-white/50">Téléphone</p>
                      <p className="text-xs sm:text-sm font-medium">{siteConfig.phone}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <FaMapMarkerAlt className="text-sm sm:text-base" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs text-white/50">{t.contact.locationLabel}</p>
                    <p className="text-xs sm:text-sm font-medium">{t.siteConfig.location}</p>
                  </div>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <FaLinkedin className="text-sm sm:text-base" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-white/50">{t.contact.linkedinLabel}</p>
                      <p className="text-xs sm:text-sm font-medium">{t.contact.profileLabel}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <FaCalendarAlt className="text-sm sm:text-base" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-white/50">{t.contact.calendlyLabel}</p>
                      <p className="text-xs sm:text-sm font-medium">
                        {t.contact.scheduleButton}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-bold text-night shadow-md transition-all hover:bg-gold-light"
              >
                <FaCalendarAlt />
                {t.contact.scheduleButton}
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.form
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-night/5 bg-light p-4 sm:p-6 md:p-8 dark:border-white/10 dark:bg-night/80 shadow-xs">
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs sm:text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-night/10 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-hidden focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="mb-1.5 block text-xs sm:text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.organization}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full rounded-lg border border-night/10 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-hidden focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.organization}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs sm:text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-night/10 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-hidden focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs sm:text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-night/10 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-hidden focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.subject}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs sm:text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-night/10 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-hidden focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.message}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-institutional px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-institutional-light disabled:opacity-60 sm:w-auto"
              >
                <FaPaperPlane />
                {status === "loading" ? t.contact.form.sending : t.contact.form.sendButton}
              </button>

              {status === "success" && (
                <p className="mt-4 text-xs sm:text-sm text-green-600 dark:text-green-400" role="status">
                  {t.contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-xs sm:text-sm text-red-600 dark:text-red-400" role="alert">
                  {t.contact.form.error} {siteConfig.email}.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
