"use client";

import Link from "next/link";
import { Menu, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { primaryNavigation } from "@/constants/navigation";
import { BrandMark } from "@/components/layout/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";

const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

function NavbarLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={className} aria-label="Navigation principale">
      {primaryNavigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`relative text-sm font-semibold transition-colors hover:text-[#1A3B9C] ${
            item.href === "#accueil"
              ? "text-[#1A3B9C] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#CC1B1B]"
              : "text-[#5A6E8C]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D5E2F4]/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-4">
        <BrandMark compact />

        <NavbarLinks className="hidden items-center gap-7 lg:flex" />

        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href={phoneHref}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#1A3B9C]/25 bg-white px-4 text-xs font-semibold text-[#1A3B9C] shadow-sm transition-all hover:border-[#1A3B9C]/50 hover:bg-[#EEF3FC] hover:shadow-md"
          >
            <Phone className="size-3.5" />
            Appeler
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-[#1A3B9C] px-5 text-xs font-semibold text-white shadow-[0_4px_14px_-4px_rgba(26,59,156,0.50)] transition-all hover:-translate-y-0.5 hover:bg-[#0F2470] hover:shadow-[0_6px_20px_-4px_rgba(26,59,156,0.55)]"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button asChild variant="outline" size="icon-sm">
            <Link href={phoneHref} aria-label="Appeler la clinique">
              <Phone />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon-sm" aria-label="Ouvrir le menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
              <SheetHeader className="border-b border-[#D5E2F4]">
                <SheetTitle className="sr-only">{clinic.name}</SheetTitle>
                <SheetDescription className="sr-only">{clinic.location}</SheetDescription>
                <BrandMark showLocation={false} />
              </SheetHeader>

              <div className="flex flex-col gap-6 p-5">
                <NavbarLinks className="flex flex-col gap-4" />
                <div className="grid gap-2">
                  <Button
                    asChild
                    className="bg-[#1A3B9C] text-white hover:bg-[#0F2470]"
                  >
                    <Link href={whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle />
                      Contacter sur WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={phoneHref}>
                      <Phone />
                      Appeler la clinique
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
