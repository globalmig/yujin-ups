import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import StrengthContactSection from "@/components/common/StrengthContactSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "유지보수",
  description: "국산·수입을 가리지 않는 UPS 전문 유지보수. 정기 점검부터 신속한 출동, 부품 교체까지 유진전원시스템이 책임집니다.",
  alternates: { canonical: "https://www.upscom.co.kr/maintenance" },
  openGraph: {
    title: "유지보수 | 유진전원시스템",
    description: "30년 노하우의 UPS 전문 유지보수 · 사후관리",
    url: "https://www.upscom.co.kr/maintenance",
  },
};

const services = [
  { title: "정기 점검", desc: "정기적인 현장 점검으로 장비 이상을 사전에 예방합니다." },
  { title: "신속한 출동", desc: "문의 접수 후 빠른 현장 대응으로 다운타임을 최소화합니다." },
  { title: "국산·수입 전 브랜드 대응", desc: "제조사와 관계없이 다양한 브랜드의 UPS를 점검·정비합니다." },
  { title: "부품 교체·정비", desc: "배터리, 콘덴서 등 소모품 교체부터 전문 정비까지 책임집니다." },
];

const process = [
  { step: "01", title: "문의 접수", desc: "전화 또는 견적문의를 통해 장비 상태와 요청사항을 접수합니다." },
  { step: "02", title: "현장/원격 진단", desc: "전문 엔지니어가 현장 방문 또는 원격으로 장비 상태를 진단합니다." },
  { step: "03", title: "정비 · 부품 교체", desc: "진단 결과에 따라 정비, 소모품 교체 등 필요한 조치를 진행합니다." },
  { step: "04", title: "사후 관리", desc: "조치 완료 후에도 지속적인 모니터링과 사후관리를 제공합니다." },
];

const checklist = [
  "제조사 · 모델명",
  "설치 지역",
  "알람 또는 증상",
  "제품 명판 사진",
];

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        imageSrc="/image/home/maintenance-hero.jpg"
        imageAlt="유지보수 배경"
        eyebrow="MAINTENANCE SERVICE"
        title="유지보수"
        description="국산·수입을 가리지 않는 UPS 전문 유지보수. 정기 점검부터 신속한 출동, 부품 교체까지 책임집니다."
        actions={
          <>
            <Button href="tel:02-894-8057" variant="white">
              ☎ UPS 고장·점검 문의 02-894-8057
            </Button>
            <Button href="#contact" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              고장·점검 문의하기
            </Button>
          </>
        }
      />

      {/* 소개 */}
      <section className="py-16 md:py-30 bg-white">
        <Container>
          <SectionTitle
            eyebrow="OVERVIEW"
            title="국산 · 수입, 모두 가능한 UPS 유지보수"
            description="제조사의 구분 없이 국산 및 수입 UPS의 보수, 정비, 유지관리가 가능합니다."
          />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed text-center">
            1996년부터 축적해 온 UPS 제조 기술력과 현장 경험을 바탕으로, 노이즈·서지·순간정전 등 전기적 트러블로 발생할 수 있는 문제를 가장 빠르고 안정적으로 해결합니다. 성실과 신뢰를 생명으로 철저한
            사후관리와 신속한 유지보수로 고객의 전원 시스템을 책임집니다.
          </p>

          <div className="max-w-2xl mx-auto mt-10 bg-surface border border-line rounded-md p-6 md:p-8">
            <p className="font-bold text-navy mb-3">전화 접수 시 아래 정보를 알려주시면 상담이 더 빨라집니다.</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
              {checklist.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 서비스 */}
      <section className="py-16 md:py-30 bg-surface">
        <Container>
          <SectionTitle eyebrow="OUR SERVICES" title="유지보수 서비스" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-md border border-line p-5 md:p-6 shadow-sm">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue/10 text-blue font-bold text-sm mb-4">✓</span>
                <h3 className="text-lg md:text-xl font-bold text-navy mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 진행 절차 */}
      <section className="py-16 md:py-30 bg-white">
        <Container>
          <SectionTitle eyebrow="SERVICE PROCESS" title="A/S 진행 절차" description="문의부터 사후관리까지, 체계적인 프로세스로 진행합니다." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center px-2">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-px bg-line" aria-hidden="true" />
                )}
                <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm mb-4">
                  {p.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StrengthContactSection
        contactEyebrow="UPS 고장 · 점검 문의"
        contactTitle="UPS가 고장났거나 점검이 필요하신가요?"
        contactDescription={
          <>
            지금 바로 전화 주시면 빠르게 상담드립니다.
            <br />
            제조사·모델명, 증상을 알려주시면 더 정확한 안내가 가능합니다.
          </>
        }
        contactButtonHref="tel:02-894-8057"
        contactButtonLabel="전화 상담하기"
      />
    </>
  );
}
