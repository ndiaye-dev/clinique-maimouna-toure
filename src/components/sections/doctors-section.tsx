"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarClock, MessageCircle, Sparkles } from "lucide-react";

import { clinic } from "@/data/clinic";
import { Container } from "@/components/layout/container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

function initialsFromName(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase() ?? "")
    .join("");
}

export function DoctorsSection() {
  return (
    <section id="medecins" className="pb-20 pt-4 md:pb-24">
      <Container className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl space-y-2"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Notre Équipe Médicale
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Des médecins qualifiés, à l’écoute de chaque patient
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Une équipe expérimentée assure un suivi clinique structuré et une qualité de
            soins constante pour les familles de Keur Massar.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {clinic.doctors.map((doctor) => (
            <motion.article
              key={doctor.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-border/70 bg-card p-5 shadow-[0_18px_42px_-30px_rgba(16,35,58,0.6)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar size="lg" className="size-12">
                    <AvatarFallback className="bg-primary/12 text-sm font-semibold text-primary">
                      {initialsFromName(doctor.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {doctor.name}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {doctor.role}
                    </p>
                  </div>
                </div>
                <Sparkles className="size-4 text-primary/70" />
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-foreground">{doctor.speciality}</p>
                <p className="text-sm text-muted-foreground">{doctor.bio}</p>
              </div>

              <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
                <p className="inline-flex items-center gap-2">
                  <CalendarClock className="size-3.5 text-primary" />
                  {doctor.availability}
                </p>
                <p className="text-foreground/85">{doctor.experience}</p>
                <p>Langues: {doctor.languages.join(" • ")}</p>
              </div>

              <Button asChild className="mt-5 w-full">
                <Link
                  href={`${whatsappHref}?text=${encodeURIComponent(
                    `Bonjour, je souhaite consulter ${doctor.name} (${doctor.speciality}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle />
                  Prendre rendez-vous
                </Link>
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
