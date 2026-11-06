import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StrengthContactSection from "@/components/common/StrengthContactSection";
import ContactCtaBar from "@/components/products/ContactCtaBar";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { projects, projectFields } from "@/lib/projects";

export const metadata: Metadata = {
  title: "제품소개",
  description: "1KVA부터 200KVA까지, 유진전원시스템의 UPS·AVR·주파수 변환기·배터리 제품 라인업을 소개합니다.",
  alternates: { canonical: "https://upscom.co.kr/products" },
  openGraph: {
    title: "제품소개 | 유진전원시스템",
    description: "30년 기술력으로 완성한 유진전원시스템의 전원장치 제품 라인업",
    url: "https://upscom.co.kr/products",
  },
};

const fieldIcons = {
  금융기관: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M9 10v9M15 10v9M19 10v9" />
      <path d="M3 19h18" />
    </svg>
  ),
  공공기관: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 21h16" />
    </svg>
  ),
  산업현장: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 21V12l5 3V9l5 3V6l5 3v12z" />
      <path d="M3 21h18" />
    </svg>
  ),
  데이터센터: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="3" width="16" height="7" rx="1" />
      <rect x="4" y="14" width="16" height="7" rx="1" />
      <circle cx="7.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
} as const;

const productLineup = [
  {
    range: "단상 UPS",
    title: "SPT 시리즈 · 1~30KVA",
    image: "/image/products/spt-301k.png",
    features: ["가정, 소규모 사무실, PC, 통신장비", "온라인 방식 (On-Line)", "정현파 출력, 고효율 설계", "LCD 디스플레이"],
    href: "/products/single-ups",
  },
  {
    range: "삼상 / 단상 UPS",
    title: "모듈형 UPS · 20~600KVA",
    image: "/image/products/spt-3000.png",
    features: ["중소형 전산실, 공장 설비", "온라인 이중변환 방식", "병렬 운전 지원", "다양한 통신 옵션"],
    href: "/products/three-single-ups",
  },
  {
    range: "삼상 / 삼상 UPS",
    title: "3상 온라인 UPS · 10~600KVA",
    image: "/image/products/spt-3300.png",
    features: ["산업현장, 데이터센터, 병원", "고효율 온라인 방식", "병렬 확장으로 용량 증설 가능", "SNMP, MODBUS 지원"],
    href: "/products/three-three-ups",
  },
  {
    range: "PC서버용 UPS",
    title: "HP-900C 시리즈 · 5~10KVA",
    image: "/image/products/hp-900c.png",
    features: ["서버, 네트워크 장비, 의료장비", "온라인 이중변환 방식", "높은 입력 역률 및 효율", "확장 배터리 지원"],
    href: "/products/server-ups",
  },
  {
    range: "자동 전압 조정기 (AVR)",
    title: "AVR 시리즈",
    image: "/image/products/avr.png",
    features: ["전압 변동 보정, 안정적 전원 공급", "정밀 기기, 설비 보호", "국산/수입 설비 호환", "유지보수 간편"],
    href: "/products/avr",
  },
  {
    range: "주파수 변환기",
    title: "NFS-2000 시리즈",
    image: "/image/products/NFS-2000.png",
    features: ["주파수 변환 (50Hz ↔ 60Hz)", "수출입 장비, 해외 설비 대응", "산업현장, 특수 설비용", "맞춤형 용량 설계"],
    href: "/products/frequency",
  },
  {
    range: "배터리",
    title: "ES Series",
    image: "/image/products/es-series.png",
    features: ["UPS 전용 축전지", "장시간 정전 대응 백업", "안정적 방전 성능", "장수명 설계"],
    href: "/products/battery-es",
  },
  {
    range: "배터리",
    title: "RP Series",
    image: "/image/products/rp.png",
    features: ["고신뢰성 UPS 배터리", "다양한 용량 라인업", "설치 공간 효율적 설계", "정기 점검 및 교체 용이"],
    href: "/products/battery-rp",
  },
];

function ShieldIcon() {
  return (
    <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M9 10v9M15 10v9M19 10v9" />
      <path d="M3 19h18" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <span className="relative inline-flex">
      <svg className="w-17.5 h-17.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
      <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-blue text-white text-xs font-bold flex items-center justify-center">
        24
      </span>
    </span>
  );
}

const heroHighlights = [
  { icon: ShieldIcon, value: "30년 이상", label: "UPS 전문 기술" },
  { icon: BuildingIcon, value: "2,500여 대", label: "중대형 납품 설치" },
  { icon: WrenchIcon, value: "설계·제조·설치", label: "원스톱 시스템" },
  { icon: HeadsetIcon, value: "신속한 A/S", label: "전국 서비스망" },
];

const operationFeatures = [
  "고효율 설계로 전력 손실 최소화",
  "넓은 입력 전압 범위로 안정적인 운전",
  "정현파 출력으로 모든 부하에 사용 가능",
  "배터리 자동 관리 및 보호 기능",
  "다양한 통신 및 원격 모니터링 지원",
  "손쉬운 유지보수 및 관리",
];

const installCases = projects.slice(0, 4);

function DiagramBox({ label, sub, highlight }: { label: string; sub: string; highlight?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-0.5 w-20 h-16 md:w-24 md:h-18 rounded-md border px-1 text-center shrink-0 ${
        highlight ? "bg-blue text-white border-blue" : "bg-white text-navy border-line"
      }`}
    >
      <span className="text-xs font-bold leading-tight">{label}</span>
      <span className={`text-xs leading-tight ${highlight ? "text-white/70" : "text-muted"}`}>{sub}</span>
    </div>
  );
}

function Arrow() {
  return (
    <span className="text-blue text-base md:text-lg shrink-0" aria-hidden="true">
      →
    </span>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-dark">
        <div className="absolute inset-0">
          <Image
            src="/image/products/bg-hero.jpg"
            alt="유진전원시스템 UPS 제품"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy-dark via-navy/95 to-navy/10 md:from-navy-dark md:via-navy/85 md:to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-xl pt-16 pb-10 md:pt-24 md:pb-16">
            <p className="text-sm font-bold text-blue-light mb-3">1KVA부터 200KVA까지</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-4">
              다양한 용량의 UPS 라인업
            </h1>
            <p className="text-base md:text-lg text-white/70">
              사용 환경과 부하 용량에 최적화된 UPS 솔루션을 제공합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-8 pb-16 md:gap-x-12 md:pb-24">
            {heroHighlights.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-white shrink-0">
                  <Icon />
                </span>
                <p className="flex flex-col leading-tight">
                  <b className="text-sm font-bold text-white">{value}</b>
                  <span className="text-xs text-white/60">{label}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 제품 카테고리별 UPS 라인업 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            eyebrow="PRODUCT LINEUP"
            title="제품 카테고리별 UPS 라인업"
            description="단상/삼상 UPS부터 AVR, 주파수 변환기, 배터리까지 유진전원시스템의 전체 제품군을 소개합니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productLineup.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col rounded-lg border border-line overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-navy text-white text-center text-sm font-bold py-3">{item.range}</div>
                <div className="px-5 pt-5 pb-6">
                  <p className="text-center text-sm font-bold text-navy mb-3">{item.title}</p>
                  <div className="relative w-full aspect-4/3 rounded-md overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {item.features.map((f) => (
                      <li key={f} className="text-xs text-muted leading-relaxed">
                        · {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* UPS 작동 방식 · 주요 특징 · 실제 설치 현장 · 납품 실적 */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            eyebrow="ABOUT UPS"
            title="UPS 작동 방식과 유진전원시스템의 실적"
            description="온라인 이중변환 방식으로 안정적이고 순수한 정현파 전원을 공급합니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* UPS 작동 방식 */}
            <div className="bg-white border border-line rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">UPS 작동 방식</h3>
              <p className="text-xs text-blue font-semibold mb-5">온라인 이중변환 방식 (On-Line Double Conversion)</p>
              <div className="rounded-md bg-surface p-5 md:p-6 mb-4">
                <div className="flex items-center justify-center gap-1.5 md:gap-2">
                  <DiagramBox label="AC 입력" sub="(상용전원)" />
                  <Arrow />
                  <DiagramBox label="정류기" sub="(AC/DC)" highlight />
                  <Arrow />
                  <DiagramBox label="인버터" sub="(DC/AC)" highlight />
                  <Arrow />
                  <DiagramBox label="부하" sub="(LOAD)" />
                </div>
                <div className="flex flex-col items-center mt-2">
                  <span className="text-blue text-base leading-none mb-2" aria-hidden="true">
                    ↑
                  </span>
                  <DiagramBox label="배터리" sub="(DC)" />
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                유진전원시스템의 온라인 방식 UPS는 입력 전원을 항상 정류기와 인버터를 통해 변환하여 공급함으로써
                순수하고 안정적인 정현파 전원을 제공합니다.
              </p>
            </div>

            {/* 주요 특징 */}
            <div className="bg-white border border-line rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-5">주요 특징</h3>
              <ul className="flex flex-col gap-4">
                {operationFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-blue/40 text-blue flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-ink">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 실제 설치 현장 */}
            <div className="bg-white border border-line rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-5">실제 설치 현장</h3>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {installCases.map((p) => (
                  <div key={p.name} className="relative h-28 md:h-32 rounded overflow-hidden bg-surface">
                    <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <Button href="/projects" variant="outline" className="w-full justify-center">
                납품실적 전체보기
              </Button>
            </div>

            {/* 유진전원시스템 납품 실적 */}
            <div className="bg-white border border-line rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">유진전원시스템 납품 실적</h3>
              <p className="text-3xl font-bold text-blue leading-none mb-1.5">2,500여 대</p>
              <p className="text-xs text-muted mb-6">중대형 UPS 납품 실적</p>
              <div className="grid grid-cols-2 gap-3">
                {projectFields.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 md:w-17.5 md:h-17.5 rounded-full bg-blue/10 text-blue flex items-center justify-center p-1.5 md:p-4 shrink-0">
                      {fieldIcons[f.label as keyof typeof fieldIcons]}
                    </div>
                    <span className="text-xs font-semibold text-ink">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactCtaBar />
    </>
  );
}
