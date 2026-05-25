"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Baby,
  FlaskConical,
  HandHeart,
  HeartPulse,
  ScanHeart,
  Stethoscope,
  Users,
  Venus,
} from "lucide-react";

import clinicBuildingImage from "@/assets/images/clinic-building.png";
import heroFamilyImage from "@/assets/images/clinic-hero-family.png";
import servicesBannerImg from "@/assets/images/banners/services-banner.jpg";
import { SectionBanner } from "@/components/ui/section-banner";
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
import { cardReveal, fadeBlurUp, fadeUp, fadePop, lineExpand, staggerGrid, staggerHeader, vp } from "@/lib/motion";

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
      className="relative isolate overflow-hidden bg-[#F4F7FB] pb-12 md:pb-16"
    >
      <SectionBanner
        title="Nos Services"
        subtitle="Une prise en charge complète pour chaque étape de votre parcours de santé"
        image={servicesBannerImg}
        imageAlt="Médecin de la Clinique Maïmouna Touré"
        imagePosition="50% 40%"
        breadcrumb="Services"
      />

      <Container className="max-w-[1280px] space-y-8 pt-10 md:space-y-10 md:pt-12">

        {/* Section intro */}
        <motion.div
          variants={staggerHeader}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="text-center"
        >
          <motion.p variants={fadePop} className="text-xs font-bold uppercase tracking-[0.22em] text-[#CC1B1B]">
            Nos spécialités
          </motion.p>
          <motion.h2 variants={fadeBlurUp} className="mt-2 text-2xl font-extrabold text-[#1A3B9C] md:text-3xl">
            Des soins adaptés à chaque besoin
          </motion.h2>
          <motion.div
            variants={lineExpand}
            style={{ originX: 0.5 }}
            className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#CC1B1B]"
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {clinic.services.map((service) => {
            const Icon = iconMap[service.icon];
            const serviceImage = imageMap[service.image];

            return (
              <motion.article
                key={service.slug}
                variants={cardReveal}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#D5E2F4] bg-white shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1A3B9C]/30 hover:shadow-[0_16px_48px_-12px_rgba(26,59,156,0.22)]"
              >
                <div className="h-1 w-full bg-gradient-to-r from-[#CC1B1B] to-[#1A3B9C]" />

                <div
                  role="img"
                  aria-label={service.imageAlt}
                  className="relative aspect-[16/8] bg-[#EEF3FC] bg-cover overflow-hidden"
                  style={{
                    backgroundImage: `url(${serviceImage.src})`,
                    backgroundPosition: service.imagePosition ?? "50% 50%",
                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(15,36,112,0.12)_100%)] transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(15,36,112,0.22)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-5 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1A3B9C] to-[#0F2470] text-white shadow-[0_6px_20px_-6px_rgba(26,59,156,0.6)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <h3 className="font-serif text-[1.25rem] font-black leading-tight text-[#1A3B9C]">
                    {service.title}
                  </h3>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
                    style={{ originX: 0 }}
                    className="mt-2 block h-0.5 w-8 rounded-full bg-[#CC1B1B]"
                  />
                  <p className="mt-2.5 flex-1 text-sm leading-6 text-[#5A6E8C]">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Additional services */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="rounded-2xl border border-[#D5E2F4] bg-white p-6 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#CC1B1B]">
            &Eacute;galement disponibles
          </p>
          <h3 className="mt-2 text-lg font-black text-[#1A3B9C]">
            Autres prestations m&eacute;dicales
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {clinic.additionalServices.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <span
                  key={service.slug}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E2F4] bg-[#EEF3FC] px-4 py-2 text-sm font-semibold text-[#1A3B9C] transition-all duration-200 hover:border-[#1A3B9C]/40 hover:bg-white hover:shadow-sm"
                >
                  <Icon className="size-3.5 text-[#CC1B1B]" />
                  {service.title}
                </span>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col items-start gap-4 border-t border-[#D5E2F4] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-[#5A6E8C]">
              Nous mettons tout en &oelig;uvre pour vous offrir des soins s&ucirc;rs, humains et de qualit&eacute; &agrave; Keur Massar.
            </p>
            <Link
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#1A3B9C] px-6 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0F2470] hover:shadow-[0_8px_24px_-8px_rgba(26,59,156,0.4)]"
            >
              Nous contacter
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
