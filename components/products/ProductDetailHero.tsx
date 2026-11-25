import Image from "next/image";
import Link from "next/link";
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
  const { eyebrow, title, description, highlights, ioType, capacityRange, heroImage, catalogHref } =
    productContentMap[categoryId].hero;
  const iconKeys: (keyof typeof icons)[] = ["clock", "activity", "shield"];

  if (!heroImage) {
    return (
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/image/products/bg-hero.jpg"
            alt="유진전원시스템 UPS 설치 현장"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/95 to-navy/10 md:from-navy md:via-navy/85 md:to-transparent" />
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

  return (
    <section className="relative overflow-hidden bg-navy">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="max-w-xl">
            <p className="text-sm font-bold text-blue-light mb-3">{eyebrow}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-4">{title}</h1>

            {(ioType || capacityRange) && (
              <div className="flex flex-wrap gap-2 mb-5">
                {ioType && (
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
                    {ioType}
                  </span>
                )}
                {capacityRange && (
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
                    용량 {capacityRange}
                  </span>
                )}
              </div>
            )}

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">{description}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href={`/contact?model=${encodeURIComponent(title)}`}
                className="inline-flex items-center justify-center gap-1.5 bg-white text-navy px-6 py-3 rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
              >
                이 모델로 견적 문의
                <span aria-hidden="true">›</span>
              </Link>
              <Link
                href="#specs"
                className="inline-flex items-center justify-center gap-1.5 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors"
              >
                제원표 보기
              </Link>
              {catalogHref && (
                <Link
                  href={catalogHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  카탈로그 PDF
                </Link>
              )}
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-6">
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
          </div>

          <div className="relative w-full aspect-4/3 lg:aspect-square">
            <Image
              src={heroImage}
              alt={`${title} 제품 사진`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8 md:p-12"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
