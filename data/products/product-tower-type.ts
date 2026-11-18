// 출처: docs/제품 카다로그/PC 서버용 UPS.pdf 1·2·4페이지 "KEY FEATURES" / "HP900C / HP3900C (TOWER-TYPE)" 주요특징
// 해당 카탈로그가 있는 카테고리만 정의하며, 없는 카테고리는 섹션 자체가 렌더링되지 않습니다.
// 조회 키는 기본적으로 categoryId이며, 같은 카테고리에 모델이 여러 개인 경우(server-ups-hp3900c 등) towerKey로 구분합니다.

export interface ProductTowerType {
  badge: string;
  title: string;
  image: string;
  items: string[];
}

export const productTowerTypeMap: Partial<Record<string, ProductTowerType>> = {
  "server-ups": {
    badge: "HP900C (TOWER-TYPE)",
    title: "HP900C Series의 제품 특징",
    image: "/image/products/hp900c-tower.png",
    items: [
      "고 주파수 및 이중전환의 온라인 기술",
      "디지털 마이크로 프로세서 컨트롤",
      "배터리 없이도 UPS 시동 가능",
      "워밍업이 필요없는 시동",
      "모니터링 소프트웨어의 RS-232 통신",
      "입력전원의 넓은 범위",
      "EMI/RFI 노이즈 필터",
      "옵션의 SNMP카드 슬롯",
      "부하분담 병렬운전 가능",
    ],
  },

  "server-ups-rm": {
    badge: "HP900C-RM (RACK MOUNT-TYPE)",
    title: "HP900C-RM Series의 제품 특징",
    image: "/image/products/hp900c-rm.png",
    items: [
      "고주파수 및 이중전환의 온라인 기술",
      "디지털 마이크로 프로세서 컨트롤",
      "입력전원의 넓은 범위",
      "배터리 없이도 UPS 시동가능",
      "워밍업이 필요없는 시동",
      "더욱 향상된 배터리 관리",
      "UPS 정지 시에도 배터리 자동 충전",
      "피뢰 및 써지로부터의 보호기능",
      "부하량에 따른 팬 스피드의 자동 조절",
      "네트워크, 팩스, 모뎀의 써지 보호기능",
      "옵션의 배터리사용 연장 팩",
      "배터리 전압 디스플레이",
      "부하 용량 디스플레이",
      "EM/RFI 노이즈 필터",
      "모니터링 소프트웨어 RS-232통신",
      "옵션의 SNMP 카드 슬롯",
      "EPS 기능(옵션)",
      "부하 분담 병렬 운전가능(6 KVA이상)",
    ],
  },

  "server-ups-hp3900c": {
    badge: "HP3900C (TOWER-TYPE)",
    title: "HP3900C Series의 제품 특징",
    image: "/image/products/hp3900c-tower.png",
    items: [
      "더욱 향상된 배터리 관리",
      "UPS 정지 시에도 배터리 자동 충전",
      "피뢰 및 써지로부터의 보호기능",
      "부하량에 따른 팬스피드의 자동 조절",
      "네트워크, 팩스, 모뎀의 써지 보호기능",
      "모니터링 소프트웨어 RS-232통신",
      "부하 분담 병렬 운전가능",
    ],
  },
};
