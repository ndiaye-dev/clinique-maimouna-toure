import type { FooterLinkGroup, NavigationItem } from "@/types/clinic";

export const primaryNavigation: NavigationItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Clinique", href: "#clinique" },
  { label: "Médecins", href: "#medecins" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Galerie", href: "#galerie" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Navigation",
    links: primaryNavigation,
  },
  {
    title: "Pages à Venir",
    links: [
      { label: "Services", href: "#services" },
      { label: "Médecins", href: "#medecins" },
      { label: "Galerie", href: "#galerie" },
      { label: "Contact", href: "#contact" },
      { label: "À propos", href: "#clinique" },
    ],
  },
];

export const homepageSections = [
  {
    id: "services",
    title: "Services",
    description:
      "Présentation structurée des services prioritaires de la clinique (gynécologie, pédiatrie, échographie, urgences).",
  },
  {
    id: "clinique",
    title: "Présentation de la Clinique",
    description:
      "Bloc institutionnel pour valoriser l'expertise, l'approche patient et les standards qualité de la clinique.",
  },
  {
    id: "medecins",
    title: "Médecins",
    description:
      "Section dédiée à l'équipe médicale, avec profils, spécialités et disponibilité des praticiens.",
  },
  {
    id: "temoignages",
    title: "Témoignages",
    description:
      "Mise en avant de retours patients pour renforcer la confiance et la preuve sociale locale.",
  },
  {
    id: "galerie",
    title: "Galerie",
    description:
      "Galerie photos premium des espaces, équipements et environnement de prise en charge.",
  },
  {
    id: "faq",
    title: "FAQ",
    description:
      "Questions fréquentes sur les consultations, urgences, horaires et modalités de rendez-vous.",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "Zone de contact local optimisée avec numéro d'appel, WhatsApp, adresse et carte.",
  },
] as const;
