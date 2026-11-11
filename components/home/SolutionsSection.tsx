import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { solutions } from "@/lib/solutions";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-30 bg-surface scroll-mt-20">
      <Container>
        <SectionTitle eyebrow="UPS SOLUTIONS" title="용도별 UPS 솔루션" description="사용 환경에 맞는 최적의 UPS를 제안해 드립니다." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              aria-label={`${s.title} UPS 제품 보기`}
              className="group block bg-white rounded-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative w-full aspect-4/5">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 50vw, 16vw" className="object-cover" />
                <span className="absolute right-2 bottom-2 h-10 rounded-full bg-white border border-line flex items-center text-navy group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-colors overflow-hidden">
                  <span className="max-w-0 group-hover:max-w-24 group-hover:pl-3 overflow-hidden whitespace-nowrap text-xs font-medium transition-all duration-300">
                    제품 보기
                  </span>
                  <span className="w-10 h-10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="text-center px-3 pt-4 pb-2">
                <h3 className="text-lg md:text-xl font-bold text-navy mb-1">{s.title}</h3>
                <p className="text-xs text-muted">{s.capacity}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/contact" variant="primary">
            UPS 견적 요청하기 →
          </Button>
        </div>
      </Container>
    </section>
  );
}
