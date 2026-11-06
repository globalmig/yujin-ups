import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    image: "/image/home/feature-design.jpg",
    alt: "UPS 설계 작업",
    title: "30년 UPS 전문기업",
    desc: "1996년부터 UPS 한 분야에 집중하여 축적한 기술력과 노하우",
  },
  {
    image: "/image/home/feature-delivery.jpg",
    alt: "고객 납품 협의",
    title: "다양한 납품 경험",
    desc: "금융기관, 공공기관, 기업, 산업현장, 데이터센터 등 다양한 분야에 납품",
  },
  {
    image: "/image/home/feature-product.jpg",
    alt: "UPS 제품",
    title: "1KVA ~ 200KVA",
    desc: "소형 UPS부터 대용량 UPS까지 고객 환경에 맞는 제품 제공",
  },
  {
    image: "/image/home/feature-engineer.jpg",
    alt: "UPS 기술 점검",
    title: "토탈 솔루션 제공",
    desc: "설계, 제조, 설치, 유지보수까지 원스톱 토탈 솔루션 제공",
  },
  {
    image: "/image/home/feature-service.jpg",
    alt: "UPS 유지보수",
    title: "국산·수입 UPS 유지보수",
    desc: "다양한 브랜드의 UPS 점검·정비·유지보수 가능",
  },
];

export default function WhyUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-20">
      <Container>
        <SectionTitle eyebrow="WHY US" title="왜 유진전원시스템인가?" description="30년의 경험과 검증된 기술로 고객의 소중한 전원을 책임집니다." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {features.map((f) => (
            <article key={f.title} className="border border-line rounded-md overflow-hidden bg-white shadow-sm">
              <div className="relative h-32 md:h-36 bg-surface">
                <Image src={f.image} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              </div>
              <div className="text-center px-3 py-4">
                <h3 className="text-sm md:text-base font-bold text-navy mb-1.5">{f.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
