import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ProductWhyUsSection from "@/components/products/ProductWhyUsSection";
import ProductTowerTypeSection from "@/components/products/ProductTowerTypeSection";
import DowntimeRiskSection from "@/components/products/DowntimeRiskSection";
import ProductStrengthPointsSection from "@/components/products/ProductStrengthPointsSection";
import ProductSpecsSection from "@/components/products/ProductSpecsSection";
import ProductFieldsSection from "@/components/products/ProductFieldsSection";
import ProductLineupSection from "@/components/products/ProductLineupSection";
import ContactCtaBar from "@/components/products/ContactCtaBar";

export const metadata: Metadata = {
  title: "HP3900C (TOWER-TYPE) 제품소개",
  description: "유진전원시스템의 PC서버용 UPS HP3900C(TOWER-TYPE) 모델 상세 정보와 제품 사양을 확인하세요.",
  alternates: { canonical: "https://www.upscom.co.kr/products/server-ups/hp3900c" },
  openGraph: { title: "HP3900C (TOWER-TYPE) 제품소개 | 유진전원시스템", description: "대용량 서버·네트워크 장비를 위한 고주파 온라인 UPS HP3900C", url: "https://www.upscom.co.kr/products/server-ups/hp3900c" },
};

export default function ServerUpsHp3900cPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/products/bg-hero.jpg"
        imageAlt="HP3900C (TOWER-TYPE) UPS"
        eyebrow="PC서버용 UPS · HP3900C (TOWER-TYPE)"
        title="HP3900C Series"
        description="대용량 서버, 네트워크 장비를 위한 고주파 온라인 UPS 타워형 모델입니다."
      />
      <ProductWhyUsSection />
      <ProductTowerTypeSection categoryId="server-ups" towerKey="server-ups-hp3900c" />
      <DowntimeRiskSection />
      <ProductStrengthPointsSection />
      <ProductSpecsSection categoryId="server-ups" specKey="server-ups-hp3900c" titleOverride="HP3900C (TOWER-TYPE) 제품 사양" />
      <ProductFieldsSection categoryId="server-ups" />
      <ProductLineupSection />
      <ContactCtaBar />
    </>
  );
}
