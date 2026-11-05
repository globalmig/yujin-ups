import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import StatsBar from "@/components/StatsBar";
import ContactSection from "@/components/ContactSection";
import { projectFields } from "@/lib/projects";
import DeliveryRecordsTable from "./_components/DeliveryRecordsTable";
import DeliveryInspectionsList from "./_components/DeliveryInspectionsList";
import { deliveryRecords } from "@/data/deliveries/delivery-records";
import { deliveryInspections } from "@/data/deliveries/delivery-inspections";

export const metadata: Metadata = {
  title: "납품실적",
  description: "유진전원시스템이 금융기관, 공공기관, 산업현장, 데이터센터 등 다양한 분야에 공급한 UPS 납품 실적을 소개합니다.",
  alternates: { canonical: "https://upscom.co.kr/projects" },
  openGraph: {
    title: "납품실적 | 유진전원시스템",
    description: "2,500여 대의 UPS 공급 실적, 다양한 분야의 납품 사례",
    url: "https://upscom.co.kr/projects",
  },
};

export default function ProjectsPage() {
  const totalInspections = deliveryInspections.reduce((sum, g) => sum + g.documents.length, 0);

  return (
    <>
      <PageHero
        imageSrc="/image/home/project-datacenter.jpg"
        imageAlt="데이터센터 UPS 납품 현장"
        eyebrow="DELIVERY RECORD"
        title="납품실적"
        breadcrumbs={[{ label: "납품실적" }]}
      />

      <StatsBar />

      {/* 공급 분야 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            title="다양한 분야의 납품 경험"
            description="금융기관, 공공기관, 기업, 산업현장, 데이터센터 등 다양한 분야에 UPS를 공급하고 있습니다."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {projectFields.map((f) => (
              <div key={f.label} className="rounded-md overflow-hidden border border-line bg-white shadow-sm">
                <div className="relative h-32 md:h-36">
                  <Image src={f.image} alt={f.label} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="px-4 py-4 text-center">
                  <h3 className="text-sm md:text-base font-bold text-navy mb-1.5">{f.label}</h3>
                  <p className="text-[11px] md:text-xs text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 주요 납품 사례 */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionTitle
            title="주요 납품 사례"
            description={`교육·산업·공공·의료 등 4개 분야, 총 ${deliveryRecords.length}건의 UPS 납품 실적입니다.`}
          />
          <DeliveryRecordsTable />
        </Container>
      </section>

      {/* 납품검수확인서 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            title="납품검수확인서"
            description={`납품 완료 후 발급받은 검수확인서로 실제 공급 사실을 확인할 수 있습니다. 총 ${totalInspections}건 보유.`}
          />
          <DeliveryInspectionsList />
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
