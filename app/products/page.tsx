import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import StrengthContactSection from "@/components/StrengthContactSection";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { getImageSrc } from "@/lib/products";
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

const capacityLineup = [
  {
    range: "1 ~ 3KVA",
    title: "소형 UPS",
    image: getImageSrc("SPT-301K_single-ups", "1_product-profile2.png"),
    features: ["가정, 소규모 사무실, PC, 통신장비", "온라인 방식 (On-Line)", "정현파 출력, 고효율 설계", "LCD 디스플레이"],
    href: "/products/single-ups",
  },
  {
    range: "5 ~ 10KVA",
    title: "소형/중형 UPS",
    image: getImageSrc("HP-900C_server-ups", "1_product-profile.png"),
    features: ["서버, 네트워크 장비, 의료장비", "온라인 이중변환 방식", "높은 입력 역률 및 효율", "확장 배터리 지원"],
    href: "/products/server-ups",
  },
  {
    range: "15 ~ 20KVA",
    title: "중형 UPS",
    image: getImageSrc("SPT-100AK_three-single-ups", "1_product-profile2.png"),
    features: ["중소형 전산실, 공장 설비", "온라인 이중변환 방식", "병렬 운전 지원", "다양한 통신 옵션"],
    href: "/products/three-single-ups",
  },
  {
    range: "30 ~ 60KVA",
    title: "중대형 UPS",
    image: getImageSrc("SPT-3300_three-three-ups", "1_product-profile2.png"),
    features: ["산업현장, 데이터센터, 병원", "고효율 온라인 방식", "병렬 확장으로 용량 증설 가능", "SNMP, MODBUS 지원"],
    href: "/products/three-three-ups",
  },
  {
    range: "80 ~ 120KVA",
    title: "대형 UPS",
    image: getImageSrc("SPT-3300_three-three-ups", "7_display2.png"),
    features: ["데이터센터, 금융기관, 공공기관", "고신뢰성 설계", "이중화 및 병렬 확장 지원", "장시간 백업 지원"],
    href: "/products/three-three-ups",
  },
  {
    range: "150 ~ 200KVA",
    title: "초대형 UPS",
    image: getImageSrc("SPT-3300_three-three-ups", "5_field-cases2.png"),
    features: ["대형 데이터센터, 산업플랜트", "최고 수준의 신뢰성", "맞춤형 시스템 설계", "장시간 백업 및 이중화 구성"],
    href: "/products/three-three-ups",
  },
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
      <span className="text-[11px] md:text-xs font-bold leading-tight">{label}</span>
      <span className={`text-[9px] leading-tight ${highlight ? "text-white/70" : "text-muted"}`}>{sub}</span>
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
      <PageHero
        imageSrc="/image/products/bg-hero.jpg"
        imageAlt="제품소개 배경"
        eyebrow="PRODUCTS"
        title="제품소개"
        breadcrumbs={[{ label: "제품소개" }]}
      />

      <StatsBar />

      {/* 용량별 UPS 제품 라인업 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            eyebrow="PRODUCT LINEUP"
            title="용량별 UPS 제품 라인업"
            description="1KVA부터 200KVA까지, 다양한 용량과 사양의 UPS 제품을 제공합니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capacityLineup.map((item) => (
              <div key={item.range} className="flex flex-col rounded-lg border border-line overflow-hidden bg-white">
                <div className="bg-navy text-white text-center text-sm font-bold py-3">{item.range}</div>
                <div className="px-5 pt-5">
                  <p className="text-center text-sm font-bold text-navy mb-3">{item.title}</p>
                  <div className="relative w-full aspect-4/3 rounded-md overflow-hidden bg-surface mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {item.features.map((f) => (
                      <li key={f} className="text-xs text-muted leading-relaxed">
                        · {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href={item.href} variant="outline" className="mx-5 mb-5 justify-center">
                  자세히 보기
                </Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted text-right mt-4">※ 상기 제품 사양은 성능 향상을 위해 예고 없이 변경될 수 있습니다.</p>
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
              <h3 className="text-base font-bold text-navy mb-1">UPS 작동 방식</h3>
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
              <h3 className="text-base font-bold text-navy mb-5">주요 특징</h3>
              <ul className="flex flex-col gap-4">
                {operationFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-blue/40 text-blue flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-ink">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 실제 설치 현장 */}
            <div className="bg-white border border-line rounded-lg p-6 md:p-8">
              <h3 className="text-base font-bold text-navy mb-5">실제 설치 현장</h3>
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
              <h3 className="text-base font-bold text-navy mb-4">유진전원시스템 납품 실적</h3>
              <p className="text-3xl font-bold text-blue leading-none mb-1.5">2,500여 대</p>
              <p className="text-xs text-muted mb-6">중대형 UPS 납품 실적</p>
              <div className="grid grid-cols-2 gap-3">
                {projectFields.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-blue/10 text-blue flex items-center justify-center text-sm font-bold shrink-0">
                      {f.label.charAt(0)}
                    </span>
                    <span className="text-xs font-semibold text-ink">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StrengthContactSection />
    </>
  );
}
