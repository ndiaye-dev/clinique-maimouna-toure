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
  compact?: boolean;
};

export function BrandMark({
  className,
  showLocation = true,
  compact = false,
}: BrandMarkProps) {
  const logo =
    logoMap[clinic.brandLogoImage as keyof typeof logoMap] ?? logoClinique;

  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <div className="relative shrink-0 overflow-hidden rounded-xl shadow-[0_2px_12px_-3px_rgba(26,59,156,0.18)]">
        <Image
          src={logo}
          alt={`Logo ${clinic.name}`}
          width={logo.width}
          height={logo.height}
          className="h-10 w-auto object-contain md:h-11"
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
