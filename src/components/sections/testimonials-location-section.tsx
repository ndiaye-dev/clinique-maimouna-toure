"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cardReveal, fadeBlurUp, fadeUp, fadePop, lineExpand, staggerGrid, staggerHeader, vp } from "@/lib/motion";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;
const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;

export function TestimonialsLocationSection() {
  return (
    <section id="contact" className="bg-[#F4F7FB] py-16 md:py-20">
      <Container>

        {/* Header cascade */}
        <motion.div
          variants={staggerHeader}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-10 text-center"
        >
          <motion.p variants={fadePop} className="text-xs font-bold uppercase tracking-[0.24em] text-[#CC1B1B]">
            Nous contacter
          </motion.p>
          <motion.h2 variants={fadeBlurUp} className="mt-2 text-3xl font-extrabold text-[#1A3B9C] md:text-4xl">
            Prenez rendez-vous
          </motion.h2>
          <motion.div
            variants={lineExpand}
            style={{ originX: 0.5 }}
            className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#CC1B1B]"
          />
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5A6E8C]">
            Notre équipe est disponible 6j/7 pour vous accueillir et répondre à vos questions.
          </motion.p>
        </motion.div>

        {/* Cards stagger */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]"
        >
          {/* Card — Appeler */}
          <motion.div
            variants={cardReveal}
            className="rounded-2xl border border-[#D5E2F4] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(26,59,156,0.16)]"
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

          {/* Card — WhatsApp (featured) */}
          <motion.div
            variants={cardReveal}
            className="rounded-2xl border border-[#1A3B9C]/20 bg-[#1A3B9C] p-6 shadow-[0_8px_40px_-8px_rgba(26,59,156,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(26,59,156,0.55)]"
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

          {/* Card — Adresse */}
          <motion.div
            variants={cardReveal}
            className="rounded-2xl border border-[#D5E2F4] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(26,59,156,0.16)]"
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
              <Link href={clinic.locationInfo.mapsUrl} target="_blank" rel="noreferrer">
                Voir sur la carte
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}
