import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import StatsBar from "@/components/common/StatsBar";
import FieldIcon from "@/components/common/FieldIcon";
import { projectFields } from "@/lib/projects";
import DeliveryRecordsTable from "./_components/DeliveryRecordsTable";
import DeliveryInspectionsList from "./_components/DeliveryInspectionsList";
import { deliveryRecords } from "@/data/deliveries/delivery-records";
import StrengthContactSection from "@/components/common/StrengthContactSection";

export const metadata: Metadata = {
  title: "납품실적",
  description: "유진전원시스템이 금융기관, 공공기관, 산업현장, 데이터센터 등 다양한 분야에 공급한 UPS 납품 실적을 소개합니다.",
  alternates: { canonical: "https://www.upscom.co.kr/projects" },
  openGraph: {
    title: "납품실적 | 유진전원시스템",
    description: "2,500여 대의 UPS 공급 실적, 다양한 분야의 납품 사례",
    url: "https://www.upscom.co.kr/projects",
  },
};

export default function ProjectsPage() {

  return (
    <>
      <PageHero
        imageSrc="/image/home/project-datacenter.png"
        imageAlt="데이터센터 UPS 납품 현장"
        eyebrow="DELIVERY RECORD"
        title="납품실적"
        description="금융기관, 공공기관, 산업현장, 데이터센터 등 다양한 분야의 UPS 납품 실적을 소개합니다."
      />

      <StatsBar />

      {/* 공급 분야 */}
      <section className="relative py-16 md:py-40 overflow-hidden bg-navy">
        <Image
          src="/image/Frame%202147239468.png"
          alt="글로벌 네트워크 이미지"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <Container className="relative z-10">
          <div className="max-w-xl">
            <SectionTitle
              light
              align="left"
              eyebrow="TRUSTED EVERYWHERE"
              title="어디서든, 멈추지 않는 전원"
              description="금융기관의 자산을 지키고, 공공기관의 서비스를 지속시키며, 산업현장의 생산라인을 보호하고, 데이터센터의 모든 순간을 지켜냅니다."
            />
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white leading-none mb-1.5">2,500여 대</p>
            <p className="text-xs md:text-sm text-white/60 mb-6">중대형 UPS 납품 실적</p>
            <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-wrap">
              {projectFields.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/10 text-white flex items-center justify-center p-1.5 md:p-3 shrink-0">
                    <FieldIcon label={f.label} />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-white">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 주요 납품 사례 */}
      <section className="py-16 md:py-30 bg-surface">
        <Container>
          <SectionTitle
            eyebrow="CASE STUDIES"
            title="주요 납품 사례"
            description={`교육·산업·공공·의료 등 4개 분야, 총 ${deliveryRecords.length}건의 UPS 납품 실적입니다.`}
          />
          <DeliveryRecordsTable />
        </Container>
      </section>

      {/* 납품검수확인서 */}
      <section className="py-16 md:py-30 bg-white">
        <Container>
          <SectionTitle
            eyebrow="INSPECTION DOCUMENTS"
            title="납품 검수 확인서"
            description={`납품 완료 후 발급받은 검수확인서로 실제 공급 사실을 확인할 수 있습니다.`}
          />
          <DeliveryInspectionsList />
        </Container>
      </section>

      <StrengthContactSection />
    </>
  );
}
