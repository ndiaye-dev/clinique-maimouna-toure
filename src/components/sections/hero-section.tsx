"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, Clock3, MapPin, Phone } from "lucide-react";

import heroPlaceholder from "@/assets/images/clinic-hero-placeholder.svg";
import { clinic } from "@/data/clinic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;
const heroBackgrounds = {
  "clinic-hero-placeholder.svg": heroPlaceholder,
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const backgroundImage =
    heroBackgrounds[
      clinic.heroBackgroundImage as keyof typeof heroBackgrounds
    ] ?? heroPlaceholder;

  return (
    <section id="accueil" className="relative overflow-hidden py-10 md:py-14 lg:py-18">
      <Container>
        <div className="relative overflow-hidden rounded-[30px] border border-border/70 bg-card shadow-[0_28px_80px_-45px_rgba(14,42,65,0.5)]">
          <Image
            src={backgroundImage}
            alt="Façade de la clinique"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7fcff]/95 via-[#f7fcff]/90 to-[#f7fcff]/78" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.9fr] lg:gap-10 lg:p-10"
          >
            <div className="space-y-6">
              <motion.div variants={fadeUp}>
                <Badge className="h-6 gap-1.5 bg-primary/10 px-3 text-primary hover:bg-primary/15">
                  <BadgeCheck className="size-3.5" />
                  {clinic.licenseBadge}
                </Badge>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-3">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {clinic.location}
                </p>
                <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  {clinic.name}
                </h1>
                <p className="text-xl font-medium text-secondary md:text-2xl">{clinic.tagline}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {clinic.heroDescription}
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="h-11 px-5 shadow-sm">
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    Prendre rendez-vous sur WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11 px-5">
                  <Link href={phoneHref}>
                    <Phone />
                    Appeler la clinique
                  </Link>
                </Button>
              </motion.div>

              <motion.ul
                variants={fadeUp}
                className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2"
              >
                {clinic.trustBadges.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border/70 bg-background/80 px-3 py-2"
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.aside
              variants={fadeUp}
              className="space-y-4 rounded-3xl border border-border/70 bg-background/88 p-5 backdrop-blur-sm"
            >
              <div className="rounded-2xl border border-border/70 bg-card/90 p-4">
                <p className="inline-flex items-center gap-2 text-sm text-foreground">
                  <Clock3 className="size-4 text-primary" />
                  Horaires
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{clinic.openingHours.weekdays}</p>
                <p className="text-sm font-medium text-foreground">{clinic.openingHours.sunday}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {clinic.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/70 bg-card/90 px-4 py-3"
                  >
                    <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                    {stat.helper ? (
                      <p className="mt-1 text-[11px] text-muted-foreground/85">{stat.helper}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
