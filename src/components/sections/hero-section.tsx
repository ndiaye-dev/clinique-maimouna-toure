"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  Medal,
  MessageCircle,
  Phone,
  Smile,
  Users,
} from "lucide-react";

import heroFamilyImage from "@/assets/images/clinic-hero-family.png";
import heroPlaceholder from "@/assets/images/clinic-hero-placeholder.svg";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

const heroBackgrounds = {
  "clinic-hero-placeholder.svg": heroPlaceholder,
  "clinic-hero-family.png": heroFamilyImage,
} as const;

const quickProofs = [
  {
    label: "Consultation rapide",
    helper: "Prise en charge efficace",
    icon: Clock3,
  },
  {
    label: "Personnel qualifié",
    helper: "Équipe médicale experte",
    icon: Users,
  },
  {
    label: "Soins familiaux",
    helper: "Pour tous, à tout âge",
    icon: HeartPulse,
  },
] as const;

const statIcons = [Users, Medal, Smile, CalendarDays] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const backgroundImage =
    heroBackgrounds[
      clinic.heroBackgroundImage as keyof typeof heroBackgrounds
    ] ?? heroPlaceholder;

  return (
    <section
      id="accueil"
      className="relative isolate overflow-x-hidden bg-[#eef8fb] pb-0 pt-0 lg:pb-2"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_13%_18%,rgba(216,244,253,0.92),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(0,76,154,0.18),transparent_30%),radial-gradient(circle_at_48%_92%,rgba(255,255,255,0.96),transparent_36%),linear-gradient(105deg,#fbfdff_0%,#f4fbfe_38%,#dff4fb_100%)]" />
        <div className="absolute -left-24 top-20 size-80 rounded-full bg-[#dff6ff]/80 blur-3xl" />
        <div className="absolute right-[14%] top-10 size-72 rounded-full bg-[#5bb8e5]/16 blur-3xl" />
        <div className="absolute bottom-10 left-[42%] size-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute inset-y-0 -left-[5%] right-0 hidden lg:block">
          <Image
            src={backgroundImage}
            alt="Consultation familiale à la Clinique Maïmouna Touré"
            fill
            priority
            sizes="100vw"
            className="scale-[0.96] object-cover object-[59%_39%]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_48%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(90deg,#fbfdff_0%,rgba(248,253,255,0.92)_18%,rgba(246,252,254,0.4)_32%,rgba(239,249,253,0.07)_45%,rgba(0,76,154,0.03)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(239,248,251,0.02)_48%,rgba(239,248,251,0.48)_100%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(13,74,136,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(13,74,136,0.14)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_14%_56%,black,transparent_54%)]" />
        <svg
          aria-hidden="true"
          className="absolute bottom-4 left-0 hidden h-44 w-[36rem] text-[#9ccfe8] opacity-18 lg:block"
          fill="none"
          viewBox="0 0 560 190"
        >
          {Array.from({ length: 13 }).map((_, index) => (
            <path
              key={index}
              d={`M -48 ${188 - index * 5} C 92 ${150 - index * 6}, 208 ${
                122 - index * 5
              }, 560 ${116 - index * 4}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container className="max-w-none px-4 sm:px-6 lg:px-[4.3vw]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="relative pt-6 md:pt-7 lg:min-h-[565px] lg:pt-7"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 overflow-hidden rounded-[24px] border border-[#0d4a88]/10 bg-white shadow-[0_24px_60px_-48px_rgba(10,47,89,0.75)] md:mb-7 lg:hidden"
          >
            <Image
              src={backgroundImage}
              alt="Consultation familiale à la Clinique Maïmouna Touré"
              priority
              className="aspect-[16/9] w-full object-cover object-[66%_48%]"
            />
          </motion.div>

          <div className="relative z-10 w-full max-w-[22rem] sm:max-w-[45rem]">
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Badge className="h-10 gap-2 rounded-full border border-[#064a9b] bg-[#064a9b] px-5 text-sm font-bold uppercase text-white shadow-[0_16px_30px_-20px_rgba(6,74,155,0.9)] hover:bg-[#053f84]">
                <BadgeCheck className="size-4" />
                Clinique agréée
              </Badge>

              <span className="inline-flex h-10 max-w-full items-center gap-2 rounded-full border border-[#064a9b]/10 bg-white/90 px-4 text-sm font-bold text-[#064a9b] shadow-[0_12px_30px_-28px_rgba(10,47,89,0.68)] backdrop-blur-md">
                <MapPin className="size-4 text-[#1f88cf]" />
                <span className="truncate">{clinic.location}</span>
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 space-y-3 md:mt-6 md:space-y-4">
              <h1 className="max-w-full font-sans text-[2.25rem] font-black leading-[1.03] text-[#063773] sm:text-5xl md:text-[3.25rem] lg:text-[3.15rem] xl:text-[3.55rem]">
                Des soins <span className="block text-[#dc1f3a] sm:inline">d&apos;exception,</span>
                <br className="hidden sm:block" />
                proches de vous.
              </h1>

              <p className="max-w-full text-[0.95rem] leading-7 text-[#244d75] sm:text-base md:max-w-[39rem] md:text-lg">
                {clinic.name} à Keur Massar - Dakar, des soins médicaux de qualité
                pour toute la famille dans un cadre moderne et rassurant.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-7"
            >
              <Button
                asChild
                size="lg"
                className="h-[2.56rem] w-full justify-center rounded-xl border border-[#064a9b] bg-[#064a9b] px-3.5 text-[0.9rem] font-bold text-white shadow-[0_18px_34px_-20px_rgba(6,74,155,0.95)] transition-all hover:-translate-y-0.5 hover:bg-[#053f84] sm:w-auto"
              >
                <Link href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  Prendre rendez-vous
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-[3.15rem] w-full justify-center rounded-xl border-[#064a9b]/35 bg-white/88 px-5 text-base font-bold text-[#064a9b] shadow-[0_12px_28px_-24px_rgba(10,47,89,0.72)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#063773] sm:w-auto"
              >
                <Link href={phoneHref}>
                  <Phone className="size-5" />
                  Appeler
                </Link>
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-5 grid max-w-[34rem] gap-2 sm:grid-cols-3 md:mt-6 md:gap-1"
            >
              {quickProofs.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.label}
                    className="grid grid-cols-[2.35rem_1fr] items-center gap-1"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full border border-[#064a9b]/22 bg-white/88 text-[#064a9b] shadow-[0_16px_30px_-24px_rgba(10,47,89,0.8)] backdrop-blur-md">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-black text-[#063773]">
                        {item.label}
                      </span>
                      <span className="block text-xs text-[#5d7898]">
                        {item.helper}
                      </span>
                    </span>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <div className="pointer-events-none absolute inset-y-0 -right-[1.5vw] z-10 hidden w-[16rem] lg:block xl:-right-[0.5vw]">
            <div
              className="absolute right-0 top-[29%] w-[12.8rem] rounded-2xl border border-white/80 bg-white p-3.5 text-[#064a9b] shadow-[0_14px_30px_-25px_rgba(10,47,89,0.5)]"
            >
              <p className="inline-flex items-center gap-2 text-base font-black">
                <Clock3 className="size-4.5 text-[#1d4ea5]" />
                Horaires
              </p>
              <p className="mt-2.5 text-xs text-[#4b6686]">
                {clinic.openingHours.weekdays}
              </p>
              <p className="text-xs font-black text-[#dc1f3a]">
                {clinic.openingHours.sunday}
              </p>
            </div>

            <div
              className="absolute -right-2 top-[50%] w-[13.8rem] rounded-2xl bg-[#064a9b] p-3 text-white shadow-[0_14px_30px_-24px_rgba(8,50,96,0.68)]"
            >
              <p className="inline-flex items-center gap-2 text-sm font-black">
                <Clock3 className="size-4.5" />
                Disponible 6j/7
              </p>
              <p className="mt-1 text-xs text-white/82">
                Consultations et suivi réguliers
              </p>
            </div>
          </div>

          <div className="relative z-20 mx-auto mt-4 grid w-full max-w-[54rem] grid-cols-2 gap-2 rounded-2xl border border-[#064a9b]/10 bg-white px-3.5 py-2 shadow-[0_22px_50px_-34px_rgba(10,47,89,0.55)] md:mt-5 lg:absolute lg:bottom-14 lg:left-0 lg:mt-0 lg:translate-y-[24%] lg:grid-cols-4">
            {clinic.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? CheckCircle2;

              return (
                <div
                  key={stat.label}
                  className="grid grid-cols-[1.85rem_1fr] items-center gap-1.5"
                >
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#eaf6fd] text-[#064a9b]">
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[1.7rem] font-black leading-none text-[#064a9b]">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 block text-[10px] leading-[1.15] text-[#244d75]">
                      {stat.label}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
