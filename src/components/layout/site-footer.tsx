import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { primaryNavigation } from "@/constants/navigation";
import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

export function SiteFooter() {
  return (
    <footer className="bg-[#0F2470] text-white">
      <Container className="grid items-start gap-10 py-14 md:grid-cols-[1.2fr_0.75fr_0.85fr_1fr]">
        <div className="space-y-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            La clinique
          </h3>
          <BrandMark compact className="w-fit [&_img]:h-10 [&_img]:md:h-11 [&_img]:brightness-0 [&_img]:invert [&_img]:opacity-90" />
          <p className="text-sm leading-relaxed text-white/75">
            Des soins d&apos;exception, proches de vous.<br />
            Clinique Maïmouna Touré — Keur Massar, Dakar.
          </p>
          <p className="text-[0.65rem] leading-relaxed text-white/45">
            {clinic.licenseBadge}
          </p>
          <div className="flex gap-2.5">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#1877F2]/60 hover:bg-[#1877F2]/15 hover:text-white"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#E1306C]/60 hover:bg-[#E1306C]/15 hover:text-white"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-white"
            >
              <MessageCircle className="size-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Liens rapides
          </h3>
          <ul className="mt-5 space-y-3">
            {primaryNavigation.slice(0, 6).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Nos services
          </h3>
          <ul className="mt-5 space-y-3">
            {clinic.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href="#services"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <Link
                href={phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-white/80" />
                {clinic.phone}
              </Link>
              {clinic.phoneMobile && (
                <Link
                  href={`tel:${clinic.phoneMobile.replaceAll(" ", "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-white/80" />
                  {clinic.phoneMobile}
                </Link>
              )}
              <Link
                href={`mailto:${clinic.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-white/80" />
                {clinic.email}
              </Link>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/80" />
                {clinic.locationInfo.address}
                <br />
                {clinic.locationInfo.landmark}
              </p>
              <p className="flex items-center gap-2.5">
                <Clock3 className="size-4 shrink-0 text-white/80" />
                {clinic.openingHours.weekdays}
              </p>
            </div>
          </div>

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CC1B1B] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_-4px_rgba(204,27,27,0.50)] transition-all hover:-translate-y-0.5 hover:bg-[#b01818] hover:shadow-[0_8px_24px_-4px_rgba(204,27,27,0.55)]"
          >
            <MessageCircle className="size-4" />
            Prendre rendez-vous
          </Link>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {clinic.name} — {clinic.abbreviation}. Tous droits réservés.
      </Container>
    </footer>
  );
}
