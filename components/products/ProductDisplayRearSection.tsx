import Image from "next/image";
import Container from "@/components/layout/Container";
import { productDisplayRearMap } from "@/data/products/product-display-rear";

export default function ProductDisplayRearSection({ categoryId }: { categoryId: string }) {
  const config = productDisplayRearMap[categoryId];
  if (!config) return null;

  const { displayImage, rearImage, items } = config;
  const eyebrow = "DISPLAY & REAR";
  const title = "디스플레이 · 후면 구성";

  return (
    <section className="py-16 md:py-30 bg-navy-dark">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white">
            <Image
              src={displayImage}
              alt="디스플레이"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4"
            />
            <span className="absolute bottom-3 left-3 text-xs font-semibold text-navy bg-white/80 rounded px-2 py-1">
              디스플레이
            </span>
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white">
            <Image
              src={rearImage}
              alt="후면"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4"
            />
            <span className="absolute bottom-3 left-3 text-xs font-semibold text-navy bg-white/80 rounded px-2 py-1">
              후면
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs text-blue-light font-bold tracking-widest uppercase mb-3">{eyebrow}</p>
          <h2 className="text-2xl md:text-[40px] font-bold text-white leading-snug mb-8">{title}</h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map(({ number, label }) => (
              <li key={number} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {number}
                </span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
