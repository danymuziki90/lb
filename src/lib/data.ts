import {
  IconType,
} from "react-icons";
import {
  FaGlobeAfrica,
  FaBalanceScale,
  FaUsers,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaHeart,
  FaProjectDiagram,
  FaUserTie,
  FaLandmark,
} from "react-icons/fa";
import { MdCrisisAlert } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export const siteConfig = {
  name: "Linda J. Bauma",
  title: "Conseillère Stratégique et Diplomatique",
  email: "lindajoelle1109@gmail.com",
  phone: "+243 816 860 870",
  linkedin: "https://www.linkedin.com/in/linda-j-bauma-60b3ab159/",
  calendly: "https://calendly.com/lindajbauma",
  location: "Kinshasa, RDC",
  cvPath: "/cv/linda-bauma-cv.pdf",
  heroPortrait: "/images/hero photo.jpg",
};

export interface SitePhoto {
  src: string;
  alt: string;
  caption: string;
  aspect?: "portrait" | "landscape" | "square";
}

export const sitePhotos = {
  about: {
    src: "/images/In office of together.jpg",
    alt: "Linda J. Bauma dans son bureau professionnel",
    caption: "Conseil stratégique & diplomatie",
  },
  formation: {
    src: "/images/lb in formation.jpg",
    alt: "Linda J. Bauma animant une formation",
    caption: "Formation & facilitation",
  },
  ceremonyOfficial: {
    src: "/images/lb pendant une ceremonie officiel.jpg",
    alt: "Linda J. Bauma lors d'une cérémonie officielle",
    caption: "Engagement institutionnel",
  },
  ceremonyMuganga: {
    src: "/images/lb lor de la ceremoni MUGANGA.jpg",
    alt: "Linda J. Bauma lors de la cérémonie MUGANGA",
    caption: "Cérémonie MUGANGA",
  },
} satisfies Record<string, SitePhoto>;

export const visitePhotos: SitePhoto[] = [
  {
    src: "/images/visite_Ug_DRC-17.jpg",
    alt: "Visite Ouganda-RDC 17",
    caption: "Mission diplomatique Ouganda-RDC",
  },
  {
    src: "/images/visite_Ug_DRC-18.jpg",
    alt: "Visite Ouganda-RDC 18",
    caption: "Rencontres bilatérales",
  },
  {
    src: "/images/visite_Ug_DRC-19.jpg",
    alt: "Visite Ouganda-RDC 19",
    caption: "Échanges stratégiques",
  },
  {
    src: "/images/visite_Ug_DRC-4.jpg",
    alt: "Visite Ouganda-RDC 4",
    caption: "Dialogue institutionnel",
  },
  {
    src: "/images/visite_Ug_DRC-71 equipe.jpg",
    alt: "Équipe Visite Ouganda-RDC",
    caption: "Photo d'équipe de la délégation",
  },
  {
    src: "/images/visite_Ug_DRC-75.jpg",
    alt: "Visite Ouganda-RDC 75",
    caption: "Discussions de haut niveau",
  },
  {
    src: "/images/visite_Ug_DRC-8.jpg",
    alt: "Visite Ouganda-RDC 8",
    caption: "Engagement régional",
  },
];

export const identityDomains = [
  "Diplomatie publique",
  "Communication stratégique",
  "Gouvernance",
  "Genre et droits humains",
  "Consolidation de la paix",
  "Leadership féminin",
  "Action humanitaire",
  "Renforcement institutionnel",
];

export interface ExpertiseItem {
  icon: IconType;
  title: string;
  description: string;
}

export const expertiseAreas: ExpertiseItem[] = [
  {
    icon: FaGlobeAfrica,
    title: "Diplomatie publique & gestion de crise",
    description:
      "Conseillère diplomatique auprès du Ministère de la Communication de la RDC, j'accompagne les institutions dans la conception de stratégies de communication sensibles aux conflits, le pilotage de la diplomatie publique et la gestion de crises complexes. Mon approche combine rigueur institutionnelle et intelligence du contexte.",
  },
  {
    icon: FaHandshake,
    title: "Femmes, Paix & Sécurité",
    description:
      "Juriste féministe et experte en droits humains, je place l'inclusion des femmes au cœur des processus de paix, de sécurité et de gouvernance. À travers le plaidoyer, la formation et l'accompagnement institutionnel, je contribue à faire entendre des voix trop souvent absentes des tables de décision.",
  },
  {
    icon: FaHeart,
    title: "Localisation de l'aide & engagement communautaire",
    description:
      "Coordinatrice régionale expérimentée en Afrique centrale et au Sahel, je défends une aide humanitaire ancrée dans les réalités locales. Je renforce les capacités des organisations partenaires, facilite l'engagement communautaire et accompagne la transition vers une appropriation locale durable.",
  },
];

export interface CareerItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: "responsibilities" | "achievements";
  items: string[];
}

export const careerTimeline: CareerItem[] = [
  {
    title: "Conseillère Diplomatique",
    organization: "Ministère de la Communication et des Médias – RDC",
    period: "2025 – Aujourd'hui",
    type: "responsibilities",
    items: [
      "Diplomatie publique",
      "Communication politique",
      "Gestion de crise",
      "Relations institutionnelles",
      "Image internationale de la RDC",
    ],
  },
  {
    title: "Coordinatrice Régionale de Programmes",
    organization: "Diakonie Katastrophenhilfe",
    location: "RDC & Somalie",
    period: "2022 – 2025",
    type: "achievements",
    items: [
      "Coordination régionale",
      "Gestion de consortiums",
      "Renforcement des partenaires locaux",
      "Conformité bailleurs",
      "Leadership humanitaire",
    ],
  },
  {
    title: "Consultante en Communication de Crise",
    organization: "Ministère de la Communication",
    period: "2022 – 2025",
    type: "achievements",
    items: [
      "Communication sensible aux conflits",
      "Mobilisation de la société civile",
      "Gestion des narratifs de crise",
    ],
  },
  {
    title: "Coordinatrice Genre et Sécurité",
    organization: "Danish Refugee Council",
    location: "Mali – Niger – Burkina Faso",
    period: "2019 – 2021",
    type: "achievements",
    items: [
      "Leadership féminin",
      "Gouvernance sécuritaire inclusive",
      "Plaidoyer régional",
    ],
  },
  {
    title: "Consultante et Formatrice Internationale",
    organization: "International Alert",
    period: "2016 – 2018",
    type: "achievements",
    items: [
      "Égalité de genre",
      "Mobilisation communautaire",
      "Développement du leadership",
    ],
  },
  {
    title: "Observatrice Électorale",
    organization: "Union Africaine",
    location: "Djibouti",
    period: "2016",
    type: "achievements",
    items: [
      "Observation électorale internationale",
      "Rapportage institutionnel",
      "Dialogue avec les parties prenantes",
    ],
  },
];

export const impactStats = [
  { value: 10, suffix: "+", label: "années d'expérience" },
  { value: 7, suffix: "", label: "pays d'intervention" },
  { value: 100, suffix: "+", label: "formations réalisées" },
  { value: 30, suffix: "+", label: "femmes leaders accompagnées" },
  { value: 20, suffix: "+", label: "partenaires internationaux" },
  { value: 5000, suffix: "+", label: "bénéficiaires touchés" },
];

export interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: FaLandmark,
    title: "Conseil Stratégique & Diplomatique",
    description: "Accompagnement personnalisé des institutions, gouvernements et organisations dans la conception et le pilotage de leurs stratégies institutionnelles et diplomatiques.",
  },
  {
    icon: MdCrisisAlert,
    title: "Communication de Crise",
    description: "Gestion des communications en contextes sensibles, élaboration de narratifs stratégiques et accompagnement des équipes dans la traversée de crises complexes.",
  },
  {
    icon: FaUsers,
    title: "Genre, Paix & Gouvernance",
    description: "Intégration de l'approche genre dans les politiques publiques, accompagnement des processus de paix inclusifs et renforcement de la participation des femmes dans les institutions.",
  },
  {
    icon: FaHeart,
    title: "Localisation & Renforcement des capacités",
    description: "Appui à la localisation de l'aide humanitaire, renforcement des capacités des organisations locales et co-conception de programmes ancrés dans les communautés.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Formation & Facilitation",
    description: "Conception et animation de formations sur mesure, ateliers participatifs et dialogues multi-acteurs pour les équipes institutionnelles, humanitaires et communautaires.",
  },
];

export type InterventionRegion = "centrale" | "sahel" | "corne";

export interface InterventionCountry {
  id: string;
  name: string;
  code: string;
  iso2: string;
  /** ID numérique ISO 3166-1 (world-atlas) */
  numericId: string;
  region: InterventionRegion;
  regionLabel: string;
}

export const interventionRegions: Record<
  InterventionRegion,
  { label: string; color: string }
> = {
  centrale: { label: "Afrique Centrale", color: "#1E3A8A" },
  sahel: { label: "Sahel", color: "#C8A96B" },
  corne: { label: "Corne de l'Afrique", color: "#2563EB" },
};

export const interventionCountries: InterventionCountry[] = [
  {
    id: "cd",
    name: "République Démocratique du Congo",
    code: "RDC",
    iso2: "cd",
    numericId: "180",
    region: "centrale",
    regionLabel: "Afrique Centrale",
  },
  {
    id: "rw",
    name: "Rwanda",
    code: "RW",
    iso2: "rw",
    numericId: "646",
    region: "centrale",
    regionLabel: "Afrique Centrale",
  },
  {
    id: "ml",
    name: "Mali",
    code: "ML",
    iso2: "ml",
    numericId: "466",
    region: "sahel",
    regionLabel: "Sahel",
  },
  {
    id: "ne",
    name: "Niger",
    code: "NE",
    iso2: "ne",
    numericId: "562",
    region: "sahel",
    regionLabel: "Sahel",
  },
  {
    id: "bf",
    name: "Burkina Faso",
    code: "BF",
    iso2: "bf",
    numericId: "854",
    region: "sahel",
    regionLabel: "Sahel",
  },
  {
    id: "so",
    name: "Somalie",
    code: "SO",
    iso2: "so",
    numericId: "706",
    region: "corne",
    regionLabel: "Corne de l'Afrique",
  },
  {
    id: "dj",
    name: "Djibouti",
    code: "DJ",
    iso2: "dj",
    numericId: "262",
    region: "corne",
    regionLabel: "Corne de l'Afrique",
  },
];

export function getFlagUrl(iso2: string, size: 40 | 80 | 160 = 80) {
  return `https://flagcdn.com/w${size}/${iso2.toLowerCase()}.png`;
}

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#expertise", label: "Expertise" },
  { href: "#parcours", label: "Parcours" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const footerQuote =
  "Transformer les institutions grâce au dialogue, à l'inclusion et au leadership porté par les communautés.";
