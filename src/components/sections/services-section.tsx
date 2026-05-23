"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  FlaskConical,
  HandHeart,
  Heart,
  HeartPulse,
  ScanHeart,
  Stethoscope,
  Users,
  Venus,
} from "lucide-react";

import clinicBuildingImage from "@/assets/images/clinic-building.png";
import heroFamilyImage from "@/assets/images/clinic-hero-family.png";
import birthImage from "@/assets/images/services/accouchement.jpg";
import labTestsImage from "@/assets/images/services/analyses-biologiques.jpg";
import diabetesImage from "@/assets/images/services/diabetologie.jpg";
import ultrasoundImage from "@/assets/images/services/echographie.jpg";
import gynecologyImage from "@/assets/images/services/gynecologie.jpg";
import generalMedicineImage from "@/assets/images/services/medecine-generale.jpg";
import pediatricsImage from "@/assets/images/services/pediatrie.jpg";
import { Container } from "@/components/layout/container";
import { clinic } from "@/data/clinic";
import type { ServiceIconName, ServiceImageName } from "@/types/clinic";

const iconMap: Record<ServiceIconName, ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  venus: Venus,
  baby: Baby,
  scan: ScanHeart,
  heartPulse: HeartPulse,
  users: Users,
  activity: Activity,
  flask: FlaskConical,
  syringe: HandHeart,
};

const imageMap = {
  familyCare: heroFamilyImage,
  clinicExterior: clinicBuildingImage,
  generalMedicine: generalMedicineImage,
  gynecology: gynecologyImage,
  pediatrics: pediatricsImage,
  ultrasound: ultrasoundImage,
  birth: birthImage,
  diabetes: diabetesImage,
  labTests: labTestsImage,
} satisfies Record<ServiceImageName, typeof heroFamilyImage>;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#fbfdff] pb-14 pt-4 md:pb-20 md:pt-6"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfe_58%,#ffffff_100%)]" />

      <Container className="max-w-[1280px] space-y-5 md:space-y-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex max-w-[22rem] flex-wrap items-center justify-center gap-2 rounded-full border border-[#064a9b]/12 bg-white px-4 py-2 text-center text-[0.64rem] font-black uppercase leading-5 tracking-[0.08em] text-[#064a9b] sm:max-w-full sm:text-[0.72rem] sm:tracking-[0.16em]">
            <Heart className="size-3.5 shrink-0 text-[#dc1f3a]" />
            <span className="min-w-0 max-w-[17rem] whitespace-normal break-words sm:max-w-none">
              Des soins de qualité, proche de vous
            </span>
          </div>

          <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-[#063773] md:text-5xl">
            Nos services
          </h2>

          <div className="mx-auto mt-2.5 flex w-36 items-center justify-center gap-3 text-[#dc1f3a]">
            <span className="h-px flex-1 bg-[#dc1f3a]/55" />
            <Heart className="size-3.5" />
            <span className="h-px flex-1 bg-[#dc1f3a]/55" />
          </div>

          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-6 text-[#506985] md:text-base md:leading-7">
            Une prise en charge complète et personnalisée pour vous accompagner à
            chaque étape de votre parcours de santé.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clinic.services.map((service) => {
            const Icon = iconMap[service.icon];
            const serviceImage = imageMap[service.image];

            return (
              <article
                key={service.slug}
                className="group overflow-hidden rounded-2xl border border-[#cfddea] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#064a9b]/38"
              >
                <div
                  role="img"
                  aria-label={service.imageAlt}
                  className="relative aspect-[16/8] bg-[#eef8fd] bg-cover"
                  style={{
                    backgroundImage: `url(${serviceImage.src})`,
                    backgroundPosition: service.imagePosition ?? "50% 50%",
                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(255,255,255,0.16)_100%)]" />
                  <div className="absolute bottom-3 left-5 flex size-12 items-center justify-center rounded-full border border-[#d9e7f2] bg-white/95 text-[#064a9b] backdrop-blur-sm">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="px-6 pb-5 pt-5">
                  <h3 className="font-serif text-[1.35rem] font-black leading-tight text-[#063773]">
                    {service.title}
                  </h3>
                  <span className="mt-2.5 block h-0.5 w-7 rounded-full bg-[#dc1f3a]" />
                  <p className="mt-2.5 min-h-[2.65rem] text-sm leading-6 text-[#425c79]">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 rounded-2xl border border-[#cfddea] bg-white px-6 py-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div className="flex items-start gap-4">
            <span className="hidden size-14 shrink-0 items-center justify-center rounded-full border border-[#dbe8f2] bg-[#f4fbfe] text-[#064a9b] sm:flex">
              <HandHeart className="size-7" />
            </span>
            <div>
              <h3 className="text-base font-black text-[#063773] md:text-lg">
                Découvrez l&apos;ensemble de nos prestations médicales
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-[#506985]">
                Nous mettons tout en œuvre pour vous offrir des soins sûrs,
                humains et de qualité.
              </p>
            </div>
          </div>

          <Link
            href="#services"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-[#064a9b] bg-[#064a9b] px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#053f84]"
          >
            Voir tous les services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
