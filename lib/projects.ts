export interface Project {
  image: string;
  alt: string;
  name: string;
  spec: string;
  field: string;
}

export const projects: Project[] = [
  { image: "/image/home/project-bank.jpg", alt: "금융기관 UPS 납품 현장", name: "하나HSBC생명보험(주)", spec: "60KVA", field: "금융기관" },
  { image: "/image/home/project-datacenter.png", alt: "데이터센터 UPS 납품 현장", name: "다음커뮤니케이션", spec: "100KVA", field: "데이터센터" },
  { image: "/image/home/project-university.png", alt: "대학교 UPS 납품 현장", name: "중앙대학교", spec: "50KVA", field: "공공기관" },
  { image: "/image/home/project-factory.png", alt: "공장 UPS 납품 현장", name: "LG디스플레이 제2공장", spec: "80KVA", field: "산업현장" },
  { image: "/image/home/project-public.png", alt: "공공기관 UPS 납품 현장", name: "화성시청", spec: "30KVA", field: "공공기관" },
];

export interface FieldSummary {
  label: string;
  desc: string;
  image: string;
}

export const projectFields: FieldSummary[] = [
  { label: "금융기관", desc: "은행·증권 등 중요시설용 중대형 UPS 공급", image: "/image/home/project-university.png" },
  { label: "공공기관", desc: "관공서·대학교 등 정부기관 전산 설비 대응", image: "/image/home/project-public.png" },
  { label: "산업현장", desc: "공장·생산라인의 안정적인 전력 보호", image: "/image/home/project-factory.png" },
  { label: "데이터센터", desc: "대용량 전산실·IDC 무정전 전원 공급", image: "/image/home/project-datacenter.png" },
];
