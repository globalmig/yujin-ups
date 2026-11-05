import Image from "next/image";
import Container from "@/components/Container";

function BoltCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

function PulseCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="7 12 10 12 11 9 13 15 14 12 17 12" />
    </svg>
  );
}

function ShieldCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5 9 9v2.5c0 2 1.3 3.3 3 3.8 1.7-.5 3-1.8 3-3.8V9l-3-1.5z" />
    </svg>
  );
}

const highlights = [
  { icon: BoltCircleIcon, label: "24시간\n무중단 전원공급" },
  { icon: PulseCircleIcon, label: "전력 품질\n안정화" },
  { icon: ShieldCircleIcon, label: "데이터\n&장비 보호" },
];

export default function ProductDetailHero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="/image/products/bg-hero.jpg"
          alt="유진전원시스템 UPS 설치 현장"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl py-16 md:py-24">
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-[1.3] tracking-tight mb-5">
            전원이 멈추는 순간,
            <br />
            <span className="text-white">비즈니스가 멈춥니다</span>
          </h1>
          <p className="text-sm md:text-base text-white/75 leading-relaxed mb-10">
            UPS는 단순한 장비가 아닙니다.
            <br />
            중단 없는 전력으로 고객의 비즈니스와
            <br />
            데이터, 생명을 지키는 핵심 인프라입니다.
          </p>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-white">
                <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Icon />
                </span>
                <span className="text-xs md:text-sm font-semibold leading-tight whitespace-pre-line">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
