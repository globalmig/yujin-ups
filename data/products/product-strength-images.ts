// 출처: public/image/products/strength/ (제품 강점 포인트 사진)
// 조회 키는 기본적으로 categoryId이며, 같은 카테고리에 모델이 여러 개인 경우(server-ups-hp3900c 등) imageKey로 구분합니다.
// 카테고리마다 하나의 세트(1~3)를 고정 배정해 같은 페이지 안에서는 통일감을 주고,
// 서로 다른 카테고리끼리는 겹치지 않도록 분산했습니다. 정의되지 않은 카테고리는 ProductStrengthPointsSection의 기본(default-*) 이미지로 대체됩니다.

export interface ProductStrengthImages {
  zeroTransfer: string;
  intelligentControl: string;
  compact: string;
  sineWave: string;
}

const set1: ProductStrengthImages = {
  zeroTransfer: "/image/products/strength/zero-transfer-1.jpg",
  intelligentControl: "/image/products/strength/intelligent-control-1.jpg",
  compact: "/image/products/strength/compact-1.jpg",
  sineWave: "/image/products/strength/sine-wave-1.jpg",
};

const set2: ProductStrengthImages = {
  zeroTransfer: "/image/products/strength/zero-transfer-2.jpg",
  intelligentControl: "/image/products/strength/intelligent-control-2.jpg",
  compact: "/image/products/strength/compact-2.jpg",
  sineWave: "/image/products/strength/sine-wave-2.jpg",
};

const set3: ProductStrengthImages = {
  zeroTransfer: "/image/products/strength/zero-transfer-3.jpg",
  intelligentControl: "/image/products/strength/intelligent-control-3.jpg",
  compact: "/image/products/strength/compact-3.png",
  sineWave: "/image/products/strength/sine-wave-3.jpg",
};

export const productStrengthImagesMap: Partial<Record<string, ProductStrengthImages>> = {
  "single-ups": set1,
  "three-single-ups": set2,
  "three-three-ups": set3,
  // server-ups 계열, AVR, 주파수 변환기, 배터리는 아직 전용 사진이 없어
  // ProductStrengthPointsSection의 기본(default-*) 이미지를 그대로 사용합니다.
};
