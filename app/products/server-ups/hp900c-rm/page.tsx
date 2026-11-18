import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ProductWhyUsSection from "@/components/products/ProductWhyUsSection";
import ProductTowerTypeSection from "@/components/products/ProductTowerTypeSection";
import DowntimeRiskSection from "@/components/products/DowntimeRiskSection";
import ProductStrengthPointsSection from "@/components/products/ProductStrengthPointsSection";
import ProductRackMountTypesGrid from "@/components/products/ProductRackMountTypesGrid";
import ProductSpecsSection from "@/components/products/ProductSpecsSection";
import ProductFieldsSection from "@/components/products/ProductFieldsSection";
import ProductLineupSection from "@/components/products/ProductLineupSection";
import ContactCtaBar from "@/components/products/ContactCtaBar";

export const metadata: Metadata = {
  title: "HP900C-RM (RACK MOUNT-TYPE) 제품소개",
  description: "유진전원시스템의 PC서버용 UPS HP900C-RM(RACK MOUNT-TYPE) 모델 상세 정보와 제품 사양을 확인하세요.",
  alternates: { canonical: "https://www.upscom.co.kr/products/server-ups/hp900c-rm" },
  openGraph: { title: "HP900C-RM (RACK MOUNT-TYPE) 제품소개 | 유진전원시스템", description: "서버랙 설치에 최적화된 랙마운트형 온라인 UPS HP900C-RM", url: "https://www.upscom.co.kr/products/server-ups/hp900c-rm" },
};

export default function ServerUpsHp900cRmPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/products/bg-hero.jpg"
        imageAlt="HP900C-RM (RACK MOUNT-TYPE) UPS"
        eyebrow="PC서버용 UPS · HP900C-RM (RACK MOUNT-TYPE)"
        title="HP900C-RM Series"
        description="서버랙 설치에 최적화된 랙마운트형 고주파 온라인 UPS 모델입니다."
      />
      <ProductWhyUsSection />
      <ProductTowerTypeSection categoryId="server-ups" towerKey="server-ups-rm" />
      <DowntimeRiskSection />
      <ProductStrengthPointsSection />
      <ProductSpecsSection
        categoryId="server-ups"
        specKey="server-ups-rm"
        titleOverride="HP900C-RM (RACK MOUNT-TYPE) 제품 사양"
        beforeTable={<ProductRackMountTypesGrid />}
      />
      <ProductFieldsSection categoryId="server-ups" />
      <ProductLineupSection />
      <ContactCtaBar />
    </>
  );
}
