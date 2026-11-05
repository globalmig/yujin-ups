export interface Project {
  image: string;
  alt: string;
  name: string;
  spec: string;
  field: string;
}

export const projects: Project[] = [
  { image: "/image/home/project-bank.jpg", alt: "금융기관 UPS 납품 현장", name: "OO은행 본점", spec: "100KVA", field: "금융기관" },
  { image: "/image/home/project-datacenter.jpg", alt: "데이터센터 UPS 납품 현장", name: "OO생명 데이터센터", spec: "200KVA", field: "데이터센터" },
  { image: "/image/home/project-university.jpg", alt: "대학교 UPS 납품 현장", name: "OO대학교 전산실", spec: "80KVA", field: "공공기관" },
  { image: "/image/home/project-factory.jpg", alt: "공장 UPS 납품 현장", name: "OO공장 생산라인", spec: "100KVA", field: "산업현장" },
  { image: "/image/home/project-public.jpg", alt: "공공기관 UPS 납품 현장", name: "OO시청 전산실", spec: "100KVA", field: "공공기관" },
];

export interface FieldSummary {
  label: string;
  desc: string;
  image: string;
}

export const projectFields: FieldSummary[] = [
  { label: "금융기관", desc: "은행·증권 등 중요시설용 중대형 UPS 공급", image: "/image/home/use-finance.jpg" },
  { label: "공공기관", desc: "관공서·대학교 등 정부기관 전산 설비 대응", image: "/image/home/use-public.jpg" },
  { label: "산업현장", desc: "공장·생산라인의 안정적인 전력 보호", image: "/image/home/use-industrial.jpg" },
  { label: "데이터센터", desc: "대용량 전산실·IDC 무정전 전원 공급", image: "/image/home/use-datacenter.jpg" },
];
