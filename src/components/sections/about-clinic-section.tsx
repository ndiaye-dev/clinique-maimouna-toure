"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarDays,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Smile,
  Stethoscope,
  Users,
} from "lucide-react";

import clinicBuilding from "@/assets/images/clinic-building.png";
import clinicFacade from "@/assets/images/clinique-maimouna-toure-facade.png";
import { clinic } from "@/data/clinic";
import { Container } from "@/components/layout/container";
import {
  fadeBlurUp, fadeUp, fadePop, cardReveal, scaleReveal,
  slideLeft, staggerGrid, staggerHeader, lineExpand, vp,
} from "@/lib/motion";

const exteriorImages = {
  "clinic-building.png": clinicBuilding,
  "clinique-maimouna-toure-facade.png": clinicFacade,
} as const;

const highlightIcons = [HeartHandshake, ShieldCheck, Stethoscope, Lock];

const highlightGradients = [
  "from-[#CC1B1B]/10 to-[#EEF3FC]",
  "from-[#1A3B9C]/10 to-[#EEF3FC]",
  "from-[#CC1B1B]/10 to-[#EEF3FC]",
  "from-[#1A3B9C]/10 to-[#EEF3FC]",
];

const floatingStats = [
  { icon: Users,        value: "12 000+", label: "Patients",        position: "-top-4 right-8" },
  { icon: CalendarDays, value: "15+",     label: "Ans d'expérience", position: "top-1/2 -right-5 -translate-y-1/2" },
  { icon: Smile,        value: "95 %",    label: "Satisfaction",    position: "bottom-20 left-6" },
];

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

export function AboutClinicSection() {
  const exteriorImage =
    exteriorImages[clinic.clinicExteriorImage as keyof typeof exteriorImages] ?? clinicBuilding;

  return (
    <section id="clinique" className="relative isolate overflow-hidden bg-white pb-16 pt-8 md:pb-24 md:pt-10">

      {/* Fond ambiance */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_0%_50%,#EEF3FC_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_100%,#EEF3FC_0%,transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.014] [background-image:linear-gradient(#1A3B9C_1px,transparent_1px),linear-gradient(90deg,#1A3B9C_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <Container className="lg:px-16 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ══ COLONNE GAUCHE — image + floating stats ══ */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="relative order-2 pt-6 lg:order-1 lg:pt-0"
          >
            {/* Décoration fond */}
            <div className="absolute -top-5 left-0 h-full w-full rounded-3xl bg-gradient-to-br from-[#EEF3FC] to-[#D5E2F4]/60" />
            <div className="absolute -top-2.5 left-0 h-full w-full rounded-3xl border border-[#D5E2F4]/70" />

            {/* Card image principale */}
            <div className="relative overflow-hidden rounded-3xl border border-[#D5E2F4] bg-white shadow-[0_32px_80px_-20px_rgba(26,59,156,0.22)]">
              <div className="relative aspect-square w-full bg-[#EEF3FC]">
                <Image
                  src={exteriorImage}
                  alt="Facade de la Clinique Maimouna Touré"
                  fill
                  className="object-cover object-top [filter:contrast(1.04)_saturate(1.05)]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Overlay dégradé bas */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D1B4B]/35 to-transparent" />
              </div>

              {/* Badge licence */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/92 px-4 py-3 shadow-[0_4px_16px_-4px_rgba(13,27,75,0.18)] backdrop-blur-md">
                <BadgeCheck className="size-5 shrink-0 text-[#1A3B9C]" />
                <p className="text-[0.6rem] font-semibold leading-tight text-[#5A6E8C]">
                  {clinic.licenseBadge}
                </p>
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingStats.map(({ icon: Icon, value, label, position }, i) => (
              <motion.div
                key={label}
                variants={scaleReveal}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                transition={{ delay: 0.3 + i * 0.14 } as never}
                className={`absolute ${position} z-10 flex items-center gap-2.5 rounded-2xl border border-[#D5E2F4] bg-white px-3.5 py-2.5 shadow-[0_8px_32px_-8px_rgba(26,59,156,0.22)]`}
              >
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A3B9C]">
                  <Icon className="size-3.5" />
                </span>
                <div>
                  <p className="text-sm font-black leading-none text-[#1A3B9C]">{value}</p>
                  <p className="mt-0.5 text-[0.6rem] leading-none text-[#7A8CA8]">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ══ COLONNE DROITE — texte ══ */}
          <div className="order-1 space-y-8 lg:order-2">

            {/* Header cascade */}
            <motion.div
              variants={staggerHeader}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="space-y-3"
            >
              <motion.p
                variants={fadePop}
                className="text-xs font-bold uppercase tracking-[0.28em] text-[#CC1B1B]"
              >
                &Agrave; propos de nous
              </motion.p>

              <motion.h2
                variants={fadeBlurUp}
                className="text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-[#0D1B4B] md:text-4xl lg:text-[2.1rem]"
              >
                {clinic.presentation.title}
              </motion.h2>

              <motion.div
                variants={lineExpand}
                style={{ originX: 0 }}
                className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#CC1B1B] to-[#CC1B1B]/40"
              />

              <motion.p
                variants={fadeUp}
                className="max-w-[460px] text-[0.97rem] leading-[1.8] text-[#5A6E8C] text-pretty"
              >
                {clinic.presentation.description}
              </motion.p>
            </motion.div>

            {/* Highlight cards */}
            <motion.ul
              variants={staggerGrid}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="grid gap-3 sm:grid-cols-2"
            >
              {clinic.presentation.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? BadgeCheck;
                const gradient = highlightGradients[index];
                return (
                  <motion.li
                    key={item.title}
                    variants={cardReveal}
                    className="group relative overflow-hidden rounded-2xl border border-[#D5E2F4] bg-white p-5 shadow-[0_4px_20px_-6px_rgba(26,59,156,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1A3B9C]/25 hover:shadow-[0_16px_40px_-8px_rgba(26,59,156,0.18)]"
                  >
                    {/* Ligne top au hover */}
                    <div className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C] transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-start gap-3.5">
                      <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-[#1A3B9C] shadow-sm ring-1 ring-[#D5E2F4] transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="size-[18px]" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#0D1B4B]">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[#5A6E8C]">{item.description}</p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>


          </div>
        </div>
      </Container>
    </section>
  );
}
