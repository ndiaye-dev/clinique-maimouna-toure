"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

import clinicBuilding from "@/assets/images/clinic-building.png";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const exteriorImages = {
  "clinic-building.png": clinicBuilding,
} as const;

export function AboutClinicSection() {
  const exteriorImage =
    exteriorImages[
      clinic.clinicExteriorImage as keyof typeof exteriorImages
    ] ?? clinicBuilding;

  return (
    <section id="clinique" className="bg-[#f6fbfe] py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#dc1f3a]">
              À propos de nous
            </p>
            <h2 className="max-w-md text-3xl font-extrabold leading-tight text-[#063773] md:text-4xl">
              {clinic.presentation.title}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-[#4d6681] md:text-base">
              {clinic.presentation.description}
            </p>

            <ul className="space-y-2">
              {clinic.presentation.highlights.map((item) => (
                <li key={item.title} className="flex items-center gap-2 text-sm text-[#123e78]">
                  <Check className="size-4 text-[#064a9b]" />
                  {item.title}
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              className="h-10 border-[#064a9b]/35 bg-white text-[#064a9b] hover:bg-[#eaf6fd] hover:text-[#063773]"
            >
              <Link href="#contact">
                En savoir plus sur la clinique
                <ChevronRight />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-white shadow-[0_26px_70px_-42px_rgba(10,47,89,0.6)]"
          >
            <Image
              src={exteriorImage}
              alt="Façade moderne de la clinique"
              className="aspect-[16/8.1] w-full object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(8,47,97,0.18))]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
