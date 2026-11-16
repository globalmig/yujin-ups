import Image from "next/image";
import Container from "@/components/layout/Container";
import { productRearConfigMap } from "@/data/products/product-rear-config";

export default function ProductRearConfigSection({ categoryId }: { categoryId: string }) {
  const config = productRearConfigMap[categoryId];
  if (!config) return null;

  const { image, items } = config;
  const eyebrow = "REAR CONFIGURATION";
  const title = "후면 구성 안내";

  return (
    <section className="py-16 md:py-30 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
          <p className="text-xs text-blue font-bold tracking-widest uppercase mb-3">{eyebrow}</p>
          <h2 className="text-2xl md:text-[40px] font-bold text-navy leading-snug mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">제품 후면의 주요 구성 요소를 확인하세요.</p>

          <ul className="flex flex-col gap-4">
            {items.map(({ number, label }) => (
              <li key={number} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {number}
                </span>
                <span className="text-sm font-semibold text-navy">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
