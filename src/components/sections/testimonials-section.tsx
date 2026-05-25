"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { cardReveal, fadeBlurUp, fadeUp, fadePop, lineExpand, staggerGrid, staggerHeader, vp } from "@/lib/motion";

const testimonials = [
  {
    name: "Aissatou D.",
    location: "Keur Massar",
    rating: 5,
    text: "J'ai accouché à la Clinique Maïmouna Touré et l'équipe a été exceptionnelle. Les sages-femmes sont très professionnelles et rassurantes. Je recommande vivement à toutes les futures mamans.",
    service: "Maternit\xe9 & Accouchement",
  },
  {
    name: "Mamadou S.",
    location: "Keur Massar",
    rating: 5,
    text: "Excellent accueil, médecins compétents et disponibles. J'ai fait une échographie et les résultats m'ont été expliqués clairement. Une clinique de confiance dans notre quartier.",
    service: "\xc9chographie",
  },
  {
    name: "Fatou N.",
    location: "Pikine",
    rating: 5,
    text: "Je suis suivie en gynécologie depuis un an. Le Dr. Fall est très attentionné et prend le temps d'écouter. Le cadre est propre, moderne et rassurant. Je ne changerai pas de clinique.",
    service: "Gyn\xe9cologie",
  },
  {
    name: "Ibrahima K.",
    location: "Yeumbeul",
    rating: 5,
    text: "Mon fils a été suivi en pédiatrie depuis sa naissance. L'équipe est toujours disponible, même le week-end. C'est rassurant d'avoir une clinique aussi sérieuse aussi près de chez nous.",
    service: "P\xe9diatrie",
  },
  {
    name: "Rokhaya T.",
    location: "Keur Massar",
    rating: 5,
    text: "Prise en charge rapide pour une urgence de nuit. L'infirmier était calme et efficace. Merci à toute l'équipe pour leur dévouement. Vraiment une grande clinique pour notre communauté.",
    service: "Urgences",
  },
  {
    name: "Cheikh M.",
    location: "Keur Massar",
    rating: 5,
    text: "Les analyses biologiques sont faites rapidement et les résultats arrivent dans la journée. Tarifs raisonnables et personnel très sympathique. Je conseille cette clinique à toute ma famille.",
    service: "Analyses biologiques",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "size-3.5",
            i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "fill-[#E5E7EB] text-[#E5E7EB]",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-white py-12 md:py-16">
      <Container>

        {/* Header cascade */}
        <motion.div
          variants={staggerHeader}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-10 text-center"
        >
          <motion.p variants={fadePop} className="text-xs font-bold uppercase tracking-[0.22em] text-[#CC1B1B]">
            T&eacute;moignages
          </motion.p>
          <motion.h2 variants={fadeBlurUp} className="mt-2 text-3xl font-extrabold text-[#1A3B9C] md:text-4xl">
            Ce que disent nos patients
          </motion.h2>
          <motion.div
            variants={lineExpand}
            style={{ originX: 0.5 }}
            className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#CC1B1B]"
          />
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5A6E8C]">
            La confiance de nos patients est notre plus grande fiert&eacute;.
            Voici ce qu&apos;ils disent de leur exp&eacute;rience &agrave; la Clinique Ma&iuml;mouna Tour&eacute;.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardReveal}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#D5E2F4] bg-white shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-10px_rgba(26,59,156,0.18)]"
            >
              <div className="h-[3px] bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C]" />

              <div className="flex flex-1 flex-col gap-4 p-6">
                <Quote className="size-7 text-[#1A3B9C]/15" />
                <p className="flex-1 text-sm leading-[1.75] text-[#4A5E7A]">{t.text}</p>
                <span className="inline-flex w-fit rounded-full bg-[#EEF3FC] px-3 py-1 text-[0.62rem] font-semibold text-[#1A3B9C]">
                  {t.service}
                </span>
                <div className="h-px bg-[#EEF2FA]" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#1A3B9C] text-sm font-black text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0D1B4B]">{t.name}</p>
                      <p className="text-[0.65rem] text-[#7A8CA8]">{t.location}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mt-8 text-center text-xs text-[#9BABC0]"
        >
          * T&eacute;moignages repr&eacute;sentatifs de retours re&ccedil;us &agrave; la clinique.
          Vos avis nous aident &agrave; am&eacute;liorer continuellement nos soins.
        </motion.p>

      </Container>
    </section>
  );
}
