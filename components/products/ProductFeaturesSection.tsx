import Image from "next/image";
import Container from "@/components/layout/Container";
import { productContentMap } from "@/data/products/product-content";

export default function ProductFeaturesSection({ categoryId }: { categoryId: string }) {
  const { hero, features, image } = productContentMap[categoryId];
  const { description, items } = features;
  const eyebrow = "PRODUCT FEATURES";
  const title = `${hero.title}의 제품 특징`;

  return (
    <section className="relative py-16 md:py-30 overflow-hidden bg-white">
      <Image
        src="/image/제품%20특징%20배경.jpg"
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
          <p className="text-xs text-blue font-bold tracking-widest uppercase mb-3">{eyebrow}</p>
          <h2 className="text-2xl md:text-[40px] font-bold text-navy leading-snug mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">{description}</p>

          <ul className="flex flex-col gap-4">
            {items.map(({ title: itemTitle, desc }) => (
              <li key={itemTitle} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full border border-navy/30 text-navy flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm text-muted">
                  <b className="font-semibold text-navy">{itemTitle}</b> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
