import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-10 md:h-10 shrink-0">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-10 md:h-10 shrink-0">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-10 md:h-10 shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-10 md:h-10 shrink-0">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

const serviceTags = [
  { icon: WrenchIcon, label: "설계 · 제조" },
  { icon: GearIcon, label: "설치 · 시공" },
  { icon: ShieldIcon, label: "유지보수" },
  { icon: HeadsetIcon, label: "기술지원" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/image/home/hero-ups.jpg"
          alt="유진전원시스템 UPS 제품"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_48%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/10 md:from-white md:via-white/70 md:via-35% md:to-transparent md:to-58%" />
      </div>

      <Container className="relative z-10 min-h-150 md:min-h-160">
        <div className="max-w-200 py-14 md:py-24">
          <p className="text-xs font-bold tracking-[0.25em] text-blue-dark/80 mb-4">POWERING YOUR BUSINESS SINCE 1996</p>
          <h1 className="text-3xl md:text-5xl font-bold text-ink leading-[1.2] tracking-tight mb-5">
            <span className="text-blue">대한민국 산업 현장을 지켜온 UPS</span>
            <br />
          </h1>
          <p className="text-base md:text-lg mb-5">대한민국의 핵심 인프라가 24시간 멈추지 않고 가동될 수 있도록 뒤에서 <br/>묵묵히 전력을 지탱합니다.
          </p>
          <p className="text-sm font-bold text-navy mb-7">1996년부터 UPS 한 분야에 집중해 온 30년 이상의 외길 노하우</p>

          <div className="mb-8 md:mb-14">
            <p className="text-navy font-bold text-2xl mb-1">1kVA 이상 소용량부터 200kVA 대용량까지</p>
            <p className="text-sm font-semibold">산업현장 · 금융기관 · 데이터센터 · 공공기관 · 기업 · 개인용 UPS</p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 mb-9">
            {serviceTags.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-blue">
                <Icon />
                <b className="text-sm font-semibold text-ink">{label}</b>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3  mt-10 md:mt-20">
            <Button href="/contact" variant="primary" className="bg-navy">UPS 견적 요청하기 →</Button>
            <Button href="/products" variant="outline" className="text-navy">제품 라인업 보기</Button>
          </div>
          <p className="text-xs text-muted mt-3 md:mt-5">필요한 용량을 모르셔도 상담 가능합니다.</p>
        </div>
      </Container>
    </section>
  );
}
