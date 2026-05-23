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
  | "users"
  | "activity"
  | "flask"
  | "syringe";

export type ServiceImageName =
  | "familyCare"
  | "clinicExterior"
  | "generalMedicine"
  | "gynecology"
  | "pediatrics"
  | "ultrasound"
  | "birth"
  | "diabetes"
  | "labTests";

export type ClinicService = {
  title: string;
  slug: string;
  description: string;
  icon: ServiceIconName;
  image: ServiceImageName;
  imageAlt: string;
  imagePosition?: string;
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

export type HomepageFeature = {
  title: string;
  description: string;
  icon: "quality" | "team" | "modern" | "human";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ClinicLocation = {
  title: string;
  address: string;
  landmark: string;
  mapLabel: string;
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
  clinicExteriorImage: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  stats: ClinicStat[];
  services: ClinicService[];
  additionalServices: ClinicService[];
  trustBadges: string[];
  homepageFeatures: HomepageFeature[];
  presentation: {
    title: string;
    description: string;
    highlights: ClinicCommitment[];
  };
  testimonials: Testimonial[];
  locationInfo: ClinicLocation;
  doctors: ClinicDoctor[];
};
