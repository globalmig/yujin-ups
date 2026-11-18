import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SpecsTable from "@/components/ui/SpecsTable";
import { productContentMap } from "@/data/products/product-content";
import { productSpecsMap } from "@/data/products/product-specs";

interface ProductSpecsSectionProps {
  categoryId: string;
  /** productSpecsMap 조회 키. 생략 시 categoryId를 그대로 사용 */
  specKey?: string;
  /** 섹션 제목을 직접 지정 (생략 시 "{제품명} 제품 사양") */
  titleOverride?: string;
  /** 사양표 위에 표시할 추가 콘텐츠 (예: 타입별 제품 이미지 그리드) */
  beforeTable?: React.ReactNode;
}

export default function ProductSpecsSection({ categoryId, specKey, titleOverride, beforeTable }: ProductSpecsSectionProps) {
  const { title } = productContentMap[categoryId].hero;
  const table = productSpecsMap[specKey ?? categoryId];

  return (
    <section className="py-16 md:py-30 bg-white">
      <Container>
        <SectionTitle eyebrow="SPECIFICATIONS" title={titleOverride ?? `${title} 제품 사양`} description="모델별 상세 사양을 확인하세요." />
        {beforeTable}
        <SpecsTable table={table} />
        <p className="text-xs text-muted text-right mt-4">※ 상기 제품 사양은 성능 향상을 위해 예고 없이 변경될 수 있습니다.</p>
      </Container>
    </section>
  );
}
