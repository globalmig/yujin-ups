import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "기술정보",
  description: "1KVA부터 200KVA까지, 유진전원시스템의 UPS 기술력과 용량별 대응 범위를 소개합니다.",
  alternates: { canonical: "https://upscom.co.kr/tech-info" },
  openGraph: {
    title: "기술정보 | 유진전원시스템",
    description: "30년 UPS 제조 기술력, 1~200KVA 용량별 대응 범위 안내",
    url: "https://upscom.co.kr/tech-info",
  },
};

const protections = [
  { title: "노이즈 (Noise)", desc: "전원 라인에 유입되는 잡음을 차단해 장비를 보호합니다." },
  { title: "서지 (Surge)", desc: "순간적인 과전압으로부터 민감한 전자장비를 지켜줍니다." },
  { title: "과도전류", desc: "과부하·과도전류 상황에서도 안정적으로 동작합니다." },
  { title: "순간/완전 정전", desc: "예기치 못한 정전 시에도 끊김 없는 전원을 공급합니다." },
];

export default function TechInfoPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/home/hero-ups.jpg"
        imageAlt="유진전원시스템 UPS 제품"
        eyebrow="TECHNICAL INFORMATION"
        title="기술정보"
        breadcrumbs={[{ label: "기술정보" }]}
      />

      {/* 기술 개요 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            title="안정적인 전원 공급을 위한 UPS 기술력"
            description="1996년부터 축적해 온 제조 기술력과 현장 경험으로 완성한 유진전원시스템의 UPS입니다."
          />
          <p className="max-w-2xl mx-auto text-sm md:text-base text-muted leading-relaxed text-center mb-14">
            모든 주변장치 및 한전으로부터 발생할 수 있는 전기적 트러블과 노이즈, 누전, 서지, 과도전류, 송전사고 및 정전 등 예측할 수 없는 요인들에 완벽하게 대응합니다. 순간적·지속적인 전력 손실에 대해서도
            수많은 노하우와 풍부한 데이터를 바탕으로 가장 빠르고 짧은 시간 내에 문제를 해결하여 고객의 시스템을 안정적으로 운용할 수 있도록 돕습니다.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {protections.map((p) => (
              <div key={p.title} className="bg-surface rounded-md p-5 md:p-6 text-center">
                <h3 className="text-sm md:text-base font-bold text-navy mb-1.5">{p.title}</h3>
                <p className="text-[11px] md:text-xs text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 용량별 대응 범위 */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle eyebrow="CAPACITY RANGE" title="1KVA부터 200KVA까지" description="사용 환경과 용도에 맞는 최적의 용량으로 대응합니다." />
          <div className="bg-white rounded-md border border-line overflow-hidden">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className={`flex items-center justify-between px-5 md:px-8 py-4 md:py-5 ${i !== solutions.length - 1 ? "border-b border-line" : ""}`}
              >
                <span className="text-sm md:text-base font-semibold text-ink">{s.title}</span>
                <span className="text-sm md:text-base font-bold text-blue">{s.capacity}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 제품별 상세 사양 CTA */}
      <section className="py-16 md:py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">제품별 상세 사양이 궁금하신가요?</h2>
          <p className="text-sm md:text-base text-muted mb-8">제품소개 페이지에서 모델별 상세 기술 사양을 확인하실 수 있습니다.</p>
          <Button href="/products" variant="primary">
            제품소개 바로가기
          </Button>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
