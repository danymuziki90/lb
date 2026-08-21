export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Linda J. Bauma",
    jobTitle: "Conseillère Stratégique et Diplomatique",
    description:
      "Experte internationale en diplomatie publique, communication de crise, gouvernance, égalité de genre et localisation de l'aide humanitaire.",
    url: "https://lindajbauma.com",
    email: "contact@lindajbauma.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kinshasa",
      addressCountry: "CD",
    },
    knowsAbout: [
      "Diplomatie publique",
      "Communication de crise",
      "Gouvernance",
      "Égalité de genre",
      "Droits humains",
      "Aide humanitaire",
      "Consolidation de la paix",
    ],
    workLocation: [
      { "@type": "Place", name: "Afrique Centrale" },
      { "@type": "Place", name: "Sahel" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
