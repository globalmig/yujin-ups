import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutions } from "@/lib/solutions";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-surface scroll-mt-20">
      <Container>
        <SectionTitle eyebrow="UPS SOLUTIONS" title="용도별 UPS 솔루션" description="사용 환경에 맞는 최적의 UPS를 제안해 드립니다." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href="/contact"
              aria-label={`${s.title} UPS 문의하기`}
              className="group block bg-white rounded-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-center px-3 pt-4 pb-2">
                <h3 className="text-sm font-bold text-navy mb-1">{s.title}</h3>
                <p className="text-xs text-muted">{s.capacity}</p>
              </div>
              <div className="relative h-32">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 50vw, 16vw" className="object-cover" />
                <span className="absolute right-2 bottom-2 w-6 h-6 rounded-full bg-white border border-line flex items-center justify-center text-navy text-xs group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-colors">
                  ›
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
