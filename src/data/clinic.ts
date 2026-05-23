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
  heroBackgroundImage: "clinic-hero-family.png",
  clinicExteriorImage: "clinic-building.png",
  openingHours: {
    weekdays: "Lun–Sam : 8h–20h",
    sunday: "Dimanche : Urgences",
  },
  stats: [
    {
      value: "12 000+",
      label: "Patients accompagnés",
      helper: "Depuis l'ouverture",
    },
    {
      value: "15+",
      label: "Années d'expérience",
      helper: "Équipe pluridisciplinaire",
    },
    {
      value: "6j/7",
      label: "Disponibilité",
      helper: "Consultations régulières",
    },
    {
      value: "95%",
      label: "Satisfaction",
      helper: "Retours patients",
    },
  ],
  services: [
    {
      title: "Médecine générale",
      slug: "medecine-generale",
      description:
        "Suivi médical global pour enfants, adultes et familles.",
      icon: "stethoscope",
      image: "generalMedicine",
      imageAlt: "Consultation de médecine générale dans un cadre médical rassurant",
      imagePosition: "50% 47%",
      ctaLabel: "Voir la médecine générale",
    },
    {
      title: "Gynécologie",
      slug: "gynecologie",
      description:
        "Prévention, suivi et accompagnement de la santé féminine.",
      icon: "venus",
      image: "gynecology",
      imageAlt: "Consultation gynécologique et accompagnement de la femme",
      imagePosition: "50% 45%",
      ctaLabel: "Découvrir la gynécologie",
    },
    {
      title: "Pédiatrie",
      slug: "pediatrie",
      description:
        "Prise en charge attentive de la santé et du bien-être des enfants.",
      icon: "baby",
      image: "pediatrics",
      imageAlt: "Consultation pédiatrique pour enfant à la clinique",
      imagePosition: "50% 46%",
      ctaLabel: "Découvrir la pédiatrie",
    },
    {
      title: "Échographie générale",
      slug: "echographie-generale",
      description: "Imagerie médicale pour un diagnostic fiable et précis.",
      icon: "scan",
      image: "ultrasound",
      imageAlt: "Espace médical moderne pour les examens d'échographie",
      imagePosition: "52% 50%",
      ctaLabel: "Voir le service d'échographie",
    },
    {
      title: "Accouchement",
      slug: "accouchement",
      description: "Accompagnement sécurisé avant, pendant et après la naissance.",
      icon: "heartPulse",
      image: "birth",
      imageAlt: "Accompagnement maternité et suivi après la naissance",
      imagePosition: "50% 48%",
      ctaLabel: "En savoir plus",
    },
    {
      title: "Planification familiale",
      slug: "planification-familiale",
      description: "Conseil et orientation adaptés à vos projets de vie.",
      icon: "users",
      image: "familyCare",
      imageAlt: "Conseil familial et accompagnement médical personnalisé",
      imagePosition: "64% 48%",
      ctaLabel: "Voir la planification familiale",
    },
  ],
  additionalServices: [
    {
      title: "Diabétologie",
      slug: "diabetologie",
      description: "Suivi et orientation pour une meilleure maîtrise du diabète.",
      icon: "activity",
      image: "diabetes",
      imageAlt: "Suivi médical en diabétologie",
      imagePosition: "50% 45%",
      ctaLabel: "Voir la diabétologie",
    },
    {
      title: "ECG",
      slug: "ecg",
      description: "Examen cardiaque pour évaluer l'activité électrique du cœur.",
      icon: "activity",
      image: "ultrasound",
      imageAlt: "Examen ECG dans un environnement médical",
      imagePosition: "50% 50%",
      ctaLabel: "Voir l'ECG",
    },
    {
      title: "Analyses biologiques",
      slug: "analyses-biologiques",
      description: "Prélèvements et analyses pour accompagner le diagnostic médical.",
      icon: "flask",
      image: "labTests",
      imageAlt: "Analyses biologiques et examens de laboratoire",
      imagePosition: "50% 48%",
      ctaLabel: "Voir les analyses",
    },
    {
      title: "Spécialités médico-chirurgicales",
      slug: "specialites-medico-chirurgicales",
      description: "Orientation spécialisée selon les besoins médicaux du patient.",
      icon: "stethoscope",
      image: "clinicExterior",
      imageAlt: "Spécialités médico-chirurgicales à la clinique",
      imagePosition: "52% 45%",
      ctaLabel: "Voir les spécialités",
    },
    {
      title: "Consultation prénatale",
      slug: "consultation-prenatale",
      description: "Suivi de grossesse attentif pour la mère et le bébé.",
      icon: "heartPulse",
      image: "birth",
      imageAlt: "Consultation prénatale et suivi de grossesse",
      imagePosition: "58% 50%",
      ctaLabel: "Voir le suivi prénatal",
    },
    {
      title: "Consultation post-natale",
      slug: "consultation-post-natale",
      description: "Accompagnement après la naissance pour la maman et l'enfant.",
      icon: "baby",
      image: "pediatrics",
      imageAlt: "Consultation post-natale pour mère et enfant",
      imagePosition: "68% 50%",
      ctaLabel: "Voir le suivi post-natal",
    },
  ],
  trustBadges: [
    "Consultation rapide",
    "Disponible 6j/7",
    "Personnel qualifié",
    "Accompagnement familial",
  ],
  homepageFeatures: [
    {
      title: "Soins de qualité",
      description: "Pour toute la famille",
      icon: "quality",
    },
    {
      title: "Équipe dévouée",
      description: "À votre écoute",
      icon: "team",
    },
    {
      title: "Environnement moderne",
      description: "Confort et sécurité",
      icon: "modern",
    },
    {
      title: "Approche humaine",
      description: "Votre bien-être d'abord",
      icon: "human",
    },
  ],
  presentation: {
    title: "Une clinique, une mission : votre santé",
    description:
      "La Clinique Maïmouna Touré s'engage à offrir des soins médicaux de qualité, dans un cadre moderne, avec une équipe qualifiée et bienveillante.",
    highlights: [
      {
        title: "Respect et bienveillance",
        description:
          "Chaque patient est accueilli avec attention, écoute et dignité.",
      },
      {
        title: "Qualité et sécurité des soins",
        description:
          "Des protocoles clairs accompagnent chaque étape de la prise en charge.",
      },
      {
        title: "Écoute et proximité",
        description:
          "Une équipe proche des familles de Keur Massar et de Dakar.",
      },
      {
        title: "Confidentialité garantie",
        description:
          "Les informations médicales sont traitées avec rigueur et discrétion.",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "Une clinique propre, un personnel accueillant et des médecins à l'écoute. Je recommande !",
      name: "Fatou S.",
      role: "Patiente",
    },
  ],
  locationInfo: {
    title: "Keur Massar - Dakar, Sénégal",
    address: "Unité 9, Keur Massar, Dakar",
    landmark: "À côté de la Pharmacie Keur Massar",
    mapLabel: "Keur Massar",
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
