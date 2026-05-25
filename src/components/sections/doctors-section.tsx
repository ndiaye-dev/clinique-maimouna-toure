"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Globe2, Stethoscope, UserCircle2 } from "lucide-react";

import { clinic } from "@/data/clinic";
import { Container } from "@/components/layout/container";
import medecinsBannerImg from "@/assets/images/gallery/doctor-office.jpg";
import { SectionBanner } from "@/components/ui/section-banner";
import { cardReveal, fadeBlurUp, fadeUp, fadePop, lineExpand, slideLeft, staggerHeader, vp } from "@/lib/motion";

export function DoctorsSection() {
  return (
    <section id="medecins" className="bg-[#F4F7FB] pb-12 md:pb-16">
      <SectionBanner
        title="Notre Équipe Médicale"
        subtitle="Des professionnels de santé qualifiés et dévoués à votre service"
        image={medecinsBannerImg}
        imageAlt="Bureau médical de la Clinique Maïmouna Touré"
        imagePosition="50% 25%"
        breadcrumb="Médecins"
      />
      <Container className="pt-10 md:pt-12">

        {/* Intro header */}
        <motion.div
          variants={staggerHeader}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mb-8 text-center"
        >
          <motion.p variants={fadePop} className="text-xs font-bold uppercase tracking-[0.22em] text-[#CC1B1B]">
            Notre &eacute;quipe
          </motion.p>
          <motion.h2 variants={fadeBlurUp} className="mt-2 text-2xl font-extrabold text-[#1A3B9C] md:text-3xl">
            Des m&eacute;decins &agrave; votre &eacute;coute
          </motion.h2>
          <motion.div
            variants={lineExpand}
            style={{ originX: 0.5 }}
            className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#CC1B1B]"
          />
        </motion.div>

        <div className="space-y-5">
          {clinic.doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={{ delay: index * 0.1 } as never}
              className="overflow-hidden rounded-2xl border border-[#D5E2F4] bg-white shadow-[0_4px_24px_-8px_rgba(26,59,156,0.10)] transition-all duration-300 hover:border-[#1A3B9C]/25 hover:shadow-[0_16px_48px_-12px_rgba(26,59,156,0.2)]"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-[#CC1B1B] via-[#2D52B8] to-[#1A3B9C]" />

              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8 md:p-8">

                <div className="flex shrink-0 flex-col items-center gap-3">
                  <div className="flex size-28 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A3B9C] ring-4 ring-[#D5E2F4] sm:size-32">
                    <UserCircle2 className="size-16 opacity-35" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF3FC] px-3 py-1 text-[0.65rem] font-bold text-[#1A3B9C]">
                    <BadgeCheck className="size-3 text-[#CC1B1B]" />
                    Agr&eacute;e MSAS
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-[#0D1B4B]">{doctor.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-[#CC1B1B]">{doctor.role}</p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-[#EEF3FC] text-[#1A3B9C]">
                      <Stethoscope className="size-3.5" />
                    </span>
                    <span className="text-sm font-semibold text-[#1A3B9C]">{doctor.speciality}</span>
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5A6E8C]">{doctor.bio}</p>

                  {doctor.languages && doctor.languages.length > 0 && (
                    <div className="mt-4 flex items-center gap-2">
                      <Globe2 className="size-3.5 shrink-0 text-[#1A3B9C]/60" />
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.languages.map((lang) => (
                          <span
                            key={lang}
                            className="rounded-full border border-[#D5E2F4] bg-[#F4F7FB] px-2.5 py-0.5 text-[0.65rem] font-medium text-[#5A6E8C]"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="rounded-2xl border border-dashed border-[#D5E2F4] bg-white px-6 py-5 text-center"
          >
            <p className="text-sm text-[#5A6E8C]">
              Notre &eacute;quipe comprend &eacute;galement des sages-femmes, infirmiers et sp&eacute;cialistes
              disponibles selon les consultations.{" "}
              <a href="#contact" className="font-semibold text-[#1A3B9C] hover:underline">
                Contactez-nous pour plus d&apos;informations.
              </a>
            </p>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
