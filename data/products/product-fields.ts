// 출처: 제품별 카탈로그의 "적용 분야" 문구를 정리
// 카탈로그가 아직 없는 카테고리는 productFieldsMap에 항목을 추가하지 않으며,
// 이 경우 ProductFieldsSection은 공통 기본 목록으로 대체 표시합니다.
// 공공기관 항목은 전용 사진이 준비되기 전까지 사용하는 임시 이미지입니다.

export type ProductFieldIcon = "server" | "network" | "industrial" | "computerRoom" | "public" | "datacenter" | "critical";

export interface ProductField {
  icon: ProductFieldIcon;
  title: string;
  sub: string;
  image: string;
}

export const productFieldsMap: Partial<Record<string, ProductField[]>> = {
  "single-ups": [
    { icon: "server", title: "서버", sub: "서버 장비 전원 보호", image: "/image/products/fields/server-rack.jpg" },
    { icon: "network", title: "네트워크", sub: "네트워크 장비 안정 운영", image: "/image/products/fields/network.jpg" },
    { icon: "industrial", title: "산업설비", sub: "산업 자동화 설비 보호", image: "/image/products/fields/industrial-process-1.jpg" },
    { icon: "computerRoom", title: "전산실", sub: "전산실 시스템 무중단 운영", image: "/image/products/fields/computer-room-1.jpg" },
  ],
  "three-single-ups": [
    { icon: "industrial", title: "핵심 산업 공정", sub: "삼상 전원 기반 핵심 공정 설비 보호", image: "/image/products/fields/industrial-process-2.jpg" },
    { icon: "computerRoom", title: "전산실", sub: "전산실 시스템 무중단 운영", image: "/image/products/fields/computer-room-2.jpg" },
    { icon: "network", title: "네트워크 장비", sub: "네트워크·통신 장비 안정 운영", image: "/image/products/fields/network.jpg" },
    { icon: "public", title: "공공기관", sub: "공공 서비스 시스템 안정 운영", image: "/image/home/use-public.jpg" },
  ],
  "three-three-ups": [
    { icon: "computerRoom", title: "중소형 전산실", sub: "중소형 전산실 시스템 무중단 운영", image: "/image/products/fields/computer-room-3.jpg" },
    { icon: "datacenter", title: "데이터센터", sub: "서버·네트워크·스토리지 보호", image: "/image/products/fields/data-center-2.jpg" },
    { icon: "industrial", title: "산업 공정", sub: "삼상 전원 기반 산업 공정 설비 보호", image: "/image/products/fields/robotic-equipment.jpg" },
    { icon: "critical", title: "핵심 설비", sub: "주요 핵심 설비 무정전 보호", image: "/image/products/fields/core-equipment.jpg" },
  ],
};
