import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { primaryNavigation } from "@/constants/navigation";
import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

export function SiteFooter() {
  return (
    <footer className="bg-[#052a58] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.15fr_0.8fr_0.85fr_1fr]">
        <div className="space-y-5">
          <BrandMark showLocation={false} className="w-fit [&_img]:h-11" />
          <p className="max-w-xs text-sm leading-relaxed text-white/78">
            Des soins d&apos;exception, proches de vous.
          </p>
          <div className="flex gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex size-8 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white/80 hover:bg-white/10"
            >
              f
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex size-8 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white/80 hover:bg-white/10"
            >
              ig
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-white/10"
            >
              <MessageCircle className="size-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Liens rapides
          </h3>
          <ul className="mt-5 space-y-2.5">
            {primaryNavigation.slice(0, 6).map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/72 hover:text-white">
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
          <ul className="mt-5 space-y-2.5">
            {clinic.services.map((service) => (
              <li key={service.slug}>
                <Link href="#services" className="text-sm text-white/72 hover:text-white">
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
            <div className="mt-5 space-y-3 text-sm text-white/74">
              <Link href={phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4 text-white/85" />
                {clinic.phone}
              </Link>
              <Link href={`mailto:${clinic.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4 text-white/85" />
                {clinic.email}
              </Link>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-white/85" />
                {clinic.locationInfo.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="size-4 text-white/85" />
                {clinic.openingHours.weekdays}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Restez informé
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/72">
              Recevez nos actualités et conseils santé.
            </p>
            <div className="mt-4 grid gap-2">
              <Input
                type="email"
                placeholder="Votre e-mail"
                className="h-10 border-white/15 bg-white text-[#082f61] placeholder:text-[#7b91a8]"
              />
              <Button className="h-10 bg-[#0b5db8] text-white hover:bg-[#064a9b]">
                S&apos;abonner
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/12 py-5 text-center text-xs text-white/62">
        © {new Date().getFullYear()} {clinic.name}. Tous droits réservés.
      </Container>
    </footer>
  );
}
