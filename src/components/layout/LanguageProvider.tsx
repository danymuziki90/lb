"use client";

import React, { createContext, useContext, useState } from "react";
import {
  siteConfig as siteConfigFr,
  navLinks as navLinksFr,
  services as servicesFr,
  expertiseAreas as expertiseAreasFr,
  careerTimeline as careerTimelineFr,
  impactStats as impactStatsFr,
  interventionRegions as interventionRegionsFr,
  type ExpertiseItem,
  type CareerItem,
  type InterventionRegion,
} from "@/lib/data";

type Lang = "fr" | "en";

const navLinksEn = [
  { href: "#accueil", label: "Home" },
  { href: "#apropos", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#parcours", label: "Career" },
  { href: "#realisations", label: "Impact" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const siteConfigEn = {
  ...siteConfigFr,
  title: "Strategic and Diplomatic Advisor",
  location: "Kinshasa, DRC",
};

const servicesEn = servicesFr.map((service) => ({
  icon: service.icon,
  title:
    service.title === "Conseil Stratégique & Diplomatique"
      ? "Strategic & Diplomatic Advisory"
      : service.title === "Communication de Crise"
        ? "Crisis Communication"
        : service.title === "Genre, Paix & Gouvernance"
          ? "Gender, Peace & Governance"
          : service.title === "Localisation & Renforcement des capacités"
            ? "Localization & Capacity Strengthening"
            : service.title === "Formation & Facilitation"
              ? "Training & Facilitation"
              : service.title,
  description:
    service.description === "Accompagnement personnalisé des institutions, gouvernements et organisations dans la conception et le pilotage de leurs stratégies institutionnelles et diplomatiques."
      ? "Tailored support for institutions, governments and organizations in designing and steering their institutional and diplomatic strategies."
      : service.description === "Gestion des communications en contextes sensibles, élaboration de narratifs stratégiques et accompagnement des équipes dans la traversée de crises complexes."
        ? "Managing communications in sensitive contexts, building strategic narratives and supporting teams through complex crises."
        : service.description === "Intégration de l'approche genre dans les politiques publiques, accompagnement des processus de paix inclusifs et renforcement de la participation des femmes dans les institutions."
          ? "Integrating gender approaches into public policies, supporting inclusive peace processes and strengthening women's participation in institutions."
          : service.description === "Appui à la localisation de l'aide humanitaire, renforcement des capacités des organisations locales et co-conception de programmes ancrés dans les communautés."
            ? "Supporting humanitarian aid localization, building local organization capacities and co-designing community-grounded programs."
            : service.description === "Conception et animation de formations sur mesure, ateliers participatifs et dialogues multi-acteurs pour les équipes institutionnelles, humanitaires et communautaires."
              ? "Designing and facilitating tailored trainings, participatory workshops and multi-stakeholder dialogues for institutional, humanitarian and community teams."
              : service.description,
}));

const expertiseAreasEn: ExpertiseItem[] = expertiseAreasFr.map((area) => ({
  icon: area.icon,
  title:
    area.title === "Diplomatie publique & gestion de crise"
      ? "Public Diplomacy & Crisis Management"
      : area.title === "Femmes, Paix & Sécurité"
        ? "Women, Peace & Security"
        : area.title === "Localisation de l'aide & engagement communautaire"
          ? "Aid Localization & Community Engagement"
          : area.title,
  description:
    area.description.startsWith("Conseillère diplomatique")
      ? "As Diplomatic Advisor to the DRC Ministry of Communication, I support institutions in designing conflict-sensitive communication strategies, steering public diplomacy and managing complex crises. My approach combines institutional rigor with contextual intelligence."
      : area.description.startsWith("Juriste féministe")
        ? "As a feminist lawyer and human rights expert, I place the inclusion of women at the heart of peace, security and governance processes. Through advocacy, training and institutional support, I work to bring underrepresented voices to decision-making tables."
        : area.description.startsWith("Coordinatrice régionale")
          ? "An experienced regional coordinator across Central Africa and the Sahel, I champion humanitarian aid grounded in local realities. I build partner organization capacities, facilitate community engagement and accompany the transition toward sustainable local ownership."
          : area.description,
}));

const careerTimelineEn: CareerItem[] = [
  {
    title: "Diplomatic Advisor",
    organization: "Ministry of Communication and Media – DRC",
    period: "2025 – Present",
    type: "responsibilities",
    items: [
      "Public diplomacy",
      "Political communication",
      "Crisis management",
      "Institutional relations",
      "International reputation of the DRC",
    ],
  },
  {
    title: "Regional Programs Coordinator",
    organization: "Diakonie Katastrophenhilfe",
    location: "DRC & Somalia",
    period: "2022 – 2025",
    type: "achievements",
    items: [
      "Regional coordination",
      "Consortium management",
      "Local partner capacity building",
      "Donor compliance",
      "Humanitarian leadership",
    ],
  },
  {
    title: "Crisis Communication Consultant",
    organization: "Ministry of Communication",
    period: "2022 – 2025",
    type: "achievements",
    items: [
      "Conflict-sensitive communication",
      "Civic mobilisation",
      "Crisis narrative management",
    ],
  },
  {
    title: "Gender and Security Coordinator",
    organization: "Danish Refugee Council",
    location: "Mali – Niger – Burkina Faso",
    period: "2019 – 2021",
    type: "achievements",
    items: [
      "Women's leadership",
      "Inclusive security governance",
      "Regional advocacy",
    ],
  },
  {
    title: "International Consultant and Trainer",
    organization: "International Alert",
    period: "2016 – 2018",
    type: "achievements",
    items: [
      "Gender equality",
      "Community mobilisation",
      "Leadership development",
    ],
  },
  {
    title: "Electoral Observer",
    organization: "African Union",
    location: "Djibouti",
    period: "2016",
    type: "achievements",
    items: [
      "International electoral observation",
      "Institutional reporting",
      "Stakeholder dialogue",
    ],
  },
];

const impactStatsEn = impactStatsFr.map((stat) => ({
  ...stat,
  label:
    stat.label === "années d'expérience"
      ? "years of experience"
      : stat.label === "pays d'intervention"
        ? "countries reached"
        : stat.label === "formations réalisées"
          ? "trainings delivered"
          : stat.label === "femmes leaders accompagnées"
            ? "women leaders supported"
            : stat.label === "partenaires internationaux"
              ? "international partners"
              : stat.label === "bénéficiaires touchés"
                ? "people reached"
                : stat.label,
}));

const interventionMapRegionsEn: Record<InterventionRegion, string> = {
  centrale: "Central Africa",
  sahel: "Sahel",
  corne: "Horn of Africa",
};

const defaultTranslations = {
  fr: {
    navLinks: navLinksFr,
    siteConfig: siteConfigFr,
    header: {
      appointment: "Prendre rendez-vous",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
    },
    hero: {
      label: "Disponible pour missions de conseil et formations",
      role: "Conseillère Stratégique et Diplomatique",
      specialty1: "Juriste Féministe en Droits Humains",
      specialty2: "Experte en Genre, Gouvernance et Localisation de l'Aide Humanitaire",
      tagline: "Une voix pour la paix, l'engagement et le changement.",
      intro: "Accompagner les institutions et les communautés vers une gouvernance inclusive et une diplomatie d'impact.",
      description: "Plus de 10 ans d'expérience dans l'accompagnement des gouvernements, organisations internationales et acteurs locaux en diplomatie publique, communication de crise, gouvernance inclusive, leadership féminin et consolidation de la paix.",
      regions: "Afrique centrale · Sahel · Afrique de l'Est",
      downloadCv: "Télécharger le CV",
      contact: "Me contacter",
      discover: "Découvrir mon parcours",
      portraitAlt: "Portrait de Linda J. Bauma - Conseillère Stratégique et Diplomatique",
    },
    about: {
      label: "À propos",
      title: "Une voix pour les institutions et les communautés",
      sectionSubtitle:
        "Diplomate, juriste féministe et humanitaire — au service de la paix, de l'inclusion et du changement durable.",
      paragraphs: [
        "Conseillère Stratégique et diplomatique disposant de plus d'une décennie d'expérience en Afrique centrale et au Sahel, à l'intersection de la diplomatie publique, de la communication de crise, de l'égalité de genre, de la gouvernance et de la localisation de l'aide.",
        "Actuellement Conseillère Diplomatique auprès du Ministère de la Communication et des Médias de la République Démocratique du Congo, où elle accompagne les autorités dans la gestion des enjeux liés à la paix, aux réformes institutionnelles, à la gouvernance et à l'image internationale du pays.",
        "Son parcours combine expertise institutionnelle, leadership humanitaire, plaidoyer pour les droits des femmes et accompagnement des organisations locales.",
      ],
      highlight:
        "Je conçois des stratégies institutionnelles claires, des dispositifs opérationnels durables et des relations publiques diplomatiques crédibles pour des projets à fort impact.",
      valuesTitle: "Mes engagements",
      values: [
        "Engagement — Je m'investis pleinement dans chaque mission, avec une présence humaine authentique.",
        "Inclusion — Je porte la conviction que les voix marginalisées doivent être au cœur des solutions.",
        "Impact — Chaque intervention vise des résultats concrets, mesurables et durables.",
      ],
      stats: [
        { value: "10+", label: "ans d'expérience" },
        { value: "07", label: "pays d'intervention" },
        { value: "30+", label: "projets structurants" },
        { value: "20+", label: "partenaires & institutions" },
      ],
      expertiseTitle: "Mes 3 domaines d'expertise",
      expertiseItems: [
        "Diplomatie publique & gestion de crise",
        "Femmes, Paix & Sécurité",
        "Localisation de l'aide & engagement communautaire",
      ],
      timelineTitle: "Points forts du parcours",
      timelineIntro:
        "Sélection de moments qui illustrent une trajectoire d'accompagnement institutionnel et diplomatique.",
      domainTitle: "Zones d'action",
      domains: [
        "Diplomatie publique",
        "Femmes, Paix & Sécurité",
        "Localisation de l'aide",
        "Communication de crise",
        "Gouvernance inclusive",
      ],
    },
    services: {
      label: "Services",
      title: "Comment puis-je vous accompagner ?",
      subtitle:
        "Des solutions sur mesure alignées sur mes 3 axes d'expertise, pour les institutions, organisations et partenaires internationaux.",
      items: servicesFr,
    },
    expertise: {
      label: "Expertise",
      title: "3 domaines, une vision",
      subtitle: "Moins, mais mieux. Trois axes ciblés et crédibles au service des institutions, des communautés et de la paix.",
      items: expertiseAreasFr,
    },
    career: {
      label: "Parcours",
      title: "Parcours professionnel",
      subtitle: "Plus d'une décennie d'engagement au service des institutions et des communautés.",
      types: {
        responsibilities: "Principales responsabilités",
        achievements: "Réalisations",
      },
      items: careerTimelineFr,
    },
    contact: {
      label: "Contact",
      title: "Travaillons ensemble",
      subtitle: "Pour toute demande de conseil, formation ou collaboration institutionnelle.",
      infoHeading: "Informations de contact",
      infoDescription:
        "Disponible pour des consultations stratégiques, missions de conseil et formations en Afrique centrale et au Sahel.",
      emailLabel: "Email",
      locationLabel: "Localisation",
      linkedinLabel: "LinkedIn",
      profileLabel: "Profil professionnel",
      calendlyLabel: "Planifier une consultation",
      scheduleButton: "Planifier une consultation",
      form: {
        name: "Nom *",
        organization: "Organisation",
        email: "Email *",
        subject: "Objet *",
        message: "Message *",
        placeholders: {
          name: "Votre nom complet",
          organization: "Votre organisation",
          email: "votre@email.com",
          subject: "Objet de votre message",
          message: "Décrivez votre projet ou votre demande...",
        },
        sendButton: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
        error: "Une erreur est survenue. Veuillez réessayer ou m'écrire directement à ",
      },
    },
    impact: {
      label: "Impact",
      title: "Impact et réalisations",
      subtitle: "Des résultats concrets au service du changement institutionnel et social.",
      stats: impactStatsFr,
    },
    interventionMap: {
      label: "Zones d'intervention",
      title: "Afrique Centrale & Sahel",
      subtitle: "Sept pays d'intervention au cœur des enjeux de gouvernance, paix et action humanitaire.",
      mapAriaLabel: "Carte interactive de l'Afrique - zones d'intervention",
      flagAlt: "Drapeau",
      regions: {
        centrale: interventionRegionsFr.centrale.label,
        sahel: interventionRegionsFr.sahel.label,
        corne: interventionRegionsFr.corne.label,
      },
    },
    photoMoments: {
      label: "En action",
      title: "Moments professionnels",
      subtitle:
        "Sur le terrain, en formation et au cœur des engagements institutionnels en Afrique centrale.",
      formationCaption: "Transmission du savoir et renforcement des capacités",
      ceremonyCaption: "Présence institutionnelle",
      mugangaCaption: "Leadership institutionnel et service aux communautés",
      mugangaHeading:
        "Présence institutionnelle et leadership au service des communautés",
    },
    footer: {
      quote:
        "Transformer les institutions grâce au dialogue, à l'inclusion et au leadership porté par les communautés.",
      navTitle: "Navigation",
      collaborateTitle: "Collaborons",
      collaborateDescription:
        "Disponible pour des missions de conseil stratégique, formations et accompagnement institutionnel en Afrique centrale et au Sahel.",
      scheduleButton: "Planifier une consultation",
      copyright: "Tous droits réservés.",
      tagline: "Conseillère Stratégique · Afrique Centrale & Sahel",
    },
  },
  en: {
    navLinks: navLinksEn,
    siteConfig: siteConfigEn,
    header: {
      appointment: "Book a meeting",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      label: "Available for advisory engagements and training",
      role: "Strategic & Diplomatic Advisor",
      specialty1: "Human Rights Feminist Lawyer",
      specialty2: "Gender, Governance and Humanitarian Aid Localization Expert",
      tagline: "A voice for peace, engagement and change.",
      intro: "Supporting institutions and communities toward inclusive governance and diplomacy that delivers impact.",
      description: "Over 10 years of experience supporting governments, international organizations and local actors in public diplomacy, crisis communication, inclusive governance, women's leadership and peacebuilding.",
      regions: "Central Africa · Sahel · East Africa",
      downloadCv: "Download CV",
      contact: "Contact Me",
      discover: "Discover my career",
      portraitAlt: "Portrait of Linda J. Bauma - Strategic and Diplomatic Advisor",
    },
    about: {
      label: "About",
      title: "A voice for institutions and communities",
      sectionSubtitle: "Diplomat, feminist lawyer and humanitarian — in service of peace, inclusion and lasting change.",
      paragraphs: [
        "Strategic and diplomatic advisor with over a decade of experience across Central Africa and the Sahel, working at the intersection of public diplomacy, crisis communication, gender equality, governance and humanitarian aid localization.",
        "Currently serving as Diplomatic Advisor to the Ministry of Communication and Media of the Democratic Republic of Congo, supporting authorities on peace strategies, institutional reforms, governance and international reputation.",
        "Her background combines institutional expertise, humanitarian leadership, women's rights advocacy and local partner support.",
      ],
      highlight: "I deliver clear institutional strategy, durable operating systems and credible diplomatic engagement for high-impact programmes.",
      valuesTitle: "My commitments",
      values: [
        "Engagement — I invest fully in every mission, with authentic human presence.",
        "Inclusion — I hold the conviction that marginalized voices must be at the heart of solutions.",
        "Impact — Every intervention aims for concrete, measurable and lasting results.",
      ],
      stats: [
        { value: "10+", label: "years of experience" },
        { value: "07", label: "countries engaged" },
        { value: "30+", label: "structuring projects" },
        { value: "20+", label: "partners & institutions" },
      ],
      expertiseTitle: "My 3 areas of expertise",
      expertiseItems: [
        "Public Diplomacy & Crisis Management",
        "Women, Peace & Security",
        "Aid Localization & Community Engagement",
      ],
      timelineTitle: "Career highlights",
      timelineIntro: "Selected moments that reflect a career of institutional and diplomatic support.",
      domainTitle: "Areas of action",
      domains: [
        "Public Diplomacy",
        "Women, Peace & Security",
        "Aid Localization",
        "Crisis Communication",
        "Inclusive Governance",
      ],
    },
    services: {
      label: "Services",
      title: "How can I support you?",
      subtitle:
        "Tailored solutions aligned with my 3 areas of expertise, for institutions, organizations and international partners.",
      items: servicesEn,
    },
    expertise: {
      label: "Expertise",
      title: "3 domains, one vision",
      subtitle:
        "Less, but better. Three focused and credible pillars in service of institutions, communities and peace.",
      items: expertiseAreasEn,
    },
    career: {
      label: "Career",
      title: "Professional Journey",
      subtitle: "More than a decade of commitment serving institutions and communities.",
      types: {
        responsibilities: "Key responsibilities",
        achievements: "Achievements",
      },
      items: careerTimelineEn,
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      subtitle: "For advisory, training or institutional collaboration requests.",
      infoHeading: "Contact details",
      infoDescription:
        "Available for strategic consultations, advisory missions and institutional support in Central Africa and the Sahel.",
      emailLabel: "Email",
      locationLabel: "Location",
      linkedinLabel: "LinkedIn",
      profileLabel: "Professional profile",
      calendlyLabel: "Schedule a consultation",
      scheduleButton: "Schedule a consultation",
      form: {
        name: "Name *",
        organization: "Organization",
        email: "Email *",
        subject: "Subject *",
        message: "Message *",
        placeholders: {
          name: "Your full name",
          organization: "Your organization",
          email: "your@email.com",
          subject: "Subject of your message",
          message: "Describe your project or request...",
        },
        sendButton: "Send message",
        sending: "Sending...",
        success: "Message sent successfully. I will reply as soon as possible.",
        error: "An error occurred. Please try again or write directly to",
      },
    },
    impact: {
      label: "Impact",
      title: "Impact and achievements",
      subtitle: "Concrete results driving institutional and social change.",
      stats: impactStatsEn,
    },
    interventionMap: {
      label: "Intervention areas",
      title: "Central Africa & Sahel",
      subtitle:
        "Seven intervention countries at the heart of governance, peace and humanitarian action.",
      mapAriaLabel: "Interactive map of Africa - intervention zones",
      flagAlt: "Flag of",
      regions: interventionMapRegionsEn,
    },
    photoMoments: {
      label: "In action",
      title: "Professional moments",
      subtitle:
        "In the field, in training and at the heart of institutional engagement in Central Africa.",
      formationCaption: "Knowledge sharing and capacity strengthening",
      ceremonyCaption: "Institutional engagement",
      mugangaCaption: "Institutional presence and leadership serving communities",
      mugangaHeading:
        "Institutional presence and leadership serving communities",
    },
    footer: {
      quote:
        "Transforming institutions through dialogue, inclusion and community-led leadership.",
      navTitle: "Navigation",
      collaborateTitle: "Let's collaborate",
      collaborateDescription:
        "Available for strategic advisory assignments, training and institutional support in Central Africa and the Sahel.",
      scheduleButton: "Schedule a consultation",
      copyright: "All rights reserved.",
      tagline: "Strategic Advisor · Central Africa & Sahel",
    },
  },
};

type Translations = typeof defaultTranslations["fr"];

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}>({ lang: "fr", setLang: () => { }, t: defaultTranslations.fr });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    try {
      const stored = localStorage.getItem("lang");
      return stored === "fr" || stored === "en" ? stored : "fr";
    } catch (_) {
      return "fr";
    }
  });

  const setLang = (l: Lang) => {
    try {
      localStorage.setItem("lang", l);
    } catch (_) { }
    setLangState(l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = defaultTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
