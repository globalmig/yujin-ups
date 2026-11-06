import Image from "next/image";
import Container from "@/components/layout/Container";
import { productContentMap } from "@/data/products/product-content";

export default function ProductFeaturesSection({ categoryId }: { categoryId: string }) {
  const { eyebrow, title, description, items } = productContentMap[categoryId].features;
  const image = productContentMap[categoryId].image;

  return (
    <section className="py-16 md:py-30 bg-navy">
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
          <p className="text-xs text-blue-light tracking-widest uppercase mb-3">{eyebrow}</p>
          <h2 className="text-2xl md:text-[40px] font-bold text-white leading-snug mb-4">{title}</h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">{description}</p>

          <ul className="flex flex-col gap-4">
            {items.map(({ title: itemTitle, desc }) => (
              <li key={itemTitle} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full border border-white/40 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm text-white/85">
                  <b className="font-semibold text-white">{itemTitle}</b> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
