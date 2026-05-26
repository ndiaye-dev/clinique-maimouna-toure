"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, HeartHandshake, Lock, MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";

import clinicBuilding from "@/assets/images/clinic-building.png";
import clinicFacade from "@/assets/images/clinique-maimouna-toure-facade.png";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import {
  fadeBlurUp, fadeUp, fadePop, cardReveal, imageReveal,
  slideLeft, slideRight, staggerGrid, staggerHeader, lineExpand, vp,
} from "@/lib/motion";

const exteriorImages = {
  "clinic-building.png": clinicBuilding,
  "clinique-maimouna-toure-facade.png": clinicFacade,
} as const;

const highlightIcons = [HeartHandshake, ShieldCheck, Stethoscope, Lock];

export function AboutClinicSection() {
  const exteriorImage =
    exteriorImages[
      clinic.clinicExteriorImage as keyof typeof exteriorImages
    ] ?? clinicBuilding;

  return (
    <section id="clinique" className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left — image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[#EEF3FC]" />

            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-[#D5E2F4] bg-white p-3 shadow-[0_24px_60px_-20px_rgba(26,59,156,0.18)] sm:min-h-[400px] md:min-h-[460px]">
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                className="h-full w-full"
              >
                <Image
                  src={exteriorImage}
                  alt="Facade de la Clinique Maimouna Toure"
                  className="h-full w-full object-contain object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </motion.div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 rounded-xl border border-[#D5E2F4] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm">
                <BadgeCheck className="size-5 shrink-0 text-[#1A3B9C]" />
                <p className="text-[0.6rem] font-semibold leading-tight text-[#5A6E8C]">
                  {clinic.licenseBadge}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="order-1 space-y-6 lg:order-2">

            {/* Header cascade */}
            <motion.div
              variants={staggerHeader}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <motion.p
                variants={fadePop}
                className="text-xs font-bold uppercase tracking-[0.24em] text-[#CC1B1B]"
              >
                &Agrave; propos de nous
              </motion.p>
              <motion.h2
                variants={fadeBlurUp}
                className="mt-3 text-3xl font-extrabold leading-tight text-[#1A3B9C] md:text-4xl"
              >
                {clinic.presentation.title}
              </motion.h2>
              <motion.div
                variants={lineExpand}
                style={{ originX: 0 }}
                className="mt-3 h-0.5 w-12 rounded-full bg-[#CC1B1B]"
              />
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-sm leading-relaxed text-[#5A6E8C] md:text-base"
              >
                {clinic.presentation.description}
              </motion.p>
            </motion.div>

            {/* Highlight cards stagger */}
            <motion.ul
              variants={staggerGrid}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="grid gap-3 sm:grid-cols-2"
            >
              {clinic.presentation.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? BadgeCheck;
                return (
                  <motion.li
                    key={item.title}
                    variants={cardReveal}
                    className="rounded-xl border border-[#D5E2F4] bg-[#F4F7FB] p-4 transition-colors hover:border-[#1A3B9C]/25 hover:bg-[#EEF3FC]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EEF3FC] text-[#1A3B9C] shadow-sm ring-1 ring-[#D5E2F4]">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#1A3B9C]">{item.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#5A6E8C]">{item.description}</p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <Button
                asChild
                className="h-12 gap-2 rounded-full bg-[#1A3B9C] px-8 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(26,59,156,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#0F2470] hover:shadow-[0_12px_36px_-8px_rgba(26,59,156,0.55)]"
              >
                <Link href="#contact">
                  <MessageCircle className="size-4" />
                  Prendre rendez-vous
                </Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
