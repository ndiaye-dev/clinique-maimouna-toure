"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Smile,
  Users,
} from "lucide-react";

import heroFamilyImage from "@/assets/images/clinic-hero-family.png";
import servicesBannerImg from "@/assets/images/banners/services-banner.jpg";
import facadeImg from "@/assets/images/gallery/facade.jpg";
import infirmierPatientImg from "@/assets/images/slider/infirmiere-patient.jpg";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

const slides = [
  {
    src: heroFamilyImage,
    alt: "Consultation familiale à la Clinique Maïmouna Touré",
    caption: "Soins familiaux bienveillants",
    position: "50% 18%",
  },
  {
    src: servicesBannerImg,
    alt: "Médecin spécialiste en consultation",
    caption: "Expertise médicale confirmée",
    position: "50% 40%",
  },
  {
    src: infirmierPatientImg,
    alt: "Infirmière prodiguant des soins à un patient",
    caption: "Soins attentionnés 24h/24",
    position: "50% 35%",
  },
  {
    src: facadeImg,
    alt: "Façade de la Clinique Maïmouna Touré",
    caption: "Votre clinique de confiance",
    position: "50% 40%",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const stats = [
  { icon: Users,        value: "12 000+", label: "Patients accompagnés" },
  { icon: CalendarDays, value: "15+",     label: "Années d'expérience" },
  { icon: Clock3,       value: "6j/7",    label: "Disponibilité" },
  { icon: Smile,        value: "95 %",    label: "Satisfaction" },
];

function HeroSlider({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_64px_-16px_rgba(26,59,156,0.16)]">
        {/* Images en crossfade */}
        <div className="relative aspect-[4/3] w-full bg-[#EEF3FC]">
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={current === 0}
                className="object-cover [filter:contrast(1.05)_saturate(1.06)]"
                style={{ objectPosition: slide.position }}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Fondus */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/22 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/18 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D1B4B]/40 to-transparent pointer-events-none" />

          {/* Badge Clinique agréée */}
          <div className="absolute right-4 top-4 flex items-center gap-2.5 rounded-xl bg-[#1A3B9C] px-4 py-2.5 shadow-[0_6px_20px_-4px_rgba(26,59,156,0.48)]">
            <BadgeCheck className="size-3.5 shrink-0 text-white" />
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-wide leading-none text-white">Clinique agréé</p>
              <p className="mt-[3px] text-[0.54rem] leading-none text-white/60">{clinic.abbreviation}</p>
            </div>
          </div>

          {/* Carte Horaires */}
          <div className="absolute bottom-[14%] left-[8%] w-36 rounded-xl border border-white/12 bg-white/90 px-3 py-2.5 shadow-[0_8px_28px_-6px_rgba(13,27,75,0.20)] backdrop-blur-md">
            <p className="flex items-center gap-1.5 text-[0.67rem] font-black text-[#1A3B9C]">
              <Clock3 className="size-3" />
              Horaires
            </p>
            <p className="mt-1 text-[0.59rem] leading-[1.55] text-[#5A6E8C]">{clinic.openingHours.weekdays}</p>
            <p className="mt-0.5 text-[0.59rem] font-bold text-[#CC1B1B]">{clinic.openingHours.sunday}</p>
          </div>

          {/* Caption slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${current}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.38 }}
              className="absolute bottom-3 right-4 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm"
            >
              <span className="text-[0.6rem] font-semibold text-white/90">
                {slide.caption}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots de navigation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative"
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className={[
                  "block rounded-full transition-all duration-300",
                  i === current
                    ? "h-2 w-6 bg-white"
                    : "h-1.5 w-1.5 bg-white/45 hover:bg-white/70",
                ].join(" ")}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* ── Fond ambiance ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_80%_at_100%_50%,#EEF3FC_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_42%_32%_at_0%_100%,#EEF3FC_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.013] [background-image:linear-gradient(#1A3B9C_1px,transparent_1px),linear-gradient(90deg,#1A3B9C_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <Container className="max-w-none px-4 sm:px-6 lg:px-[4vw]">
        <div className="grid items-center gap-8 pb-8 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:pb-8 lg:pt-12">

          {/* ══ COLONNE GAUCHE ══ */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col lg:pl-3"
          >
            {/* Pastilles */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1A3B9C]/18 bg-[#EEF3FC] px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#1A3B9C]">
                <BadgeCheck className="size-3 text-[#CC1B1B]" />
                Clinique agréé &mdash; {clinic.abbreviation}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8EEF8] bg-transparent px-3 py-1.5 text-[0.65rem] font-medium text-[#7A8CA8]">
                <MapPin className="size-2.5 text-[#1A3B9C]/60" />
                {clinic.location}
              </span>
            </motion.div>

            {/* Séparateur décoratif */}
            <motion.div variants={fadeUp} className="mt-4 flex items-center gap-2">
              <span className="h-[2px] w-8 rounded-full bg-[#CC1B1B]" />
              <span className="h-[2px] w-3 rounded-full bg-[#1A3B9C]/25" />
            </motion.div>

            {/* Titre */}
            <motion.h1
              variants={fadeUp}
              className="mt-3 font-sans text-[2.6rem] font-black leading-[1.06] tracking-[-0.01em] text-[#0D1B4B] sm:text-[2.9rem] lg:text-[3.6rem] xl:text-[3.8rem]"
            >
              Des soins{" "}
              <em className="not-italic text-[#1A3B9C] [font-style:italic]">d&apos;exception</em>,{" "}
              <br className="hidden sm:block" />
              proches de vous.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[29rem] text-[0.97rem] leading-[1.82] text-[#5A6E8C]"
            >
              Médecine générale, gynécologie, pédiatrie,
              échographie, accouchement et suivi médical dans un cadre
              professionnel et rassurant.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 rounded-full bg-[#1A3B9C] px-8 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(26,59,156,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#0F2470] hover:shadow-[0_12px_36px_-8px_rgba(26,59,156,0.55)]"
              >
                <Link href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4.5" />
                  Prendre rendez-vous
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 gap-2 rounded-full border-[#1A3B9C]/25 bg-white/80 px-7 text-sm font-semibold text-[#1A3B9C] transition-all hover:-translate-y-0.5 hover:border-[#1A3B9C] hover:bg-[#1A3B9C] hover:text-white"
              >
                <Link href={phoneHref}>
                  <Phone className="size-4" />
                  Appeler
                </Link>
              </Button>
            </motion.div>

            {/* Bandeau stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 overflow-hidden rounded-2xl border border-[#E8EEF8] bg-white shadow-[0_4px_24px_-6px_rgba(26,59,156,0.09)]"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C]" />
              <div className="grid grid-cols-4">
                {stats.map(({ icon: Icon, value, label }, i) => (
                  <div
                    key={label}
                    className={[
                      "group flex flex-col items-center gap-1.5 px-3 py-4 text-center transition-colors duration-200 hover:bg-[#F8FAFF]",
                      i < stats.length - 1 ? "border-r border-[#EEF2FA]" : "",
                    ].join(" ")}
                  >
                    <span className="flex size-7 items-center justify-center rounded-lg bg-[#EEF3FC] text-[#1A3B9C] transition-colors duration-200 group-hover:bg-white">
                      <Icon className="size-3.5" />
                    </span>
                    <p className="text-[1.35rem] font-black leading-none tracking-tight text-[#1A3B9C]">{value}</p>
                    <p className="text-[0.6rem] font-medium leading-tight text-[#7A8CA8]">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ══ COLONNE DROITE — Slider desktop ══ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:-mr-[calc(4vw-20px)] lg:block"
          >
            <HeroSlider />
          </motion.div>

          {/* ══ Slider mobile ══ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.18 }}
            className="lg:hidden"
          >
            <HeroSlider />
          </motion.div>

        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F4F7FB]/55 to-transparent" />
    </section>
  );
}
