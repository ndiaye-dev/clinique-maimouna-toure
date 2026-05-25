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
};

export function BrandMark({
  className,
  showLocation = true,
  compact = false,
}: BrandMarkProps) {
  const logo =
    logoMap[clinic.brandLogoImage as keyof typeof logoMap] ?? logoClinique;

  // Navbar (compact) → logo rogné sans marges blanches pour un rendu plus grand et lisible
  const displayLogo = compact ? logoNavbar : logo;

  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <div className="relative shrink-0">
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
          <p className="truncate font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {clinic.name}
          </p>
          {showLocation ? (
            <p className="truncate text-xs text-muted-foreground">{clinic.location}</p>
          ) : null}
        </div>
      ) : null}
    </Link>
  );
}
