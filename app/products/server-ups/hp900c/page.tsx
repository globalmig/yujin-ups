import type { Metadata } from "next";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductFeatureBar from "@/components/products/ProductFeatureBar";
import ProductWhyUsSection from "@/components/products/ProductWhyUsSection";
import ProductTowerTypeSection from "@/components/products/ProductTowerTypeSection";
import ProductDisplayRearSection from "@/components/products/ProductDisplayRearSection";
import DowntimeRiskSection from "@/components/products/DowntimeRiskSection";
import ProductStrengthPointsSection from "@/components/products/ProductStrengthPointsSection";
import ProductSpecsSection from "@/components/products/ProductSpecsSection";
import ProductFieldsSection from "@/components/products/ProductFieldsSection";
import ProductLineupSection from "@/components/products/ProductLineupSection";
import ContactCtaBar from "@/components/products/ContactCtaBar";

export const metadata: Metadata = {
  title: "HP900C (TOWER-TYPE) 제품소개",
  description: "유진전원시스템의 PC서버용 UPS HP900C(TOWER-TYPE) 모델 상세 정보와 제품 사양을 확인하세요.",
  alternates: { canonical: "https://www.upscom.co.kr/products/server-ups/hp900c" },
  openGraph: { title: "HP900C (TOWER-TYPE) 제품소개 | 유진전원시스템", description: "서버·네트워크 장비를 위한 고주파 온라인 UPS HP900C", url: "https://www.upscom.co.kr/products/server-ups/hp900c" },
};

export default function ServerUpsHp900cPage() {
  return (
    <>
      <ProductDetailHero categoryId="server-ups" />
      <ProductFeatureBar categoryId="server-ups" />
      <ProductWhyUsSection />
      <ProductTowerTypeSection categoryId="server-ups" />
      <ProductDisplayRearSection categoryId="server-ups" />
      <DowntimeRiskSection categoryId="server-ups" />
      <ProductStrengthPointsSection categoryId="server-ups" />
      <ProductSpecsSection categoryId="server-ups" />
      <ProductFieldsSection categoryId="server-ups" />
      <ProductLineupSection />
      <ContactCtaBar />
    </>
  );
}
