export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: NavigationItem[];
};

export type ClinicStat = {
  label: string;
  value: string;
  helper?: string;
};

export type ServiceIconName =
  | "stethoscope"
  | "venus"
  | "baby"
  | "scan"
  | "heartPulse"
  | "users";

export type ClinicService = {
  title: string;
  slug: string;
  description: string;
  icon: ServiceIconName;
  ctaLabel: string;
};

export type ClinicCommitment = {
  title: string;
  description: string;
};

export type ClinicDoctor = {
  name: string;
  role: string;
  speciality: string;
  experience: string;
  bio: string;
  languages: string[];
  availability: string;
  image?: string;
};

export type ClinicProfile = {
  name: string;
  tagline: string;
  heroDescription: string;
  location: string;
  district: string;
  phone: string;
  whatsapp: string;
  email: string;
  licenseBadge: string;
  brandLogoImage: string;
  heroBackgroundImage: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  stats: ClinicStat[];
  services: ClinicService[];
  trustBadges: string[];
  presentation: {
    title: string;
    description: string;
    highlights: ClinicCommitment[];
  };
  doctors: ClinicDoctor[];
};
