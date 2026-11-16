// 출처: docs/제품 카다로그/UPS 삼상-단상 (제품사양서)-A.png 의 "후면 구성 안내" 섹션
// 해당 카탈로그가 있는 카테고리만 정의하며, 없는 카테고리는 섹션 자체가 렌더링되지 않습니다.

export interface RearConfigItem {
  number: number;
  label: string;
}

export interface ProductRearConfig {
  image: string;
  items: RearConfigItem[];
}

export const productRearConfigMap: Partial<Record<string, ProductRearConfig>> = {
  "three-single-ups": {
    image: "/image/products/SPT-100AK_three-single-ups/9_rear-config-cutout.png",
    items: [
      { number: 1, label: "방열구" },
      { number: 2, label: "DB9 통신 포트" },
      { number: 3, label: "전원 스위치" },
      { number: 4, label: "단자대" },
      { number: 5, label: "배선 인입구" },
      { number: 6, label: "이동용 바퀴" },
    ],
  },
};
