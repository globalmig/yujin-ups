import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SpecsTable from "@/components/ui/SpecsTable";
import { productContentMap } from "@/data/products/product-content";
import { productSpecsMap } from "@/data/products/product-specs";

export default function ProductSpecsSection({ categoryId }: { categoryId: string }) {
  const { title } = productContentMap[categoryId].hero;
  const table = productSpecsMap[categoryId];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle eyebrow="SPECIFICATIONS" title={`${title} 제품 사양`} description="모델별 상세 사양을 확인하세요." />
        <SpecsTable table={table} />
        <p className="text-xs text-muted text-right mt-4">※ 상기 제품 사양은 성능 향상을 위해 예고 없이 변경될 수 있습니다.</p>
      </Container>
    </section>
  );
}
