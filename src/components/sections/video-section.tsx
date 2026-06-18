"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { Container } from "@/components/layout/container";
import { fadeBlurUp, fadeUp, fadePop, lineExpand, scaleReveal, staggerHeader, vp } from "@/lib/motion";

const VIDEO_ID = "1B-RxKNElfU";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[#0D1B4B] py-16 md:py-20">

      {/* Fond texture subtile */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(#EEF3FC_1px,transparent_1px),linear-gradient(90deg,#EEF3FC_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,#1A3B9C/30%,transparent_70%)]" />

      <Container>

        {/* Header */}
        <motion.div
          variants={staggerHeader}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-10 text-center"
        >
          <motion.p
            variants={fadePop}
            className="text-xs font-bold uppercase tracking-[0.28em] text-[#CC1B1B]"
          >
            Inauguration officielle
          </motion.p>
          <motion.h2
            variants={fadeBlurUp}
            className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
          >
            Notre clinique en vidéo
          </motion.h2>
          <motion.div
            variants={lineExpand}
            style={{ originX: 0.5 }}
            className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#CC1B1B] to-[#CC1B1B]/40"
          />
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60"
          >
            Revivez l&apos;inauguration de la Clinique Maïmouna Touré à Keur Massar,
            en présence du Docteur Fall et de l&apos;équipe médicale.
          </motion.p>
        </motion.div>

        {/* Player */}
        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mx-auto max-w-3xl"
        >
          <div className="group relative overflow-hidden rounded-2xl shadow-[0_32px_80px_-16px_rgba(0,0,0,0.6)]">
            {/* Barre accent top */}
            <div className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C]" />

            {playing ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Inauguration Clinique Maïmouna Touré"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="relative block aspect-video w-full cursor-pointer overflow-hidden"
                aria-label="Lancer la vidéo d'inauguration"
              >
                {/* Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={THUMBNAIL}
                  alt="Inauguration Clinique Maïmouna Touré"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 [filter:contrast(1.05)_saturate(1.08)_brightness(0.75)]"
                />

                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/70 via-[#0D1B4B]/20 to-transparent" />

                {/* Bouton play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_16px_56px_-8px_rgba(204,27,27,0.5)] md:size-24">
                    <Play className="size-8 translate-x-0.5 fill-[#CC1B1B] text-[#CC1B1B] md:size-10" />
                  </div>
                </div>

                {/* Label bas */}
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <span className="inline-block rounded-full bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
                    Inauguration officielle — Clinique Maïmouna Touré
                  </span>
                </div>
              </button>
            )}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
