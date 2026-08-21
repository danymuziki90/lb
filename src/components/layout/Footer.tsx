import { footerQuote, navLinks, siteConfig } from "@/lib/data";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
        <div className="mb-12 border-l-4 border-gold pl-6 md:pl-8">
          <blockquote className="font-display text-xl italic leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
            &laquo;&nbsp;{footerQuote}&nbsp;&raquo;
          </blockquote>
        </div>

        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold">
              {siteConfig.name}
            </h3>
            <p className="mt-2 text-sm text-white/60">{siteConfig.title}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <FaEnvelope className="text-gold" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold" />
                {siteConfig.location}
              </span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <FaLinkedin className="text-gold" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Collaborons
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Disponible pour des missions de conseil stratégique, formations et
              accompagnement institutionnel en Afrique centrale et au Sahel.
            </p>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-night transition-all hover:bg-gold-light"
            >
              Planifier une consultation
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>
            &copy; {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Conseillère Stratégique &middot; Afrique Centrale & Sahel</p>
        </div>
      </div>
    </footer>
  );
}
