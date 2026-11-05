import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { getImageSrc } from "@/lib/products";

const lineup = [
  {
    title: "SPT 시리즈",
    range: "1 ~ 30kVA",
    desc: "온라인 방식, 범용형 UPS",
    image: getImageSrc("SPT-301K_single-ups", "1_product-profile2.png"),
    href: "/products/single-ups",
  },
  {
    title: "3상 온라인 UPS",
    range: "10 ~ 600kVA",
    desc: "데이터센터, 대형 설비용",
    image: getImageSrc("SPT-3300_three-three-ups", "1_product-profile2.png"),
    href: "/products/three-three-ups",
  },
  {
    title: "모듈형 UPS",
    range: "20 ~ 600kVA",
    desc: "확장성, 이중화 지원",
    image: getImageSrc("SPT-100AK_three-single-ups", "1_product-profile2.png"),
    href: "/products/three-single-ups",
  },
  {
    title: "산업용 / 특수 UPS",
    range: "맞춤형 설계",
    desc: "특수 환경 및 산업용",
    image: getImageSrc("NFS-2000_frequency", "1_product-profile.png"),
    href: "/products/frequency",
  },
];

export default function ProductLineupSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <SectionTitle title="제품 라인업" description="용량과 요구사항에 맞는 최적의 UPS 솔루션을 제공합니다." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {lineup.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block bg-white rounded-lg border border-line overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-36 md:h-44 bg-white">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain p-4" />
              </div>
              <div className="px-4 pb-5 pt-1">
                <h3 className="text-sm md:text-base font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm font-semibold text-blue mb-2">{item.range}</p>
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
