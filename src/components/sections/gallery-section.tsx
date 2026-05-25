"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionBanner } from "@/components/ui/section-banner";

import facadeImg from "@/assets/images/gallery/facade.jpg";
import galerieBannerImg from "@/assets/images/banners/galerie-banner.jpg";
import entranceImg from "@/assets/images/gallery/entrance.jpg";
import receptionImg from "@/assets/images/gallery/reception.jpg";
import examRoomImg from "@/assets/images/gallery/exam-room.jpg";
import gynecologyImg from "@/assets/images/gallery/gynecology-room.jpg";
import doctorOfficeImg from "@/assets/images/gallery/doctor-office.jpg";
import medicalOfficeImg from "@/assets/images/gallery/medical-office.jpg";
import observationImg from "@/assets/images/gallery/observation-room.jpg";
import consultationImg from "@/assets/images/gallery/consultation-room.jpg";
import frontViewImg from "@/assets/images/gallery/front-view.jpg";

type Photo = {
  src: StaticImageData;
  alt: string;
  label: string;
  position?: string;
};

const photos: Photo[] = [
  { src: facadeImg,       alt: "Façade de la Clinique Maïmouna Touré",    label: "Notre clinique",         position: "50% 40%" },
  { src: receptionImg,    alt: "Accueil de la clinique",                   label: "Accueil",                position: "50% 35%" },
  { src: entranceImg,     alt: "Entrée de la clinique",                    label: "Entrée",                 position: "50% 30%" },
  { src: examRoomImg,     alt: "Salle d'examen médical",                   label: "Salle d'examen",         position: "50% 40%" },
  { src: gynecologyImg,   alt: "Salle de gynécologie",                     label: "Gynécologie",            position: "50% 45%" },
  { src: doctorOfficeImg, alt: "Bureau du médecin",                        label: "Bureau médical",         position: "50% 40%" },
  { src: medicalOfficeImg,alt: "Espace médical de consultation",           label: "Salle de consultation",  position: "50% 35%" },
  { src: observationImg,  alt: "Salle d'observation",                      label: "Salle d'observation",    position: "50% 40%" },
  { src: consultationImg, alt: "Cabinet de consultation",                  label: "Cabinet",                position: "50% 40%" },
  { src: frontViewImg,    alt: "Couloir Labo et Salle d'accouchement",     label: "Couloir intérieur",      position: "50% 40%" },
];

// Grid layout: first photo is large (col-span-2 row-span-2), second spans vertically
const gridClasses = [
  "col-span-2 row-span-2",  // 0 facade — grande vedette
  "col-span-1 row-span-2",  // 1 reception — haute
  "col-span-1 row-span-1",  // 2 entrance
  "col-span-1 row-span-1",  // 3 exam-room
  "col-span-1 row-span-1",  // 4 gynecology
  "col-span-1 row-span-1",  // 5 doctor-office
  "col-span-1 row-span-1",  // 6 medical-office
  "col-span-1 row-span-1",  // 7 observation
  "col-span-1 row-span-1",  // 8 consultation
  "col-span-1 row-span-1",  // 9 front-view
];

const photoVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

function Lightbox({
  photos,
  index,
  onClose,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  const photo = photos[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1B4B]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Fermer */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 z-10"
      >
        <X className="size-5" />
      </button>

      {/* Compteur */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80">
        {current + 1} / {photos.length}
      </div>

      {/* Navigation gauche */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 hover:scale-105"
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative mx-20 max-h-[85vh] max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-[0_32px_80px_-16px_rgba(0,0,0,0.6)]">
          <Image
            src={photo.src}
            alt={photo.alt}
            className="max-h-[80vh] w-full object-contain"
            style={{ objectPosition: photo.position }}
            priority
          />
          {/* Label bas */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1B4B]/80 to-transparent px-6 py-4">
            <p className="text-sm font-semibold text-white">{photo.label}</p>
            <p className="text-xs text-white/60">Clinique Ma&iuml;mouna Tour&eacute; &mdash; Keur Massar</p>
          </div>
        </div>

        {/* Miniatures */}
        <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={[
                "relative shrink-0 size-12 overflow-hidden rounded-lg border-2 transition-all duration-200",
                i === current ? "border-white scale-110" : "border-white/25 opacity-60 hover:opacity-90",
              ].join(" ")}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Navigation droite */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 hover:scale-105"
      >
        <ChevronRight className="size-6" />
      </button>
    </motion.div>
  );
}

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section id="galerie" className="bg-[#F4F7FB] pb-12 md:pb-16">
        <SectionBanner
          title="Notre Clinique en Images"
          subtitle="Découvrez nos espaces modernes et bien équipés"
          image={galerieBannerImg}
          imageAlt="Salle hospitalière moderne"
          imagePosition="50% 40%"
          breadcrumb="Galerie"
        />
        <Container className="pt-10 md:pt-12">

          {/* Grille magazine */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 grid-rows-[repeat(4,180px)] gap-3 md:grid-rows-[repeat(4,200px)] md:gap-4"
          >
            {photos.map((photo, i) => (
              <motion.button
                key={photo.alt}
                variants={photoVariants}
                onClick={() => setLightboxIndex(i)}
                className={[
                  "group relative overflow-hidden rounded-2xl bg-[#D5E2F4] text-left shadow-[0_4px_20px_-6px_rgba(26,59,156,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(26,59,156,0.22)]",
                  gridClasses[i],
                ].join(" ")}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04] [filter:contrast(1.04)_saturate(1.06)]"
                  style={{ objectPosition: photo.position }}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />

                {/* Gradient permanent subtil en bas */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D1B4B]/60 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white/90">
                    {photo.label}
                  </span>
                </div>

                {/* Icone zoom au hover */}
                <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/0 text-white/0 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <ZoomIn className="size-4" />
                </div>

                {/* Barre accent top au hover */}
                <div className="absolute inset-x-0 top-0 h-[3px] translate-y-[-3px] bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C] transition-transform duration-300 group-hover:translate-y-0" />
              </motion.button>
            ))}
          </motion.div>

          {/* Hint clic */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-center text-xs text-[#9BABC0]"
          >
            Cliquez sur une photo pour l&apos;agrandir
          </motion.p>

        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
