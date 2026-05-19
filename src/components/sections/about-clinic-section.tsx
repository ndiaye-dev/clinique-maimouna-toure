"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";

import { clinic } from "@/data/clinic";
import { Container } from "@/components/layout/container";

const iconMap = [Stethoscope, ShieldCheck, CheckCircle2] as const;

export function AboutClinicSection() {
  return (
    <section id="clinique" className="pb-16 pt-4 md:pb-20">
      <Container>
        <div className="overflow-hidden rounded-[30px] border border-border/70 bg-card shadow-[0_24px_70px_-48px_rgba(16,35,58,0.65)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:p-10"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Présentation Clinique
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {clinic.presentation.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {clinic.presentation.description}
              </p>
              <div className="rounded-2xl border border-border/70 bg-background p-4">
                <p className="text-sm font-medium text-foreground">{clinic.district}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Une prise en charge crédible, humaine et continue pour la famille.
                </p>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.08 }}
              className="grid gap-3"
            >
              {clinic.presentation.highlights.map((item, index) => {
                const Icon = iconMap[index] ?? CheckCircle2;

                return (
                  <motion.article
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="rounded-2xl border border-border/70 bg-background px-4 py-4 transition-colors hover:border-primary/30"
                  >
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
