import { ArrowUpRight } from "lucide-react";

import { homepageSections } from "@/constants/navigation";
import { Container } from "@/components/layout/container";

export function HomeSections() {
  return (
    <section className="pb-20 pt-8 md:pb-24">
      <Container className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Base des sections prêtes pour les prochaines étapes
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Chaque bloc ci-dessous est déjà structuré avec son ancre SEO locale pour
            faciliter l’intégration progressive du contenu final.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {homepageSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="rounded-3xl border border-border/70 bg-card p-5 shadow-[0_10px_30px_-20px_rgba(16,35,58,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Section
                <ArrowUpRight className="size-3.5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
