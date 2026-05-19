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
  brandLogoImage: "logo-clinique.png",
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
      description: "Examens d'imagerie non invasive pour un diagnostic rapide et fiable.",
      icon: "scan",
      ctaLabel: "Voir le service d'échographie",
    },
    {
      title: "Accouchement",
      slug: "accouchement",
      description: "Suivi prénatal, accompagnement à l'accouchement et sécurité mère-enfant.",
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
  presentation: {
    title: "Une clinique privée de référence à Keur Massar",
    description:
      "La Clinique Maïmouna Touré associe expertise médicale, proximité humaine et protocoles rigoureux pour offrir un parcours de soins fiable à chaque patient.",
    highlights: [
      {
        title: "Prise en charge coordonnée",
        description:
          "Médecins, sages-femmes et personnel infirmier travaillent en concertation pour chaque dossier.",
      },
      {
        title: "Standards de sécurité",
        description:
          "Protocoles d'hygiène, triage clinique et suivi qualité appliqués à chaque étape du parcours.",
      },
      {
        title: "Accompagnement de proximité",
        description:
          "Écoute active, orientation claire et suivi continu des familles de Keur Massar et Dakar.",
      },
    ],
  },
  doctors: [
    {
      name: "Dr. Aïssatou Ndiaye",
      role: "Médecin référent",
      speciality: "Gynécologie & Obstétrique",
      experience: "12 ans d'expérience",
      bio: "Spécialiste du suivi de la femme, de la grossesse et de la prise en charge obstétricale sécurisée.",
      languages: ["Français", "Wolof"],
      availability: "Consultations: Lun, Mar, Jeu, Sam",
    },
    {
      name: "Dr. Mamadou Faye",
      role: "Médecin spécialiste",
      speciality: "Pédiatrie",
      experience: "10 ans d'expérience",
      bio: "Prise en charge des nourrissons, enfants et adolescents avec une approche centrée famille.",
      languages: ["Français", "Wolof", "Anglais"],
      availability: "Consultations: Lun à Ven",
    },
    {
      name: "Dr. Khady Diop",
      role: "Médecin généraliste",
      speciality: "Consultation Générale",
      experience: "8 ans d'expérience",
      bio: "Diagnostic initial, prévention et orientation spécialisée selon les besoins cliniques du patient.",
      languages: ["Français", "Wolof"],
      availability: "Consultations: Mar à Sam",
    },
  ],
};
