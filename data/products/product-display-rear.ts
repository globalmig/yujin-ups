// 출처: docs/제품 카다로그/PC 서버용 UPS.pdf 2페이지 "Battery Pack 장착예(디스플레이)" · "후면" 안내
// 해당 카탈로그가 있는 카테고리만 정의하며, 없는 카테고리는 섹션 자체가 렌더링되지 않습니다.

export interface DisplayRearItem {
  number: number;
  label: string;
}

export interface ProductDisplayRear {
  displayImage: string;
  rearImage: string;
  items: DisplayRearItem[];
}

export const productDisplayRearMap: Partial<Record<string, ProductDisplayRear>> = {
  "server-ups": {
    displayImage: "/image/products/hp900c-tower-display.png",
    rearImage: "/image/products/hp900c-tower-rear.png",
    items: [
      { number: 1, label: "LCD Display" },
      { number: 2, label: "ON / OFF 스위치" },
      { number: 3, label: "자기진단 / 선택버튼" },
      { number: 4, label: "메뉴버튼" },
      { number: 5, label: "정상 LED (초록색)" },
      { number: 6, label: "경보 LED (노란색)" },
      { number: 7, label: "비정상 LED (빨간색)" },
      { number: 8, label: "입력, 배터리, 출력, 부하, 온도 등 선택" },
      { number: 9, label: "부하량, 배터리 충전량, 결함표시" },
      { number: 10, label: "'ON LINE', 'ON BATT', 'ON BPS'의 모드 표시" },
    ],
  },
};
