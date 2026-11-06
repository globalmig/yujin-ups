import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/10 md:from-white md:via-white/85 md:to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl py-14 md:py-24">
          <p className="text-xs font-bold tracking-[0.25em] text-blue-dark/80 mb-4">POWERING YOUR BUSINESS SINCE 1996</p>
          <h1 className="text-3xl md:text-5xl font-bold text-ink leading-[1.2] tracking-tight mb-5">
            <span className="text-blue">30년 이상,</span>
            <br />
            UPS 하나만 만들어 왔습니다.
          </h1>
          <p className="text-base md:text-lg text-muted mb-7">1996년부터 축적해 온 UPS 제조기술과 현장 경험</p>

          <div className="mb-8">
            <p className="text-blue font-bold text-lg mb-1">1KVA부터 200KVA까지</p>
            <p className="text-sm text-muted">산업현장 · 금융기관 · 데이터센터 · 공공기관 · 기업 · 개인용 UPS</p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 mb-9">
            {serviceTags.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-blue">
                <Icon />
                <b className="text-sm font-semibold text-ink">{label}</b>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              UPS 견적 요청하기
            </Button>
            <Button href="#solutions" variant="outline">
              제품 자세히 보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
