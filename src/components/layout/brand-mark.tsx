import Image from "next/image";
import Link from "next/link";

import { clinic } from "@/data/clinic";
import logoClinique from "@/assets/images/logo-clinique.png";
import { cn } from "@/lib/utils";

const logoMap = {
  "logo-clinique.png": logoClinique,
} as const;

type BrandMarkProps = {
  className?: string;
  showLocation?: boolean;
};

export function BrandMark({ className, showLocation = true }: BrandMarkProps) {
  const logo =
    logoMap[clinic.brandLogoImage as keyof typeof logoMap] ?? logoClinique;

  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <div className="relative h-11 w-44 shrink-0 overflow-hidden rounded-lg bg-white/80 p-1 ring-1 ring-border/60">
        <Image
          src={logo}
          alt={`Logo ${clinic.name}`}
          fill
          className="object-contain object-left"
          sizes="176px"
          priority
        />
      </div>
      <div className="min-w-0">
        <p className="truncate font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {clinic.name}
        </p>
        {showLocation ? (
          <p className="truncate text-xs text-muted-foreground">{clinic.location}</p>
        ) : null}
      </div>
    </Link>
  );
}
