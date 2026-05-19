"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Baby,
  ChevronRight,
  HeartPulse,
  ScanHeart,
  Stethoscope,
  Users,
  Venus,
} from "lucide-react";

import { clinic } from "@/data/clinic";
import type { ServiceIconName } from "@/types/clinic";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const iconMap: Record<ServiceIconName, ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  venus: Venus,
  baby: Baby,
  scan: ScanHeart,
  heartPulse: HeartPulse,
  users: Users,
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="pb-16 pt-8 md:pb-20 md:pt-10">
      <Container className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl space-y-2"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Nos Services
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Parcours médical complet, de la consultation à la prise en charge spécialisée
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Chaque service est conçu pour offrir un accompagnement clinique précis,
            humain et sécurisé pour les patients de Keur Massar et de Dakar.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {clinic.services.map((service) => {
            const Icon = iconMap[service.icon];
            const serviceMessage = encodeURIComponent(
              `Bonjour, je souhaite un rendez-vous pour ${service.title} à la Clinique Maïmouna Touré.`
            );
            const serviceWhatsappHref = `https://wa.me/${clinic.whatsapp}?text=${serviceMessage}`;

            return (
              <motion.article
                key={service.slug}
                variants={cardVariants}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-border/70 bg-card p-5 shadow-[0_16px_40px_-30px_rgba(16,35,58,0.6)]"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 min-h-18 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 h-9 px-0 text-primary hover:bg-transparent hover:text-primary/80"
                >
                  <Link href={serviceWhatsappHref} target="_blank" rel="noreferrer">
                    {service.ctaLabel}
                    <ChevronRight />
                  </Link>
                </Button>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
