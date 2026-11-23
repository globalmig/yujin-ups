// 출처: public/image/products/downtime/ (다운타임 리스크 사진) + public/image/ (기존 기본 이미지 다운손실 사례01~04)
// 조회 키는 기본적으로 categoryId이며, 같은 카테고리에 모델이 여러 개인 경우(server-ups-hp3900c 등) imageKey로 구분합니다.
// 카테고리마다 하나의 세트(0~3)를 고정 배정해 같은 페이지 안에서는 통일감을 주고,
// 서로 다른 카테고리끼리는 겹치지 않도록 분산했습니다. 정의되지 않은 카테고리는 DowntimeRiskSection의 기본 이미지로 대체됩니다.

export interface ProductDowntimeImages {
  serverRoom: string;
  surgery: string;
  infra: string;
  medical: string;
}

// Set 0: 기존에 사용하던 기본(다운손실 사례01~04) 이미지
const set0: ProductDowntimeImages = {
  serverRoom: "/image/다운손실%20사례01.png",
  surgery: "/image/다운손실%20사례02.png",
  infra: "/image/다운손실%20사례03.png",
  medical: "/image/다운손실%20사례04.png",
};

const set1: ProductDowntimeImages = {
  serverRoom: "/image/products/downtime/server-room-1.jpg",
  surgery: "/image/products/downtime/surgery-1.jpg",
  infra: "/image/products/downtime/infra-1.jpg",
  medical: "/image/products/downtime/medical-1.jpg",
};

const set2: ProductDowntimeImages = {
  serverRoom: "/image/products/downtime/default-server-room.png",
  surgery: "/image/products/downtime/default-surgery.png",
  infra: "/image/products/downtime/default-infra.png",
  medical: "/image/products/downtime/default-medical.png",
};

const set3: ProductDowntimeImages = {
  serverRoom: "/image/products/fields/server-room.jpg",
  surgery: "/image/products/downtime/surgery-3.jpg",
  infra: "/image/products/downtime/infra-3.jpg",
  medical: "/image/products/downtime/medical-3.jpg",
};

export const productDowntimeImagesMap: Partial<Record<string, ProductDowntimeImages>> = {
  "single-ups": set1,
  "three-single-ups": set2,
  "three-three-ups": set3,
  // PC용 서버 UPS 계열은 기존 기본(다운손실 사례01~04) 이미지를 공통으로 사용
  "server-ups": set0,
  "server-ups-hp3900c": set0,
  "server-ups-rm": set0,
  // 나머지 메뉴는 우선 임시로 PC용 서버 UPS와 동일하게 유지
  avr: set0,
  frequency: set0,
  "battery-es": set0,
  "battery-rp": set0,
};
