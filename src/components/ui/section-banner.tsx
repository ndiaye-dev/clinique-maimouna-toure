"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

type SectionBannerProps = {
  title: string;
  subtitle?: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: string;
  breadcrumb: string;
};

export function SectionBanner({
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition = "50% 50%",
  breadcrumb,
}: SectionBannerProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden md:h-[280px]">
      {/* Image pleine largeur */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover [filter:contrast(1.06)_saturate(1.04)_brightness(0.82)]"
        style={{ objectPosition: imagePosition }}
        priority
        sizes="100vw"
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B4B]/80 via-[#0D1B4B]/55 to-[#1A3B9C]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/40 via-transparent to-transparent" />

      {/* Barre accent en bas */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C]" />

      {/* Contenu centré */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">

        {/* Fil d'Ariane */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/60"
        >
          <Home className="size-3" />
          <span>Accueil</span>
          <ChevronRight className="size-3" />
          <span className="text-white/90">{breadcrumb}</span>
        </motion.div>

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.46, delay: 0.06 }}
          className="text-3xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-5xl"
        >
          {title}
        </motion.h2>

        {/* Sous-titre */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46, delay: 0.12 }}
            className="mt-2 max-w-xl text-sm leading-relaxed text-white/75"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Ligne décorative */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 flex items-center gap-2"
        >
          <span className="h-px w-10 rounded-full bg-[#CC1B1B]/70" />
          <span className="size-1.5 rounded-full bg-white/60" />
          <span className="h-px w-10 rounded-full bg-white/30" />
        </motion.div>
      </div>
    </div>
  );
}
