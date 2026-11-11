import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

function DatacenterIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="7" rx="1.5" />
      <rect x="2" y="14" width="20" height="7" rx="1.5" />
      <path d="M6 6.5h.01M6 17.5h.01" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10h18M5 10v9M9 10v9M15 10v9M19 10v9M2 21h20M12 2 3 7h18l-9-5z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22v-4h6v4M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21V10l6 4v-4l6 4V7l7 4.5V21H2z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

const fields = [
  { icon: DatacenterIcon, title: "데이터센터", sub: "서버, 네트워크, 스토리지 보호", image: "/image/home/use-datacenter.jpg" },
  { icon: BankIcon, title: "금융기관", sub: "거래 시스템, 데이터 무중단 운영", image: "/image/home/use-finance.jpg" },
  { icon: FactoryIcon, title: "산업현장 / 공장", sub: "자동화 설비, 로봇, PLC 보호", image: "/image/home/use-industrial.jpg" },
  { icon: BuildingIcon, title: "공공기관", sub: "공공 서비스 시스템 안정 운영", image: "/image/home/use-public.jpg" },
  { icon: MonitorIcon, title: "서버 / 전산실", sub: "서버, 네트워크 장비 안정 운영", image: "/image/home/use-server.jpg" },
];

export default function ProductFieldsSection() {
  return (
    <section className="py-16 md:py-30 bg-navy-dark">
      <Container>
        <SectionTitle light eyebrow="APPLICATION FIELDS" title="UPS가 필수인 분야" description="다양한 산업에서 UPS는 선택이 아닌 필수입니다." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {fields.map(({ icon: Icon, title, sub, image }) => (
            <div key={title}>
              <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden bg-white/5 mb-4">
                <Image src={image} alt={title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
                <span className="absolute left-3 bottom-3 w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center">
                  <Icon />
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
