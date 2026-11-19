// 출처: public/image/products/<folder>/ 내 제품별 상세페이지 디자인 이미지(1_product-profile 등)의 실제 카피를 정리
// 대상 카테고리는 lib/products.ts의 categories / productImageMap과 1:1로 대응됨

export interface ProductHighlight {
  value: string;
  label: string;
}

export type FeatureIcon = "shield" | "activity" | "server" | "clock";

export interface ProductFeatureBarItem {
  icon: FeatureIcon;
  title: string;
  desc: string;
}

export interface ProductFeatureItem {
  title: string;
  desc: string;
}

export interface ProductContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: ProductHighlight[];
  };
  featureBar: ProductFeatureBarItem[];
  /** 제품 특징 섹션(사진 | 특징 목록)에서 사용하는 대표 제품 사진 */
  image: string;
  /** 제품 특징 섹션에서 대표 사진 바로 아래에 추가로 보여줄 사진(예: 후면 사진) */
  secondaryImage?: string;
  features: {
    description: string;
    items: ProductFeatureItem[];
  };
}

export const productContentMap: Record<string, ProductContent> = {
  "single-ups": {
    hero: {
      eyebrow: "On-Line UPS · 1:1 Phase",
      title: "SPT-301K Series",
      description:
        "서버, 스토리지, 워크스테이션, 네트워크 장비를 위한 Pure On-Line 더블컨버전 UPS로, 순수 정현파 출력과 무순단(0ms) 절체로 안정적인 전원을 공급합니다.",
      highlights: [
        { value: "3~15kVA", label: "용량 라인업" },
        { value: "0ms", label: "무순단 절체 시간" },
        { value: "Pure On-Line", label: "더블 컨버전 방식" },
      ],
    },
    featureBar: [
      { icon: "shield", title: "Pure On-Line 더블컨버전", desc: "IGBT 인버터 기반 순수 온라인 방식으로 안정적인 정현파 출력" },
      { icon: "clock", title: "무순단 절체 0ms", desc: "정전 발생 시 끊김 없는 절체, Off 모드에서도 자동 충전" },
      { icon: "server", title: "서버·네트워크 장비 보호", desc: "서버, 스토리지, 워크스테이션, 네트워크 장비 전용 설계" },
      { icon: "activity", title: "서지·노이즈 보호", desc: "서지, 회로보호, 과부하 보호 및 EMI·RFI 노이즈 필터링" },
    ],
    image: "/image/products/single-ups-feature.png",
    secondaryImage: "/image/products/single-ups-rear.png",
    features: {
      description: "Pure On-Line 더블컨버전 방식과 다양한 보호 기능으로 서버·네트워크 환경에 최적화된 안정성을 제공합니다.",
      items: [
        { title: "Pure On-Line 더블컨버전", desc: "입력 전원을 항상 정류·인버터로 변환해 순수 정현파를 출력" },
        { title: "무순단 절체 (0ms)", desc: "정전 시에도 끊김 없이 배터리로 전환, Off 모드에서도 자동 충전" },
        { title: "배터리 Hot-swap 지원", desc: "무정전 상태로 배터리 교체가 가능" },
        { title: "강제풍냉식 냉각", desc: "서지·회로보호·과부하 보호 기능 내장" },
        { title: "부하 및 배터리 상태 표시", desc: "LCD로 운전상태·입출력 전압/주파수·배터리전압·부하량·온도를, LED로 고장·저전압·과부하·Bypass 상태를 실시간 확인" },
        { title: "SNMP 카드(옵션)", desc: "원격 감시 및 네트워크 모니터링 지원" },
        { title: "백업시간 확장 상담", desc: "설치 환경에 맞춰 배터리 증설로 백업시간 연장 상담 가능" },
        { title: "설치 환경 맞춤 용량 선정", desc: "설치 환경과 부하 용량에 맞는 최적 모델을 상담을 통해 선정" },
      ],
    },
  },

  "three-single-ups": {
    hero: {
      eyebrow: "On-Line UPS · 삼상/단상",
      title: "SPT-3000 Series",
      description:
        "중소형 전산실과 공장 설비를 위한 모듈형 온라인 UPS로, 3-Level True On-line Double Conversion 방식과 병렬 운전으로 자유로운 용량 확장이 가능합니다.",
      highlights: [
        { value: "최대 99%", label: "고효율 ECO MODE" },
        { value: "6대", label: "병렬 운전 지원" },
        { value: "7인치", label: "컬러 터치스크린 LCD" },
      ],
    },
    featureBar: [
      { icon: "shield", title: "3-Level 온라인 더블컨버전", desc: "VFI-SS-111 방식으로 안정적인 전원 품질 유지" },
      { icon: "activity", title: "고효율 ECO MODE", desc: "최대 효율 99%, 고입력역률 0.99 이상으로 운영비 절감" },
      { icon: "server", title: "병렬 운전 최대 6대", desc: "용량 증설이 자유로운 모듈형 설계" },
      { icon: "clock", title: "자가 진단 & 스마트 팬 제어", desc: "축전지 자가 진단 테스트와 온도별 스마트 팬 제어" },
    ],
    image: "/image/products/spt-3000.png",
    features: {
      description: "삼상 입력 · 단상 출력 구조의 On-Line 이중변환 UPS로, 순수 정현파 출력과 배터리·통신 관리 기능을 폭넓게 지원합니다.",
      items: [
        { title: "온라인 이중변환 방식", desc: "안정적인 전원 보호와 순수 정현파 출력(총고조파왜율 3% 미만)" },
        { title: "정현파 PWM 방식", desc: "절연 게이트 양극성 트랜지스터(IGBT) 인버터 설계 적용" },
        { title: "넓은 입력 전압 범위", desc: "다양한 전원 환경에서도 안정적으로 동작" },
        { title: "배터리 증설 / 발전기 연동", desc: "배터리 증설로 백업시간 확장, 발전기 연동 및 배터리 기동 기능 지원" },
        { title: "부하 및 배터리 상태 표시", desc: "부하·배터리 전력, 과부하·운전·배터리 상태를 실시간 표시" },
        { title: "배터리 관리 기능", desc: "장비 정지 상태에서도 자동 충전" },
        { title: "통신 및 네트워크 관리", desc: "직렬 통신 포트 지원, 네트워크 관리 카드 선택 사양 제공" },
      ],
    },
  },

  "three-three-ups": {
    hero: {
      eyebrow: "On-Line UPS · 삼상/삼상",
      title: "SPT-3300 Series",
      description:
        "산업현장, 데이터센터, 병원 등 대용량 설비를 위한 3상 온라인 UPS로, 고효율 ECO MODE와 병렬 확장으로 자유로운 용량 증설이 가능합니다.",
      highlights: [
        { value: "최대 96%+", label: "고효율 설계" },
        { value: "6대", label: "병렬 운전 지원" },
        { value: "SNMP/MODBUS", label: "통신 옵션 지원" },
      ],
    },
    featureBar: [
      { icon: "shield", title: "3-Level 온라인 더블컨버전", desc: "VFI-SS-111 방식으로 산업현장에 걸맞은 전원 품질 유지" },
      { icon: "activity", title: "고효율 ECO MODE", desc: "최대 효율 96%이상, 고입력역률 0.99 이상" },
      { icon: "server", title: "병렬 확장으로 용량 증설", desc: "최대 6대 병렬 운전으로 대용량 부하에도 대응" },
      { icon: "clock", title: "자가 진단 & 스마트 팬 제어", desc: "축전지 자가 진단과 온도별 스마트 팬 제어로 무중단 운영" },
    ],
    image: "/image/products/three-three-ups-feature.png",
    features: {
      description: "3상 입력 · 3상 출력 구조의 온라인 UPS로, 이중화 설계와 다양한 관리 기능으로 고신뢰 운영을 지원합니다.",
      items: [
        { title: "이중 변환 온라인 방식", desc: "3상 입력 · 3상 출력 구조의 온라인 더블컨버전 방식" },
        { title: "이중 CPU 제어", desc: "안정적인 제어를 위한 이중화 CPU 설계" },
        { title: "무순단 바이패스", desc: "유지보수용 수동 바이패스로 점검 중에도 무중단 운영" },
        { title: "LCD 화면 및 조작 패널", desc: "직관적인 상태 확인과 설정이 가능한 조작 패널" },
        { title: "원격 관리 및 자가 진단", desc: "원격 모니터링과 자가 진단 기능으로 선제적 관리" },
        { title: "병렬 이중화 운전", desc: "용량 증설과 이중화 구성이 자유로운 병렬 운전" },
        { title: "고효율 저소음 설계", desc: "고효율 운전으로 운영비 절감, 저소음 설계 적용" },
        { title: "넓은 입력 전압 범위", desc: "다양한 전원 환경에서도 안정적으로 동작" },
      ],
    },
  },

  "server-ups": {
    hero: {
      eyebrow: "High Frequency On-line UPS",
      title: "HP-900C Series",
      description:
        "서버, 네트워크 장비, 의료장비를 위한 고주파 온라인 UPS로, Zero Transfer Time과 지능형 제어로 무결점 비즈니스를 지원합니다.",
      highlights: [
        { value: "0ms", label: "Zero Transfer Time" },
        { value: "16비트 MCU", label: "지능형 전력 관리" },
        { value: "타워형", label: "컴팩트 설계" },
      ],
    },
    featureBar: [
      { icon: "clock", title: "Zero Transfer Time", desc: "정전 발생 시 0ms로 배터리 전환, Off 상태에서도 자동 충전" },
      { icon: "activity", title: "지능형 제어", desc: "16비트 MCU가 회로와 배터리 상태를 자가 점검해 최적 관리" },
      { icon: "server", title: "컴팩트 타워형 설계", desc: "좁은 공간에도 효율적으로 설치 가능" },
      { icon: "shield", title: "순수 정현파 출력", desc: "부하 장비 수명 연장과 안정적인 구동을 보장" },
    ],
    image: "/image/products/hp900c-rm.png",
    features: {
      description: "서버 다운, 의료 장비 정지 같은 치명적 손실을 막기 위한 4가지 핵심 기술을 갖추고 있습니다.",
      items: [
        { title: "Zero Transfer Time", desc: "정전 발생 시 0ms로 배터리 전환하고, UPS가 꺼진 상태에서도 자동 충전" },
        { title: "지능형 제어", desc: "전원을 켤 때마다 내부 회로와 배터리 상태를 자가 점검, 16비트 MCU로 최적의 전력 관리" },
        { title: "컴팩트 타워형", desc: "좁은 공간에도 효율적으로 설치" },
        { title: "순수 정현파 출력", desc: "부하된 장비 수명 연장 및 안정 구동으로 최상의 안정성 유지" },
      ],
    },
  },

  avr: {
    hero: {
      eyebrow: "Automatic Voltage Regulator",
      title: "단상 / 삼상 AVR",
      description:
        "RMS 컨버터 IC 기반 정밀 전압 검출로 입력 전압 변동에도 고안정 출력을 실현하는 차세대 전력 보호 솔루션입니다.",
      highlights: [
        { value: "0.048초", label: "응답속도" },
        { value: "반영구적", label: "수명" },
        { value: "완벽 보호", label: "서지·과전압·저전압" },
      ],
    },
    featureBar: [
      { icon: "shield", title: "RMS 컨버터 IC 채택", desc: "정밀한 전압 검출로 우수한 안정도를 실현" },
      { icon: "activity", title: "0.048초 응답속도", desc: "급격한 부하 변동에도 빠르게 대응" },
      { icon: "server", title: "저소음 설계", desc: "전산실 및 사무실에도 설치 가능" },
      { icon: "clock", title: "반영구적 수명", desc: "기계적 마모·소모 부품이 없어 보수 점검이 불필요" },
    ],
    image: "/image/products/avr.png",
    features: {
      description: "정밀한 전압 제어와 완벽한 절연으로 비교할 수 없는 안정성을 제공하는 차세대 전력 보호 솔루션입니다.",
      items: [
        { title: "RMS 컨버터 IC 채택", desc: "출력전압 검출회로에 적용해 안정도가 우수" },
        { title: "저소음 설계", desc: "전산실 및 사무실에도 설치 가능" },
        { title: "0.048초 이내 응답속도", desc: "매우 빠른 전압 보정 속도" },
        { title: "저발열 고효율 설계", desc: "높은 효율을 유지하며 발열을 최소화" },
        { title: "반영구적 수명", desc: "기계적 마모나 소모 부품이 없음" },
        { title: "완벽한 서지·과전압 보호", desc: "서지 및 과전압, 저전압으로부터 완벽하게 보호" },
      ],
    },
  },

  frequency: {
    hero: {
      eyebrow: "Frequency Converter",
      title: "NFS-2000 Series",
      description:
        "50Hz ↔ 60Hz 주파수 변환으로 수출입 장비와 해외 설비를 안정적으로 지원하는 유진전원시스템의 주파수 변환기입니다.",
      highlights: [
        { value: "±0.5Hz", label: "높은 주파수 정확도" },
        { value: "99%", label: "고효율 ECO MODE" },
        { value: "왜곡 없는", label: "정현파 출력" },
      ],
    },
    featureBar: [
      { icon: "activity", title: "높은 주파수 정확도", desc: "±0.5Hz의 정밀한 주파수 변환 성능" },
      { icon: "shield", title: "정전압 회로(AVR) 내장", desc: "안정적인 출력 전압을 자체적으로 유지" },
      { icon: "server", title: "수출입·해외 설비 대응", desc: "50Hz/60Hz 전환과 맞춤형 용량 설계 지원" },
      { icon: "clock", title: "신속한 부하 변동 대응", desc: "노이즈를 최소화한 양질의 전원으로 오작동 방지" },
    ],
    image: "/image/products/NFS-2000.png",
    features: {
      description: "정밀한 주파수 변환과 안정적인 출력으로 수출입 장비, 산업현장의 특수 설비를 지원합니다.",
      items: [
        { title: "높은 주파수 정확도 (±0.5Hz)", desc: "왜곡 없는 깨끗한 정현파로 부하 장비 안정성을 극대화" },
        { title: "정전압 회로(AVR) 내장", desc: "안정적인 출력 전압 유지" },
        { title: "주파수 임의 설정", desc: "사용 환경에 맞춰 주파수를 자유롭게 설정" },
        { title: "노이즈 최소화 설계", desc: "양질의 전원 공급으로 오작동 방지" },
        { title: "직관적인 조작 방식", desc: "쉽고 편리한 장비 설정" },
        { title: "강력한 부하 변동 대응", desc: "급격한 부하 변화에도 신속하게 대응" },
      ],
    },
  },

  "battery-es": {
    hero: {
      eyebrow: "Advanced Electrolyte Suspension AGM Battery",
      title: "ES Series",
      description:
        "소용량(1.2AH)부터 대용량(220AH)까지, 완전 무누액 밀폐를 실현한 장수명 UPS 전용 축전지입니다.",
      highlights: [
        { value: "1.2~220AH", label: "소용량~대용량 라인업" },
        { value: "완전 무누액", label: "밀폐형 설계" },
        { value: "최대 1000Cycles", label: "장수명 설계" },
      ],
    },
    featureBar: [
      { icon: "shield", title: "완전 무누액 밀폐형", desc: "AGM 시스템과 가스재결합 매커니즘으로 안전하게 밀폐" },
      { icon: "activity", title: "특수 Full-Ca 합금", desc: "감액 특성을 향상시켜 사용 기간 내내 무보수 실현" },
      { icon: "server", title: "ES·ESH·ESL·ESC 라인업", desc: "UPS, 통신, 예비전원 등 용도별 세분화 모델 제공" },
      { icon: "clock", title: "방폭구조 설계", desc: "과충전·과도한 가스 발생에도 안전한 안전밸브 장착" },
    ],
    image: "/image/products/es-series.png",
    features: {
      description: "UPS 시스템, 통신, 예비전원 등 다양한 용도에 맞춰 완전 무누액 밀폐를 실현한 장수명 축전지입니다.",
      items: [
        { title: "완전 무누액 밀폐형", desc: "소용량(1.2AH)부터 대용량(220AH)까지 폭넓은 라인업" },
        { title: "가스재결합 매커니즘", desc: "AGM(유리섬유매트) 시스템 기반의 밀폐형 전지" },
        { title: "특수 Full-Ca 합금", desc: "감액 특성 향상으로 사용 기간 내내 무보수 실현" },
        { title: "방폭구조 & 안전밸브", desc: "일시적 과충전에도 폭발하지 않는 안전 설계" },
        { title: "ES/ESH/ESL/ESC 세분화", desc: "Cycle Service, High Rate, Long Life 등 용도별로 최적화" },
        { title: "우수한 용량 지속성", desc: "기대 수명 동안 안정적인 성능을 유지" },
      ],
    },
  },

  "battery-rp": {
    hero: {
      eyebrow: "Advanced Electrolyte Suspension AGM Battery",
      title: "RP Series",
      description:
        "특수 Full-Ca 합금 적용으로 감액 특성을 극대화한 고신뢰성 UPS·발전기 시동용 배터리입니다.",
      highlights: [
        { value: "Full-Ca", label: "특수 합금 채용" },
        { value: "RP35~RP150", label: "다양한 용량 라인업" },
        { value: "획기적", label: "수명 증대" },
      ],
    },
    featureBar: [
      { icon: "shield", title: "특수 Full-Ca 합금 채용", desc: "감액 특성을 향상시켜 무보수 실현" },
      { icon: "activity", title: "고성능화 설계", desc: "특수 미세격리판과 다이아몬드식 그리드로 Back-up 성능 향상" },
      { icon: "server", title: "UPS·발전기 시동 겸용", desc: "수배전반, 발전기 시동, 소화방재 시스템 등에 폭넓게 활용" },
      { icon: "clock", title: "획기적인 수명 증대", desc: "엄선된 부품과 자동화 라인 생산으로 장수명 실현" },
    ],
    image: "/image/products/rp.png",
    features: {
      description: "특수 기술로 감액 특성을 극대화한 고신뢰성 배터리입니다.",
      items: [
        { title: "고성능화", desc: "특수 미세격리판과 다이아몬드식 그리드로 내부 저항을 낮춰 Back-up 성능 향상" },
        { title: "신합금(Full-Ca) 채용", desc: "감액 특성 향상으로 무보수 실현" },
        { title: "특수 활성물질 첨가", desc: "수명 말기에 나타나는 급격한 노후 현상 방지" },
        { title: "Global COS화", desc: "완벽한 Welding 실현으로 안정된 전원 공급" },
        { title: "경제적인 가격구조", desc: "COST DOWN으로 합리적인 비용 실현" },
        { title: "획기적인 수명 증대", desc: "최첨단 자동화 라인과 엄선된 부품으로 생산" },
      ],
    },
  },
};
