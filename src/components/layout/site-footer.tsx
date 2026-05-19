import Link from "next/link";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { footerLinkGroups } from "@/constants/navigation";
import { Container } from "@/components/layout/container";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/70">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            {clinic.name}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {clinic.tagline}
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {clinic.location}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="size-4 text-primary" />
              {clinic.openingHours.weekdays} · {clinic.openingHours.sunday}
            </p>
          </div>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/90">
              {group.title}
            </h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col items-start justify-between gap-3 border-t border-border/60 py-5 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {clinic.name}. Tous droits réservés.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={phoneHref} className="inline-flex items-center gap-2 hover:text-foreground">
            <Phone className="size-4 text-primary" />
            {clinic.phone}
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <MessageCircle className="size-4 text-primary" />
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}
