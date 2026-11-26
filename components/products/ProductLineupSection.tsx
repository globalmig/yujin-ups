import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const lineup = [
  {
    title: "단상 UPS",
    range: "3 ~ 15kVA",
    desc: "온라인 방식, 범용형 UPS",
    image: "/image/products/single-ups-feature.png",
    href: "/products/single-ups",
  },
  {
    title: "삼상 / 단상 UPS",
    range: "10 ~ 30kVA",
    desc: "확장성, 이중화 지원",
    image: "/image/products/spt-3000.png",
    href: "/products/three-single-ups",
  },
  {
    title: "삼상 / 삼상 UPS",
    range: "10 ~ 120kVA",
    desc: "데이터센터, 대형 설비용",
    image: "/image/products/UPS-3상-3상(2대)-1.png",
    href: "/products/three-three-ups",
  },
  {
    title: "산업용 / 특수 UPS",
    range: "맞춤형 설계",
    desc: "특수 환경 및 산업용",
    image: "/image/products/NFS-2000.png",
    href: "/products/frequency",
  },
];

export default function ProductLineupSection() {
  return (
    <section className="py-16 md:py-30 bg-surface">
      <Container>
        <SectionTitle eyebrow="PRODUCT LINEUP" title="제품 라인업" description="용량과 요구사항에 맞는 최적의 UPS 솔루션을 제공합니다." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {lineup.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-lg border border-line overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-end px-4 pt-4">
                <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-navy group-hover:bg-blue group-hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </span>
              </div>
              <div className="relative w-full aspect-4/3">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain p-4" />
              </div>
              <div className="px-4 pb-5 pt-1 text-center">
                <h3 className="text-lg md:text-xl font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm font-semibold text-blue mb-3 md:mb-4">{item.range}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/products" variant="primary">
            전체 제품 보기 →
          </Button>
        </div>
      </Container>
    </section>
  );
}
