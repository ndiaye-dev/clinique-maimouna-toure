import type { ClinicProfile } from "@/types/clinic";

export const clinic: ClinicProfile = {
  name: "Clinique Maïmouna Touré",
  tagline: "Soins médicaux de qualité pour toute la famille",
  heroDescription:
    "Consultations, gynécologie, pédiatrie, échographie, accouchement et suivi continu dans un cadre rassurant.",
  location: "Keur Massar — Dakar",
  district: "Keur Massar, Dakar, Sénégal",
  phone: "+221 78 797 89 30",
  whatsapp: "221787978930",
  email: "contact@cliniquemaimounatoure.com",
  licenseBadge: "Clinique agréée",
  heroBackgroundImage: "clinic-hero-placeholder.svg",
  openingHours: {
    weekdays: "Lun–Sam : 8h–20h",
    sunday: "Dimanche : Urgences",
  },
  stats: [
    { value: "12 000+", label: "Patients accompagnés", helper: "Depuis l'ouverture" },
    { value: "15+", label: "Années d'expérience", helper: "Équipe pluridisciplinaire" },
    { value: "6", label: "Services médicaux", helper: "Spécialités principales" },
  ],
  services: [
    {
      title: "Consultation générale",
      slug: "consultation-generale",
      description:
        "Évaluation complète, diagnostic initial et orientation personnalisée pour adultes et enfants.",
      icon: "stethoscope",
      ctaLabel: "Consulter ce service",
    },
    {
      title: "Gynécologie",
      slug: "gynecologie",
      description:
        "Suivi gynécologique, prévention, prise en charge hormonale et accompagnement de la femme.",
      icon: "venus",
      ctaLabel: "Découvrir la gynécologie",
    },
    {
      title: "Pédiatrie",
      slug: "pediatrie",
      description:
        "Consultations pédiatriques, suivi de croissance et prise en charge des pathologies infantiles.",
      icon: "baby",
      ctaLabel: "Découvrir la pédiatrie",
    },
    {
      title: "Échographie",
      slug: "echographie",
      description:
        "Examens d'imagerie non invasive pour un diagnostic rapide et fiable.",
      icon: "scan",
      ctaLabel: "Voir le service d'échographie",
    },
    {
      title: "Accouchement",
      slug: "accouchement",
      description:
        "Suivi prénatal, accompagnement à l'accouchement et sécurité mère-enfant.",
      icon: "heartPulse",
      ctaLabel: "En savoir plus",
    },
    {
      title: "Soins familiaux",
      slug: "soins-familiaux",
      description:
        "Parcours coordonné pour toute la famille avec suivi préventif et curatif de proximité.",
      icon: "users",
      ctaLabel: "Voir les soins familiaux",
    },
  ],
  trustBadges: [
    "Consultation rapide",
    "Disponible 6j/7",
    "Personnel qualifié",
    "Accompagnement familial",
  ],
};
