import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { capacityLineup } from "@/lib/lineup";

export default function CapacityLineupSection() {
  return (
    <section id="lineup" className="py-16 md:py-30 bg-white scroll-mt-20">
      <Container>
        <SectionTitle
          eyebrow="CAPACITY LINEUP"
          title="용량별 UPS 라인업"
          description="원하는 입출력 방식과 용량에 맞는 제품을 바로 확인하세요."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {capacityLineup.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={`${item.category} 상세보기`}
              className="group flex flex-col rounded-lg border border-line overflow-hidden bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="text-xs font-bold text-blue">{item.io}</span>
                <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-navy group-hover:bg-blue group-hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </span>
              </div>
              <div className="relative w-full aspect-4/3 mt-2">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="px-5 pb-6 pt-2 text-center">
                <h3 className="text-lg md:text-xl font-bold text-navy mb-1">{item.category}</h3>
                <p className="text-2xl font-bold text-blue mb-1">{item.capacity}</p>
                <p className="text-xs text-muted">대표 모델 · {item.model}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
