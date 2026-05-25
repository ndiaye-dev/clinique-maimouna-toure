import Image from "next/image";
import Link from "next/link";

import { clinic } from "@/data/clinic";
import logoClinique from "@/assets/images/logo-clinique.png";
import logoNavbar from "@/assets/images/logo-navbar.png";
import { cn } from "@/lib/utils";

const logoMap = {
  "logo-clinique.png": logoClinique,
} as const;

type BrandMarkProps = {
  className?: string;
  showLocation?: boolean;
  compact?: boolean;
  dark?: boolean;
};

export function BrandMark({
  className,
  showLocation = true,
  compact = false,
  dark = false,
}: BrandMarkProps) {
  const logo =
    logoMap[clinic.brandLogoImage as keyof typeof logoMap] ?? logoClinique;

  // Navbar (compact) → logo rogné sans marges blanches pour un rendu plus grand et lisible
  const displayLogo = compact ? logoNavbar : logo;

  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <div className={cn(
        "relative shrink-0",
        dark && "rounded-xl bg-white px-3 py-1.5 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.25)]"
      )}>
        <Image
          src={displayLogo}
          alt={`Logo ${clinic.name}`}
          width={displayLogo.width}
          height={displayLogo.height}
          className="h-12 w-auto object-contain md:h-14"
          priority
        />
      </div>
      {!compact ? (
        <div className="min-w-0">
          <p className={cn(
            "truncate font-heading text-base font-semibold tracking-tight sm:text-lg",
            dark ? "text-white" : "text-foreground"
          )}>
            {clinic.name}
          </p>
          {showLocation ? (
            <p className={cn(
              "truncate text-xs",
              dark ? "text-white/60" : "text-muted-foreground"
            )}>{clinic.location}</p>
          ) : null}
        </div>
      ) : null}
    </Link>
  );
}
