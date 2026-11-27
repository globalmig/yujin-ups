import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import { serverUpsModels } from "@/data/products/server-ups-models";

export const metadata: Metadata = {
  title: "PC서버용 UPS 제품소개",
  description: "유진전원시스템의 PC서버용 UPS(HP900C, HP900C-RM, HP3900C) 모델 라인업을 소개합니다. 30년 기술력의 고품질 전원장치.",
  alternates: { canonical: "https://www.upscom.co.kr/products/server-ups" },
  openGraph: {
    title: "PC서버용 UPS 제품소개 | 유진전원시스템",
    description: "서버, 네트워크 장비, 의료장비를 위한 PC서버용 UPS 모델 라인업",
    url: "https://www.upscom.co.kr/products/server-ups",
  },
};

export default function ServerUpsPage() {
  return (
    <>
      <ProductDetailHero categoryId="server-ups" />

      <section className="py-16 md:py-30 bg-white">
        <Container>
          <SectionTitle
            eyebrow="MODEL LINEUP"
            title="PC서버용 UPS 모델 라인업"
            description="용량과 설치 환경에 맞는 모델을 선택하세요. 카드를 클릭하면 상세 사양을 확인할 수 있습니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {serverUpsModels.map((model) => (
              <Link
                key={model.id}
                href={model.href}
                className="flex flex-col rounded-lg border border-line overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                <div className="bg-navy text-white text-center text-base md:text-lg font-bold py-3 px-2">{model.badge}</div>
                <div className="px-5 pt-5 pb-6">
                  <p className="text-center text-lg md:text-xl font-bold text-navy mb-3 md:mb-5">{model.title}</p>
                  <div className="relative w-full aspect-4/3 rounded-md overflow-hidden mb-4 md:mb-7 bg-[#f5f6f8]">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {model.features.map((f) => (
                      <li key={f} className="text-sm text-muted leading-relaxed">
                        · {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
