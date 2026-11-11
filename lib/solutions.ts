export interface Solution {
  title: string;
  capacity: string;
  image: string;
  href: string;
}

export const solutions: Solution[] = [
  { title: "가정 / 소규모 사무실", capacity: "1~3KVA", image: "/image/home/use-home.jpg", href: "/products/single-ups" },
  { title: "서버 / 전산실", capacity: "5~20KVA", image: "/image/home/use-server.jpg", href: "/products/server-ups" },
  { title: "산업현장 / 공장", capacity: "10~100KVA", image: "/image/home/use-industrial.jpg", href: "/products/three-single-ups" },
  { title: "금융기관 / 중요시설", capacity: "10~200KVA", image: "/image/home/use-finance.jpg", href: "/products/three-three-ups" },
  { title: "공공기관 / 정부기관", capacity: "10~200KVA", image: "/image/home/use-public.jpg", href: "/products/three-single-ups" },
  { title: "데이터센터", capacity: "20~200KVA", image: "/image/home/use-datacenter.jpg", href: "/products/three-three-ups" },
];
