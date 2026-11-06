import Image from "next/image";
import Container from "@/components/layout/Container";
import { productContentMap } from "@/data/products/product-content";

function ClockIcon() {
  return (
    <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 20 9 4 6 12 2 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const icons = { clock: ClockIcon, activity: ActivityIcon, shield: ShieldIcon } as const;

export default function ProductDetailHero({ categoryId }: { categoryId: string }) {
  const { eyebrow, title, description, highlights } = productContentMap[categoryId].hero;
  const iconKeys: (keyof typeof icons)[] = ["clock", "activity", "shield"];

  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div className="absolute inset-0">
        <Image
          src="/image/products/bg-hero.jpg"
          alt="유진전원시스템 UPS 설치 현장"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-dark via-navy/95 to-navy/10 md:from-navy-dark md:via-navy/85 md:to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl md:max-w-4xl pt-16 pb-10 md:pt-24 md:pb-16">
          <p className="text-sm font-bold text-blue-light mb-3">{eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-4">{title}</h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-6 pb-16 md:pb-24">
          {highlights.map(({ value, label }, i) => {
            const Icon = icons[iconKeys[i]];
            return (
              <div key={label} className="flex items-center gap-4">
                <span className="text-white shrink-0">
                  <Icon />
                </span>
                <p className="flex flex-col leading-tight">
                  <b className="text-xl font-bold text-white">{value}</b>
                  <span className="text-xs text-white/60">{label}</span>
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
