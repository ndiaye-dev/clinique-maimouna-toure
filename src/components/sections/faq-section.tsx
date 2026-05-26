"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { clinic } from "@/data/clinic";
import { cardReveal, fadeBlurUp, fadeUp, fadePop, lineExpand, riseUp, staggerGrid, staggerHeader, vp } from "@/lib/motion";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

const faqs = [
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      "La clinique est ouverte du lundi au samedi de 8h 00 à 20h 00. Le dimanche et les jours fériés, nous assurons une permanence médicale pour les urgences.",
  },
  {
    question: "Faut-il prendre rendez-vous avant de venir ?",
    answer:
      "Vous pouvez nous appeler ou nous envoyer un message WhatsApp pour réserver votre consultation. Les urgences sont prises en charge immédiatement sans rendez-vous.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements en espèces. Veuillez nous contacter pour toute question concernant les mutuelles de santé ou les prises en charge.",
  },
  {
    question: "Proposez-vous des consultations pour les enfants ?",
    answer:
      "Oui, nous disposons d'un service de pédiatrie dédié aux nourrissons et aux enfants. Notre équipe assure le suivi de croissance, les vaccinations et la prise en charge des maladies infantiles.",
  },
  {
    question: "La clinique dispose-t-elle d'un service de maternité ?",
    answer:
      "Oui, nous proposons un suivi complet de grossesse, des consultations prénatales, et des accouchements assistés par des sages-femmes qualifiées dans un cadre sécurisé.",
  },
  {
    question: "Comment obtenir les résultats de mes analyses ?",
    answer:
      "Les résultats de la plupart des analyses biologiques sont disponibles dans la journée. Notre personnel vous contacte dès qu'ils sont prêts, ou vous pouvez les récupérer directement à la clinique.",
  },
  {
    question: "Êtes-vous agréé par le Ministère de la Santé ?",
    answer:
      "Oui, la Clinique Maïmouna Touré est officiellement agréée par le Ministère de la Santé et de l'Action Sociale du Sénégal (MSAS), Autorisation N° 023637.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={riseUp}
      className="overflow-hidden rounded-2xl border border-[#D5E2F4] bg-white shadow-[0_2px_12px_-4px_rgba(26,59,156,0.07)] transition-shadow duration-300 hover:shadow-[0_8px_28px_-6px_rgba(26,59,156,0.14)]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-[#0D1B4B]">{faq.question}</span>
        <span
          className={[
            "flex shrink-0 size-7 items-center justify-center rounded-full transition-all duration-300",
            open
              ? "bg-[#1A3B9C] text-white rotate-180"
              : "bg-[#EEF3FC] text-[#1A3B9C] rotate-0",
          ].join(" ")}
        >
          <ChevronDown className="size-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="border-t border-[#EEF2FA] px-6 py-4">
              <p className="text-sm leading-[1.75] text-[#5A6E8C]">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-12 md:py-16">
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
            Questions fr&eacute;quentes
          </motion.p>
          <motion.h2 variants={fadeBlurUp} className="mt-2 text-3xl font-extrabold text-[#1A3B9C] md:text-4xl">
            Vous avez des questions&nbsp;?
          </motion.h2>
          <motion.div
            variants={lineExpand}
            style={{ originX: 0.5 }}
            className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#CC1B1B]"
          />
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5A6E8C]">
            Retrouvez les r&eacute;ponses aux questions les plus pos&eacute;es par nos patients.
          </motion.p>
        </motion.div>

        {/* FAQ items stagger */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mt-10 rounded-2xl border border-dashed border-[#D5E2F4] bg-white px-6 py-6 text-center"
        >
          <p className="text-sm text-[#5A6E8C]">
            Vous ne trouvez pas la r&eacute;ponse &agrave; votre question&nbsp;?
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#1A3B9C] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0F2470] hover:shadow-[0_8px_24px_-8px_rgba(26,59,156,0.45)]"
          >
            <MessageCircle className="size-4" />
            Contactez-nous sur WhatsApp
          </a>
        </motion.div>

      </Container>
    </section>
  );
}
