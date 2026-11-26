export interface CapacityLineup {
  category: string;
  io: string;
  capacity: string;
  model: string;
  image: string;
  href: string;
}

export const capacityLineup: CapacityLineup[] = [
  { category: "단상 UPS", io: "단상 입력 → 단상 출력", capacity: "3~15kVA", model: "SPT-301K Series", image: "/image/products/single-ups-feature.png", href: "/products/single-ups" },
  { category: "삼상 / 단상 UPS", io: "삼상 입력 → 단상 출력", capacity: "10~30kVA", model: "SPT-3000 Series", image: "/image/products/spt-3000.png", href: "/products/three-single-ups" },
  { category: "삼상 / 삼상 UPS", io: "삼상 입력 → 삼상 출력", capacity: "10~120kVA", model: "SPT-3300 Series", image: "/image/products/three-three-ups-feature.png", href: "/products/three-three-ups" },
  { category: "PC서버용 UPS", io: "단상 입력 → 단상 출력", capacity: "1~12kVA", model: "HP-900C Series", image: "/image/products/hp900c-rm.png", href: "/products/server-ups" },
];
