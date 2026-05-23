"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react";

import { clinic } from "@/data/clinic";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function TestimonialsLocationSection() {
  const testimonial = clinic.testimonials[0];

  return (
    <section id="temoignages" className="bg-white py-16 md:py-20">
      <Container className="grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42 }}
          className="rounded-3xl border border-[#dce9f3] bg-white p-6 shadow-[0_18px_50px_-42px_rgba(10,47,89,0.5)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#dc1f3a]">
            Témoignages
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#063773]">
            Ils nous font confiance
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <Button variant="ghost" size="icon-sm" className="rounded-full bg-[#f1f7fb] text-[#064a9b] hover:bg-[#eaf6fd] hover:text-[#063773]">
              <ChevronLeft />
            </Button>

            <Avatar size="lg" className="size-16">
              <AvatarFallback className="bg-[#eaf6fd] text-lg font-bold text-[#1d4ea5]">
                FS
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <Quote className="mb-2 size-5 text-[#064a9b]" />
              <p className="text-sm leading-relaxed text-[#244d75]">
                “{testimonial.quote}”
              </p>
              <p className="mt-3 text-sm font-bold text-[#063773]">{testimonial.name}</p>
              <p className="text-xs text-[#5d7898]">{testimonial.role}</p>
            </div>

            <Button variant="ghost" size="icon-sm" className="rounded-full bg-[#f1f7fb] text-[#064a9b] hover:bg-[#eaf6fd] hover:text-[#063773]">
              <ChevronRight />
            </Button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            <span className="size-2 rounded-full bg-[#064a9b]" />
            <span className="size-2 rounded-full bg-[#d9e8f1]" />
            <span className="size-2 rounded-full bg-[#d9e8f1]" />
          </div>
        </motion.article>

        <motion.article
          id="contact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42, delay: 0.08 }}
          className="grid gap-5 rounded-3xl border border-[#dce9f3] bg-white p-6 shadow-[0_18px_50px_-42px_rgba(10,47,89,0.5)] sm:grid-cols-[1fr_0.95fr]"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#dc1f3a]">
              Nous trouver
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#063773]">
              {clinic.locationInfo.title}
            </h2>
            <div className="mt-5 flex gap-3 text-sm leading-relaxed text-[#4d6681]">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#064a9b]" />
              <p>
                {clinic.locationInfo.address}
                <br />
                {clinic.locationInfo.landmark}
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-5 h-10 border-[#064a9b]/35 bg-white text-[#064a9b] hover:bg-[#eaf6fd] hover:text-[#063773]"
            >
              <Link href="https://maps.google.com/?q=Keur%20Massar%20Dakar" target="_blank">
                Voir sur la carte
              </Link>
            </Button>
          </div>

          <div className="relative min-h-52 overflow-hidden rounded-2xl bg-[#eef4f8]">
            <div className="absolute inset-0 opacity-70 [background:linear-gradient(90deg,rgba(18,62,120,0.13)_1px,transparent_1px),linear-gradient(rgba(18,62,120,0.13)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute left-1/2 top-1/2 flex size-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#064a9b] text-white shadow-[0_14px_28px_-14px_rgba(6,74,155,0.9)]">
              <MapPin className="size-7" />
            </div>
            <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#123e78]">
              {clinic.locationInfo.mapLabel}
            </p>
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
