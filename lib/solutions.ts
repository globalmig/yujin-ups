export interface Solution {
  title: string;
  capacity: string;
  image: string;
  href: string;
}

export const solutions: Solution[] = [
  { title: "PC 서버용 UPS", capacity: "1~12kVA", image: "/image/products/fields/server-rack.jpg", href: "/products/server-ups" },
  { title: "가정 / 소규모 사무실", capacity: "3~15kVA", image: "/image/products/fields/office.jpg", href: "/products/single-ups" },
  { title: "서버 / 전산실", capacity: "10~30kVA", image: "/image/products/fields/server-room.jpg", href: "/products/three-single-ups" },
  { title: "산업현장 / 공장", capacity: "10~120kVA", image: "/image/home/use-industrial.jpg", href: "/products/three-three-ups" },
  { title: "금융기관 / 중요시설", capacity: "10~120kVA", image: "/image/products/fields/finance.jpg", href: "/products/three-three-ups" },
  { title: "공공기관 / 정부기관", capacity: "10~120kVA", image: "/image/home/use-public.jpg", href: "/products/three-three-ups" },
  { title: "데이터센터", capacity: "10~120kVA", image: "/image/home/use-datacenter.jpg", href: "/products/three-three-ups" },
];
 