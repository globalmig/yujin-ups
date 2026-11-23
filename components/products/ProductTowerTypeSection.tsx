import Image from "next/image";
import Container from "@/components/layout/Container";
import { productTowerTypeMap } from "@/data/products/product-tower-type";

interface ProductTowerTypeSectionProps {
  categoryId: string;
  /** productTowerTypeMap 조회 키. 생략 시 categoryId를 그대로 사용 */
  towerKey?: string;
}

export default function ProductTowerTypeSection({ categoryId, towerKey }: ProductTowerTypeSectionProps) {
  const towerType = productTowerTypeMap[towerKey ?? categoryId];
  if (!towerType) return null;

  const { badge, title, image, groups } = towerType;

  return (
    <section className="relative py-16 md:py-30 overflow-hidden bg-white">
      <Image
        src="/image/products/feature-section-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>

        <div>
          <p className="text-xs text-blue font-bold tracking-widest uppercase mb-3">{badge}</p>
          <h2 className="text-2xl md:text-[40px] font-bold text-navy leading-snug mb-8">{title}</h2>

          <div className="flex flex-col gap-5">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-bold text-navy mb-2.5">{group.label}</p>
                <ul className={`gap-2.5 ${group.items.length > 4 ? "grid grid-cols-1 sm:grid-cols-2" : "flex flex-col"}`}>
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-navy/30 text-navy flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
