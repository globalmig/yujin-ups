export interface Solution {
  title: string;
  capacity: string;
  image: string;
}

export const solutions: Solution[] = [
  { title: "가정 / 소규모 사무실", capacity: "1~3KVA", image: "/image/home/use-home.jpg" },
  { title: "서버 / 전산실", capacity: "1~20KVA", image: "/image/home/use-server.jpg" },
  { title: "산업현장 / 공장", capacity: "10~100KVA", image: "/image/home/use-industrial.jpg" },
  { title: "금융기관 / 중요시설", capacity: "10~200KVA", image: "/image/home/use-finance.jpg" },
  { title: "공공기관 / 정부기관", capacity: "10~200KVA", image: "/image/home/use-public.jpg" },
  { title: "데이터센터", capacity: "20~200KVA", image: "/image/home/use-datacenter.jpg" },
];
