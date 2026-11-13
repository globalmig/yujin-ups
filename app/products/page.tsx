import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StrengthContactSection from "@/components/common/StrengthContactSection";
import ContactCtaBar from "@/components/products/ContactCtaBar";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FieldIcon from "@/components/common/FieldIcon";
import { projects, projectFields } from "@/lib/projects";
import ProjectsSection from "@/components/home/ProjectsSection";

export const metadata: Metadata = {
  title: "제품소개",
  description: "1KVA부터 200KVA까지, 유진전원시스템의 UPS·AVR·주파수 변환기·배터리 제품 라인업을 소개합니다.",
  alternates: { canonical: "https://www.upscom.co.kr/products" },
  openGraph: {
    title: "제품소개 | 유진전원시스템",
    description: "30년 기술력으로 완성한 유진전원시스템의 전원장치 제품 라인업",
    url: "https://www.upscom.co.kr/products",
  },
};

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
      <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white text-blue text-xs font-bold flex items-center justify-center">
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

const keyFeatures = [
  {
    label: "고효율 설계로\n전력 손실 최소화",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 9" />
      </svg>
    ),
  },
  {
    label: "넓은 입력 전압 범위로\n안정적인 운전",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
  {
    label: "정현파 출력으로\n모든 부하에 사용 가능",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" />
      </svg>
    ),
  },
  {
    label: "배터리 자동 관리\n및 보호 기능",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1" />
        <path d="M6 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
        <line x1="22" x2="22" y1="11" y2="13" />
        <polyline points="11 6 7 12 13 12 9 18" />
      </svg>
    ),
  },
  {
    label: "다양한 통신 및\n원격 모니터링 지원",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M5 13a10 10 0 0 1 14 0" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <line x1="12" x2="12.01" y1="20" y2="20" />
      </svg>
    ),
  },
  {
    label: "손쉬운 유지보수\n및 관리",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const installCases = projects.slice(0, 4);

function DiagramBox({ label, sub, highlight }: { label: string; sub: string; highlight?: boolean }) {
  return (
    <div
      className={`flex w-full min-w-0 aspect-4/3 flex-col items-center justify-center gap-0.5 rounded-md border px-1 text-center ${
        highlight ? "bg-blue text-white border-blue" : "bg-white text-navy border-line"
      }`}
    >
      <span className="text-[10px] sm:text-xs md:text-sm font-bold leading-tight">{label}</span>
      <span className={`text-[9px] sm:text-xs leading-tight ${highlight ? "text-white/70" : "text-muted"}`}>{sub}</span>
    </div>
  );
}

function Arrow() {
  return (
    <span className="text-blue text-sm md:text-xl shrink-0" aria-hidden="true">
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
                  <b className="text-base md:text-xl font-bold text-white md:mb-1">{value}</b>
                  <span className="text-xs text-white/60">{label}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 제품 카테고리별 UPS 라인업 */}
      <section className="py-16 md:py-30 bg-white">
        <Container>
          <SectionTitle
            eyebrow="PRODUCT LINEUP"
            title="제품 카테고리별 UPS 라인업"
            description="단상/삼상 UPS부터 AVR, 주파수 변환기, 배터리까지 유진전원시스템의 전체 제품군을 소개합니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {productLineup.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col rounded-lg border border-line overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                <div className="bg-navy text-white text-center text-lg md:text-2xl font-bold py-3">{item.range}</div>
                <div className="px-5 pt-5 pb-6">
                  <p className="text-center text-lg md:text-xl font-bold text-navy mb-3 md:mb-5">{item.title}</p>
                  <div className="relative w-full aspect-4/3 rounded-md overflow-hidden mb-4 md:mb-7">
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
                      <li key={f} className="text-base text-muted leading-relaxed">
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

      {/* UPS 작동 원리 */}
      <section className="py-16 md:py-30 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="max-w-md">
              <SectionTitle
                align="left"
                eyebrow="ABOUT UPS"
                title="UPS 작동 원리"
                description="온라인 이중변환 방식으로 상시 정류기와 인버터를 거쳐 전원을 변환함으로써, 입력 전원 상태와 관계없이 항상 순수하고 안정적인 정현파 전원을 공급합니다."
              />
            </div>

            <div className="bg-white border border-line rounded-lg p-6 md:p-10">
              <p className="text-xs text-blue font-semibold mb-6">온라인 이중변환 방식 (On-Line Double Conversion)</p>
              <div className="rounded-md bg-surface p-4 sm:p-6 md:p-10">
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1 sm:gap-2 md:gap-3">
                  <DiagramBox label="AC 입력" sub="(상용전원)" />
                  <Arrow />
                  <DiagramBox label="정류기" sub="(AC/DC)" highlight />
                  <Arrow />
                  <DiagramBox label="인버터" sub="(DC/AC)" highlight />
                  <Arrow />
                  <DiagramBox label="부하" sub="(LOAD)" />
                </div>
                <div className="flex flex-col items-center mt-3">
                  <span className="text-blue text-xl leading-none mb-3" aria-hidden="true">
                    ↑
                  </span>
                  <div className="w-full max-w-28 sm:max-w-32 md:max-w-36">
                    <DiagramBox label="배터리" sub="(DC)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 핵심 특징 */}
      <section className="py-16 md:py-30 bg-navy">
        <Container>
          <SectionTitle
            light
            eyebrow="KEY FEATURES"
            title="핵심 특징"
            description="다양한 현장에 최적화된 유진전원시스템 UPS의 핵심 기능입니다."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 text-center">
            {keyFeatures.map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center gap-4">
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue/40 text-blue-light flex items-center justify-center p-4 md:p-5 shrink-0">
                  {icon}
                </span>
                <span className="text-sm md:text-base font-semibold text-white leading-snug whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProjectsSection dark />

      <ContactCtaBar />
    </>
  );
}
