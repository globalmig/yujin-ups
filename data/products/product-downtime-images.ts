// 출처: public/image/products/downtime/ (다운타임 리스크 사진)
// 조회 키는 기본적으로 categoryId이며, 같은 카테고리에 모델이 여러 개인 경우(server-ups-hp3900c 등) imageKey로 구분합니다.
// 카테고리마다 하나의 세트(1~3)를 고정 배정해 같은 페이지 안에서는 통일감을 주고,
// 서로 다른 카테고리끼리는 겹치지 않도록 분산했습니다. 정의되지 않은 카테고리는 DowntimeRiskSection의 기본(default-*) 이미지로 대체됩니다.

export interface ProductDowntimeImages {
  serverRoom: string;
  surgery: string;
  infra: string;
  medical: string;
}

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
  // server-ups 계열, AVR, 주파수 변환기, 배터리는 아직 전용 사진이 없어
  // DowntimeRiskSection의 기본(default-*) 이미지를 그대로 사용합니다.
};
