import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications et analyses",
  description:
    "Analyses et perspectives de Linda J. Bauma sur la diplomatie publique, la gouvernance inclusive, la paix et l'action humanitaire en Afrique centrale et au Sahel.",
  alternates: {
    canonical: "/publications",
  },
  openGraph: {
    title: "Publications et analyses | Linda J. Bauma",
    description:
      "Perspectives sur la diplomatie publique, la gouvernance inclusive, la paix et l'action humanitaire.",
  },
};

const themes = [
  {
    title: "Diplomatie publique et communication de crise",
    description:
      "Réflexions sur les récits institutionnels, la communication sensible aux conflits et la confiance entre institutions et citoyens.",
  },
  {
    title: "Femmes, paix et sécurité",
    description:
      "Perspectives sur la participation effective des femmes, le plaidoyer et les conditions d'une gouvernance sécuritaire inclusive.",
  },
  {
    title: "Localisation de l'aide humanitaire",
    description:
      "Analyses autour du renforcement des organisations locales, de l'engagement communautaire et d'une action humanitaire durable.",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-warm-white text-night">
      <header className="border-b border-night/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
          <Link href="/" className="font-display text-xl font-bold text-navy">
            Linda J. Bauma<span className="text-gold">.</span>
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-night transition-colors hover:bg-gold-light"
          >
            Me contacter
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          Ressources
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
          Publications et analyses
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-night/70 sm:text-lg">
          Un espace consacré aux perspectives et aux ressources sur les enjeux
          institutionnels, diplomatiques et humanitaires en Afrique centrale et
          au Sahel.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3 sm:gap-6">
          {themes.map((theme) => (
            <article
              key={theme.title}
              className="rounded-2xl border border-night/10 bg-white p-6 shadow-sm sm:p-7"
            >
              <h2 className="font-display text-xl font-bold text-navy">
                {theme.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-night/70">
                {theme.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-navy p-6 text-white sm:p-8">
          <h2 className="font-display text-2xl font-bold">
            Vous souhaitez échanger sur ces sujets ?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            Pour une intervention, une contribution éditoriale ou une mission de
            conseil, contactez-moi afin d&apos;en discuter.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-night transition-colors hover:bg-gold-light"
          >
            Prendre contact
          </Link>
        </div>
      </section>
    </main>
  );
}
