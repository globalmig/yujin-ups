// PC서버용 UPS(server-ups) 카테고리의 모델 라인업 카드 데이터
// /products/server-ups(목록) 페이지에서 카드로 노출되며, 클릭 시 /products/server-ups/[model] 상세 페이지로 이동합니다.

export interface ServerUpsModel {
  id: string;
  badge: string;
  title: string;
  image: string;
  features: string[];
  href: string;
}

export const serverUpsModels: ServerUpsModel[] = [
  {
    id: "hp900c",
    badge: "HP900C (TOWER-TYPE)",
    title: "HP900C Series · 1~12KVA",
    image: "/image/products/hp900c-tower.png",
    features: [
      "고 주파수 및 이중전환의 온라인 기술",
      "디지털 마이크로 프로세서 컨트롤",
      "배터리 없이도 UPS 시동 가능",
      "부하분담 병렬운전 가능",
    ],
    href: "/products/server-ups/hp900c",
  },
  {
    id: "hp900c-rm",
    badge: "HP900C-RM (RACK MOUNT-TYPE)",
    title: "HP900C-RM Series · 10~20KVA",
    image: "/image/products/hp900c-rm.png",
    features: [
      "서버랙 설치에 최적화된 랙마운트 디자인",
      "고 주파수 및 이중전환의 온라인 기술",
      "배터리 없이도 UPS 시동 가능",
      "부하분담 병렬운전 가능",
    ],
    href: "/products/server-ups/hp900c-rm",
  },
  {
    id: "hp3900c",
    badge: "HP3900C (TOWER-TYPE)",
    title: "HP3900C Series · 10~20KVA",
    image: "/image/products/hp3900c.png",
    features: [
      "더욱 향상된 배터리 관리",
      "UPS 정지 시에도 배터리 자동 충전",
      "부하량에 따른 팬스피드의 자동 조절",
      "부하 분담 병렬 운전가능",
    ],
    href: "/products/server-ups/hp3900c",
  },
];
