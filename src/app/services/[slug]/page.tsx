import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Baby,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FlaskConical,
  HandHeart,
  HeartPulse,
  MessageCircle,
  Phone,
  ScanHeart,
  Stethoscope,
  Users,
  Venus,
} from "lucide-react";

import { clinic } from "@/data/clinic";
import type { ServiceIconName, ServiceImageName } from "@/types/clinic";
import { SectionBanner } from "@/components/ui/section-banner";
import { Container } from "@/components/layout/container";

import clinicBuildingImage from "@/assets/images/clinic-building.png";
import heroFamilyImage from "@/assets/images/clinic-hero-family.png";
import birthImage from "@/assets/images/services/accouchement.jpg";
import labTestsImage from "@/assets/images/services/analyses-biologiques.jpg";
import diabetesImage from "@/assets/images/services/diabetologie.jpg";
import ultrasoundImage from "@/assets/images/services/echographie.jpg";
import gynecologyImage from "@/assets/images/services/gynecologie.jpg";
import generalMedicineImage from "@/assets/images/services/medecine-generale.jpg";
import pediatricsImage from "@/assets/images/services/pediatrie.jpg";
import surgicalRoomImage from "@/assets/images/gallery/exam-room.jpg";

const iconMap: Record<ServiceIconName, ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  venus: Venus,
  baby: Baby,
  scan: ScanHeart,
  heartPulse: HeartPulse,
  users: Users,
  activity: Activity,
  flask: FlaskConical,
  syringe: HandHeart,
};

const imageMap: Record<ServiceImageName, typeof heroFamilyImage> = {
  familyCare: heroFamilyImage,
  clinicExterior: clinicBuildingImage,
  generalMedicine: generalMedicineImage,
  gynecology: gynecologyImage,
  pediatrics: pediatricsImage,
  ultrasound: ultrasoundImage,
  birth: birthImage,
  diabetes: diabetesImage,
  labTests: labTestsImage,
  surgicalRoom: surgicalRoomImage,
};

const allServices = [...clinic.services, ...clinic.additionalServices];

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — ${clinic.name}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const serviceImage = imageMap[service.image];
  const phoneHref = `tel:${clinic.phone.replaceAll(" ", "")}`;
  const whatsappHref = `https://wa.me/${clinic.whatsapp}`;
  const otherServices = clinic.services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main>
      <SectionBanner
        title={service.title}
        subtitle={service.description}
        image={serviceImage}
        imageAlt={service.imageAlt}
        imagePosition={service.imagePosition}
        breadcrumb={service.title}
      />

      <div className="bg-white">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">

            {/* ── Contenu principal ── */}
            <div className="space-y-8">

              {/* Retour */}
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A3B9C] transition hover:opacity-70"
              >
                <ArrowLeft className="size-4" />
                Retour aux services
              </Link>

              {/* Titre + icône */}
              <div className="flex items-start gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#1A3B9C]">
                  <Icon className="size-7" />
                </span>
                <div>
                  <h1 className="text-2xl font-black leading-tight text-[#0D1B4B] md:text-3xl">
                    {service.title}
                  </h1>
                  <div className="mt-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#CC1B1B] to-[#CC1B1B]/40" />
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.97rem] leading-[1.8] text-[#5A6E8C]">
                {service.description}
              </p>

              {/* Ce que nous offrons */}
              {service.details && service.details.length > 0 && (
                <div className="rounded-2xl border border-[#D5E2F4] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(26,59,156,0.08)]">
                  <h2 className="mb-5 text-lg font-black text-[#1A3B9C]">Ce que nous offrons</h2>
                  <ul className="space-y-3.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#CC1B1B]" />
                        <span className="text-sm leading-relaxed text-[#5A6E8C]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Image secondaire */}
              <div className="overflow-hidden rounded-2xl border border-[#D5E2F4]">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src={serviceImage}
                    alt={service.imageAlt}
                    fill
                    className="object-cover [filter:contrast(1.04)_saturate(1.05)]"
                    style={{ objectPosition: service.imagePosition ?? "50% 50%" }}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">

              {/* Card RDV */}
              <div className="rounded-2xl bg-[#1A3B9C] p-6 text-white shadow-[0_8px_40px_-12px_rgba(26,59,156,0.4)]">
                <h3 className="text-lg font-black">Prendre rendez-vous</h3>
                <p className="mt-1 text-sm text-white/70">
                  Pour votre consultation en {service.title.toLowerCase()}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1A3B9C] transition hover:bg-[#EEF3FC]"
                  >
                    <MessageCircle className="size-4" />
                    Contacter sur WhatsApp
                  </a>
                  <a
                    href={phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="size-4" />
                    {clinic.phone}
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="rounded-2xl border border-[#D5E2F4] bg-white p-5">
                <p className="flex items-center gap-2 text-sm font-black text-[#0D1B4B]">
                  <Clock3 className="size-4 text-[#1A3B9C]" />
                  Horaires d&apos;ouverture
                </p>
                <p className="mt-3 text-sm text-[#5A6E8C]">{clinic.openingHours.weekdays}</p>
                <p className="mt-1 text-sm font-bold text-[#CC1B1B]">{clinic.openingHours.sunday}</p>
              </div>

              {/* Agrément */}
              <div className="flex items-start gap-2.5 rounded-2xl border border-[#D5E2F4] bg-white p-4">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#1A3B9C]" />
                <p className="text-xs leading-snug text-[#5A6E8C]">{clinic.licenseBadge}</p>
              </div>
            </div>
          </div>

          {/* ── Autres services ── */}
          {otherServices.length > 0 && (
            <div className="mt-14 border-t border-[#EEF2FA] pt-10">
              <h2 className="mb-6 text-xl font-black text-[#1A3B9C]">Nos autres services</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {otherServices.map((s) => {
                  const OtherIcon = iconMap[s.icon];
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-3 rounded-2xl border border-[#D5E2F4] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1A3B9C]/30 hover:shadow-[0_8px_28px_-6px_rgba(26,59,156,0.14)]"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FC] text-[#1A3B9C] transition-colors group-hover:bg-[#1A3B9C] group-hover:text-white">
                        <OtherIcon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-[#0D1B4B]">{s.title}</p>
                        <p className="mt-0.5 line-clamp-2 text-xs text-[#7A8CA8]">{s.description}</p>
                      </div>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#1A3B9C]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#1A3B9C]" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </div>
    </main>
  );
}
