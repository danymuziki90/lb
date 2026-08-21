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

const identityDomainsEn = [
  "Public Diplomacy",
  "Strategic Communication",
  "Governance",
  "Gender & Human Rights",
  "Peacebuilding",
  "Women's Leadership",
  "Humanitarian Action",
  "Institutional Strengthening",
];

const servicesEn = servicesFr.map((service) => ({
  icon: service.icon,
  title:
    service.title === "Conseil Stratégique"
      ? "Strategic Advisory"
      : service.title === "Diplomatie Publique"
        ? "Public Diplomacy"
        : service.title === "Communication de Crise"
          ? "Crisis Communication"
          : service.title === "Développement du Leadership"
            ? "Leadership Development"
            : service.title === "Consolidation d'Équipe"
              ? "Team Building"
              : service.title === "Conseil Genre et Gouvernance"
                ? "Gender & Governance Advisory"
                : service.title === "Conseil en Droits Humains"
                  ? "Human Rights Advisory"
                  : service.title === "Gestion de Projets"
                    ? "Project Management"
                    : service.title === "Formation et Facilitation"
                      ? "Training and Facilitation"
                      : service.title,
  description:
    service.description === "Accompagnement des institutions et organisations."
      ? "Support for institutions and organizations."
      : service.description === "Positionnement institutionnel et relations internationales."
        ? "Institutional positioning and international relations."
        : service.description === "Gestion des situations sensibles."
          ? "Managing sensitive situations."
          : service.description === "Coaching et renforcement des compétences."
            ? "Coaching and skills strengthening."
            : service.description === "Développement d'équipes performantes."
              ? "Developing high-performing teams."
              : service.description === "Intégration de l'égalité de genre dans les politiques et programmes."
                ? "Integrating gender equality into policies and programs."
                : service.description === "Approches fondées sur les droits."
                  ? "Rights-based approaches."
                  : service.description === "Conception, pilotage et évaluation."
                    ? "Design, steering and evaluation."
                    : service.description === "Animation de formations et dialogues participatifs."
                      ? "Delivering trainings and participatory dialogues."
                      : service.description,
}));

const expertiseAreasEn: ExpertiseItem[] = expertiseAreasFr.map((area) => ({
  icon: area.icon,
  title:
    area.title === "Diplomatie Publique"
      ? "Public Diplomacy"
      : area.title === "Communication de Crise"
        ? "Crisis Communication"
        : area.title === "Égalité de Genre"
          ? "Gender Equality"
          : area.title === "Gouvernance et Paix"
            ? "Governance & Peace"
            : area.title === "Localisation de l'Aide"
              ? "Aid Localization"
              : area.title === "Leadership et Développement Organisationnel"
                ? "Leadership & Organisational Development"
                : area.title === "Droits Humains"
                  ? "Human Rights"
                  : area.title === "Gestion de Programmes Multi-Pays"
                    ? "Multi-Country Program Management"
                    : area.title,
  description:
    area.description === "Développement de stratégies de communication et de représentation institutionnelle."
      ? "Developing communication strategies and institutional representation."
      : area.description === "Gestion des communications dans des contextes sensibles et complexes."
        ? "Managing communications in sensitive and complex contexts."
        : area.description === "Promotion du leadership féminin et des approches transformatrices."
          ? "Promoting women's leadership and transformative approaches."
          : area.description === "Dialogue entre institutions, communautés et acteurs de la société civile."
            ? "Dialogue between institutions, communities and civil society actors."
            : area.description === "Renforcement des capacités des organisations locales."
              ? "Strengthening local organization capacities."
              : area.description === "Accompagnement des équipes et des institutions."
                ? "Supporting teams and institutions."
                : area.description === "Approches basées sur les droits et la participation citoyenne."
                  ? "Rights-based approaches and citizen participation."
                  : area.description === "Coordination de projets régionaux et consortiums internationaux."
                    ? "Coordinating regional projects and international consortia."
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
      title: "Leadership Stratégique pour les institutions et les communautés",
      sectionSubtitle:
        "Un accompagnement pragmatique et engagé pour les enjeux de gouvernance, de paix et de Développement institutionnel.",
      paragraphs: [
        "Conseillère Stratégique et diplomatique disposant de plus d'une décennie d'expérience en Afrique centrale et au Sahel, à l'intersection de la diplomatie publique, de la communication de crise, de l'égalité de genre, de la gouvernance et de la localisation de l'aide.",
        "Actuellement Conseillère Diplomatique auprès du Ministère de la Communication et des Médias de la République Démocratique du Congo, où elle accompagne les autorités dans la gestion des enjeux liés à la paix, aux réformes institutionnelles, à la gouvernance et à l'image internationale du pays.",
        "Son parcours combine expertise institutionnelle, leadership humanitaire, plaidoyer pour les droits des femmes et accompagnement des organisations locales.",
      ],
      highlight:
        "Je conçois des stratégies institutionnelles claires, des dispositifs opérationnels durables et des relations publiques diplomatiques crédibles pour des projets à fort impact.",
      valuesTitle: "Valeurs clés",
      values: [
        "Clarté Stratégique",
        "Impact mesurable",
        "Responsabilité partenariale",
      ],
      stats: [
        { value: "10+", label: "ans d'expérience" },
        { value: "07", label: "pays d'intervention" },
        { value: "30+", label: "projets structurants" },
        { value: "20+", label: "partenaires & institutions" },
      ],
      expertiseTitle: "Expertises clés",
      expertiseItems: [
        "Diplomatie publique",
        "Communication de crise",
        "Gouvernance inclusive",
        "Leadership et partenariats",
      ],
      timelineTitle: "Points forts du parcours",
      timelineIntro:
        "Sélection de moments qui illustrent une trajectoire d'accompagnement institutionnel et diplomatique.",
      domainTitle: "Domaines d'identité",
      domains: [
        "Diplomatie publique",
        "Communication Stratégique",
        "Gouvernance",
        "Genre et droits humains",
        "Consolidation de la paix",
        "Leadership féminin",
        "Action humanitaire",
        "Renforcement institutionnel",
      ],
    },
    services: {
      label: "Services",
      title: "Services de conseil",
      subtitle:
        "Des solutions sur mesure pour les institutions, organisations et partenaires internationaux.",
      items: servicesFr,
    },
    expertise: {
      label: "Expertise",
      title: "Domaines d'expertise",
      subtitle: "Une expertise pluridisciplinaire au service des institutions, des organisations internationales et des communautés.",
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
        "Disponible pour des missions de conseil Stratégique, formations et accompagnement institutionnel en Afrique centrale et au Sahel.",
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
      title: "Who am I?",
      sectionSubtitle: "Pragmatic and committed support for governance, peace and institutional development challenges.",
      paragraphs: [
        "Strategic and diplomatic advisor with over a decade of experience across Central Africa and the Sahel, working at the intersection of public diplomacy, crisis communication, gender equality, governance and humanitarian aid localization.",
        "Currently serving as Diplomatic Advisor to the Ministry of Communication and Media of the Democratic Republic of Congo, supporting authorities on peace strategies, institutional reforms, governance and international reputation.",
        "Her background combines institutional expertise, humanitarian leadership, women's rights advocacy and local partner support.",
      ],
      highlight: "I deliver clear institutional strategy, durable operating systems and credible diplomatic engagement for high-impact programmes.",
      valuesTitle: "Core values",
      values: [
        "Strategic clarity",
        "Measurable impact",
        "Partner accountability",
      ],
      stats: [
        { value: "10+", label: "years of experience" },
        { value: "07", label: "countries engaged" },
        { value: "30+", label: "structuring projects" },
        { value: "20+", label: "partners & institutions" },
      ],
      expertiseTitle: "Core expertise",
      expertiseItems: [
        "Public diplomacy",
        "Crisis communication",
        "Inclusive governance",
        "Leadership & partnerships",
      ],
      timelineTitle: "Career highlights",
      timelineIntro: "Selected moments that reflect a career of institutional and diplomatic support.",
      domainTitle: "Identity Domains",
      domains: identityDomainsEn,
    },
    services: {
      label: "Services",
      title: "Advisory Services",
      subtitle:
        "Tailored solutions for institutions, organizations and international partners.",
      items: servicesEn,
    },
    expertise: {
      label: "Expertise",
      title: "Areas of expertise",
      subtitle:
        "Multidisciplinary expertise for institutions, international organizations and communities.",
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
    // update document lang attribute for accessibility/SEO
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
