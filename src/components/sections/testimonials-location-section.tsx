"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;
const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;

export function TestimonialsLocationSection() {
  return (
    <section id="contact" className="bg-[#F4F7FB] py-16 md:py-20">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#CC1B1B]">
            Nous contacter
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#1A3B9C] md:text-4xl">
            Prenez rendez-vous
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5A6E8C]">
            Notre équipe est disponible 6j/7 pour vous accueillir et répondre à vos questions.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">

          {/* Card — Appeler */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[#D5E2F4] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)]"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A3B9C]">
              <Phone className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#1A3B9C]">Par téléphone</h3>
            <p className="mt-1 text-sm text-[#5A6E8C]">Appelez-nous directement</p>
            <div className="mt-4 space-y-2">
              <Link
                href={phoneHref}
                className="block text-sm font-bold text-[#1A3B9C] hover:text-[#0F2470]"
              >
                {clinic.phone}
              </Link>
              {clinic.phoneMobile && (
                <Link
                  href={`tel:${clinic.phoneMobile.replaceAll(" ", "")}`}
                  className="block text-sm font-bold text-[#1A3B9C] hover:text-[#0F2470]"
                >
                  {clinic.phoneMobile}
                </Link>
              )}
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-5 w-full border-[#1A3B9C]/30 text-[#1A3B9C] hover:bg-[#EEF3FC]"
            >
              <Link href={phoneHref}>Appeler maintenant</Link>
            </Button>
          </motion.div>

          {/* Card — WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[#1A3B9C]/20 bg-[#1A3B9C] p-6 shadow-[0_8px_32px_-8px_rgba(26,59,156,0.35)]"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-white/15 text-white">
              <MessageCircle className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">WhatsApp</h3>
            <p className="mt-1 text-sm text-white/75">Écrivez-nous à tout moment</p>
            <p className="mt-4 text-sm font-bold text-white">{clinic.phoneMobile ?? clinic.whatsapp}</p>
            <Button
              asChild
              className="mt-5 w-full bg-white text-[#1A3B9C] hover:bg-[#EEF3FC]"
            >
              <Link href={whatsappHref} target="_blank" rel="noreferrer">
                Envoyer un message
              </Link>
            </Button>
          </motion.div>

          {/* Card — Adresse + Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[#D5E2F4] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)]"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A3B9C]">
              <MapPin className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#1A3B9C]">Nous trouver</h3>
            <div className="mt-3 space-y-2 text-sm text-[#5A6E8C]">
              <p className="font-semibold text-[#0D1B4B]">{clinic.locationInfo.address}</p>
              <p>{clinic.locationInfo.landmark}</p>
              <div className="flex items-center gap-2 pt-1">
                <Clock3 className="size-4 shrink-0 text-[#1A3B9C]" />
                <span>{clinic.openingHours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="size-4 shrink-0 text-[#CC1B1B]" />
                <span className="font-semibold text-[#CC1B1B]">{clinic.openingHours.sunday}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-[#1A3B9C]" />
                <Link href={`mailto:${clinic.email}`} className="hover:text-[#1A3B9C]">
                  {clinic.email}
                </Link>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-5 w-full border-[#1A3B9C]/30 text-[#1A3B9C] hover:bg-[#EEF3FC]"
            >
              <Link href="https://maps.google.com/?q=Keur+Massar+MTO+11+Dakar" target="_blank">
                Voir sur la carte
              </Link>
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
