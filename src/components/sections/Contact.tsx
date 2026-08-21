"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const { t } = useLanguage();
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
    <section id="contact" className="bg-white py-20 dark:bg-night md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-gradient-to-br from-night to-institutional p-8 text-white md:p-10">
              <h3 className="font-display text-2xl font-bold">
                {t.contact.infoHeading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {t.contact.infoDescription}
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <FaEnvelope />
                    </span>
                    <div>
                      <p className="text-xs text-white/50">{t.contact.emailLabel}</p>
                      <p className="text-sm font-medium">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <p className="text-xs text-white/50">{t.contact.locationLabel}</p>
                    <p className="text-sm font-medium">{t.siteConfig.location}</p>
                  </div>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <FaLinkedin />
                    </span>
                    <div>
                      <p className="text-xs text-white/50">{t.contact.linkedinLabel}</p>
                      <p className="text-sm font-medium">{t.contact.profileLabel}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <FaCalendarAlt />
                    </span>
                    <div>
                      <p className="text-xs text-white/50">{t.contact.calendlyLabel}</p>
                      <p className="text-sm font-medium">
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
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-night transition-all hover:bg-gold-light"
              >
                <FaCalendarAlt />
                {t.contact.scheduleButton}
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-night/5 bg-light p-6 dark:border-white/10 dark:bg-night/80 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-night/10 bg-white px-4 py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-none focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="mb-1.5 block text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.organization}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full rounded-lg border border-night/10 bg-white px-4 py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-none focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.organization}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-night/10 bg-white px-4 py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-none focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-night/10 bg-white px-4 py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-none focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.subject}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-night dark:text-white"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-night/10 bg-white px-4 py-3 text-sm text-night transition-colors focus:border-institutional focus:outline-none focus:ring-2 focus:ring-institutional/20 dark:border-white/10 dark:bg-night dark:text-white"
                    placeholder={t.contact.form.placeholders.message}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-institutional px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-institutional-light disabled:opacity-60 sm:w-auto"
              >
                <FaPaperPlane />
                {status === "loading" ? t.contact.form.sending : t.contact.form.sendButton}
              </button>

              {status === "success" && (
                <p className="mt-4 text-sm text-green-600 dark:text-green-400" role="status">
                  {t.contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
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
