import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { productFieldsMap, type ProductFieldIcon } from "@/data/products/product-fields";
import { productContentMap } from "@/data/products/product-content";

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

function ServerIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="6" rx="1.2" />
      <rect x="3" y="14" width="18" height="6" rx="1.2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v4M12 11.5 6.5 17M12 11.5l5.5 5.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const defaultFields = [
  { icon: DatacenterIcon, title: "데이터센터", sub: "서버, 네트워크, 스토리지 보호", image: "/image/products/fields/data-center-1.jpg" },
  { icon: BankIcon, title: "금융기관", sub: "거래 시스템, 데이터 무중단 운영", image: "/image/products/fields/finance.jpg" },
  { icon: FactoryIcon, title: "산업현장 / 공장", sub: "자동화 설비, 로봇, PLC 보호", image: "/image/products/fields/industrial-site.jpg" },
  { icon: BuildingIcon, title: "공공기관", sub: "공공 서비스 시스템 안정 운영", image: "/image/home/use-public.jpg" },
  { icon: MonitorIcon, title: "서버 / 전산실", sub: "서버, 네트워크 장비 안정 운영", image: "/image/products/fields/server-room.jpg" },
];

const fieldIcons: Record<ProductFieldIcon, () => React.ReactElement> = {
  server: ServerIcon,
  network: NetworkIcon,
  industrial: FactoryIcon,
  computerRoom: MonitorIcon,
  public: BuildingIcon,
  datacenter: DatacenterIcon,
  critical: ShieldIcon,
};

export default function ProductFieldsSection({ categoryId }: { categoryId: string }) {
  const overrideFields = productFieldsMap[categoryId];
  const items = overrideFields
    ? overrideFields.map(({ icon, title, sub, image }) => ({ Icon: fieldIcons[icon], title, sub, image }))
    : defaultFields.map(({ icon: Icon, title, sub, image }) => ({ Icon, title, sub, image }));
  const gridColsClass = items.length === 3 ? "lg:grid-cols-3" : items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";

  const modelTitle = productContentMap[categoryId]?.hero.title;

  return (
    <section className="py-16 md:py-30 bg-navy-dark">
      <Container>
        <SectionTitle
          light
          eyebrow="APPLICATION CASES"
          title={modelTitle ? `${modelTitle} 적용 사례` : "UPS가 필수인 분야"}
          description="다양한 산업 현장에서 UPS는 선택이 아닌 필수입니다. 실제 설치 사진이 아닌 참고 이미지가 포함되어 있습니다."
        />
        <div className={`grid grid-cols-2 sm:grid-cols-3 ${gridColsClass} gap-4 md:gap-5`}>
          {items.map(({ Icon, title, sub, image }) => (
            <div key={title}>
              <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden bg-white/5 mb-4">
                <Image src={image} alt={title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
                <span className="absolute left-3 bottom-3 w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center">
                  <Icon />
                </span>
                <span className="absolute right-2 top-2 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold text-white/90">
                  참고 이미지
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
