"use client";

import Link from "next/link";
import { Menu, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";
import { primaryNavigation } from "@/constants/navigation";
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
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="truncate font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {clinic.name}
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {clinic.location}
          </span>
        </Link>

        <NavbarLinks className="hidden items-center gap-6 lg:flex" />

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link href={phoneHref}>
              <Phone />
              Appeler
            </Link>
          </Button>
          <Button asChild size="sm" className="shadow-sm">
            <Link href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle />
              WhatsApp
            </Link>
          </Button>
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
              <SheetHeader className="border-b border-border/80">
                <SheetTitle>{clinic.name}</SheetTitle>
                <SheetDescription>{clinic.location}</SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-6 p-5">
                <NavbarLinks className="flex flex-col gap-4" />
                <div className="grid gap-2">
                  <Button asChild>
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
