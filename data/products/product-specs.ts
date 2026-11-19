// 출처: public/image/products/<folder>/ 내 제품 기술 사양·제원 이미지(tech-specs, specifications)의 실제 수치를 정리
// 대상 카테고리는 lib/products.ts의 categories / productImageMap과 1:1로 대응됨

export interface ProductSpecRow {
  label: string;
  values: string[];
}

export interface ProductSpecGroup {
  /** 좌측 세로 병합(rowSpan) 그룹 라벨 (예: "입력", "출력", "크기"). 생략 시 항목 라벨 셀이 그룹 열까지 가로 병합됨 */
  label?: string;
  /** 그룹들 묶음 위에 표시되는 전체 폭 구분 밴드 (예: "전기적 특성", "성능") */
  band?: string;
  rows: ProductSpecRow[];
}

export type ProductSpecTable =
  | { labelHeader: string; labelHeaders?: [string, string]; columns: string[]; rows: ProductSpecRow[] }
  | { labelHeader: string; labelHeaders?: [string, string]; columns: string[]; groups: ProductSpecGroup[] };

export const productSpecsMap: Record<string, ProductSpecTable> = {
  "single-ups": {
    labelHeader: "구분",
    labelHeaders: ["구분", "항목"],
    columns: ["SPT-301K", "SPT-501K", "SPT-701K", "SPT-100AK", "SPT-151AK"],
    groups: [
      { label: "정격", rows: [{ label: "용량", values: ["3 kVA", "5 kVA", "7.5 kVA", "10 kVA", "15 kVA"] }] },
      {
        label: "입력",
        rows: [
          { label: "전압 범위", values: Array(5).fill("180-260 VAC 또는 90-130 VAC") },
          { label: "주파수", values: Array(5).fill("50 / 60 Hz ±5%") },
          { label: "상수", values: Array(5).fill("단상 + 접지 (GND)") },
          { label: "최대 입력전류 (220V 기준)", values: ["14 A", "34 A", "45 A", "56 A", "84 A"] },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "출력전압", values: Array(5).fill("220 VAC ±1% 또는 110 VAC ±1%") },
          { label: "주파수", values: Array(5).fill("50 / 60 Hz ±0.5%") },
          { label: "상수", values: Array(5).fill("단상 + 접지 (GND)") },
          { label: "전압 왜율 (THD)", values: Array(5).fill("3% 미만 (선형 부하)") },
          { label: "역률", values: Array(5).fill("0.8") },
          { label: "단락 보호", values: Array(5).fill("전류 제한 / 자동 정지 / 스위치 보호") },
          { label: "과부하 내량", values: Array(5).fill("110-150% 과부하 시 20초 후 바이패스 전환, 부하 정상 복귀 시 자동 복귀") },
        ],
      },
      {
        label: "배터리",
        rows: [{ label: "충전전류", values: ["6 A", "4 A", "4 A", "4 A", "4 A"] }],
      },
      {
        label: "표시부",
        rows: [
          { label: "LCD", values: Array(5).fill("운전 모드, 입력 및 출력 전압 및 주파수, 배터리 전압, 부하율, UPS 내부 온도") },
          { label: "LED", values: Array(5).fill("배터리 저전압 / 온라인 / 인버터 / 바이패스 / 이상") },
        ],
      },
      {
        label: "효율",
        rows: [{ label: "전체 효율", values: Array(5).fill("80% (원본 표기: 0.8)") }],
      },
      {
        label: "통신",
        rows: [{ label: "지원 기능", values: Array(5).fill("전원 상태 확인 / UPS 종료 / 상태 모니터링 / 자가 진단 / 파일 자동 저장") }],
      },
      {
        label: "보호",
        rows: [
          { label: "서지 보호", values: Array(5).fill("IEEE527B (원본 표기)") },
          { label: "노이즈", values: Array(5).fill("FCC.A (원본 표기)") },
        ],
      },
      {
        label: "소음",
        rows: [{ label: "가청 소음", values: Array(5).fill("55 dB 미만 (거리 1 m)") }],
      },
      {
        label: "사용 환경",
        rows: [
          { label: "온도", values: Array(5).fill("0-40 °C") },
          { label: "습도", values: Array(5).fill("0-95%") },
        ],
      },
      {
        label: "일반",
        rows: [
          { label: "본체 중량 (배터리 제외)", values: ["75 kg", "69 kg", "105 kg", "115 kg", "210 kg"] },
          {
            label: "규격 (W x D x H) 단위: mm",
            values: ["230 x 580 x 710", "230 x 580 x 710", "310 x 590 x 870", "310 x 590 x 870", "400 x 700 x 950"],
          },
        ],
      },
    ],
  },

  "three-single-ups": {
    labelHeader: "모델",
    columns: ["SPT-3100", "SPT-3115", "SPT-3120", "SPT-3125", "SPT-3130"],
    groups: [
      { rows: [{ label: "용량", values: ["10 kVA", "15 kVA", "20 kVA", "25 kVA", "30 kVA"] }] },
      { rows: [{ label: "정격 유효 전력", values: ["8 kW", "12 kW", "16 kW", "20 kW", "24 kW"] }] },
      { rows: [{ label: "역률", values: Array(5).fill("0.8") }] },
      {
        label: "입력",
        rows: [
          { label: "입력 전압", values: Array(5).fill("380 V ±20% 또는 190 V ±20%") },
          { label: "입력 주파수", values: Array(5).fill("50 / 60 Hz ±5%") },
          { label: "입력 방식", values: Array(5).fill("삼상 + 접지") },
          { label: "최대 입력 전류", values: ["16 A", "24 A", "32 A", "40 A", "56 A"] },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "출력 방식", values: Array(5).fill("단상 + 접지") },
          { label: "출력 전압", values: Array(5).fill("220 V ±1% 또는 110 V AC ±1%") },
          { label: "출력 주파수", values: Array(5).fill("50 / 60 Hz ±0.5%") },
          { label: "출력 파형", values: Array(5).fill("정현파") },
          { label: "과부하", values: Array(5).fill("110~150%, 20초 후 바이패스 전환 / 부하 정상 시 자동 복귀") },
          { label: "파형 왜율", values: Array(5).fill("3% 미만 (선형 부하)") },
        ],
      },
      {
        label: "배터리",
        rows: [
          { label: "배터리 전압", values: ["192 V DC", "192 V DC", "192 V DC", "240 V DC", "240 V DC"] },
          { label: "최대 충전 전류", values: ["4 A", "6 A", "6 A", "6 A", "6 A"] },
        ],
      },
      { rows: [{ label: "효율", values: Array(5).fill("85% 초과") }] },
      { rows: [{ label: "전환 시간", values: Array(5).fill("0 ms") }] },
      {
        label: "패널 표시",
        rows: [
          { label: "LCD 표시", values: Array(5).fill("입·출력 전압 및 주파수, 배터리 전압, 부하 용량") },
          { label: "LED 표시", values: Array(5).fill("배터리 부족, 온라인, 인버터, 바이패스, 이상") },
        ],
      },
      {
        label: "사용 환경",
        rows: [
          { label: "사용 온도", values: Array(5).fill("0~40 °C") },
          { label: "사용 습도", values: Array(5).fill("0~95% (결로 없음)") },
          { label: "소음", values: Array(5).fill("58 dB 미만 (1 m)") },
        ],
      },
      {
        label: "통신 / 관리",
        rows: [
          { label: "통신", values: Array(5).fill("RS232") },
          { label: "관리 기능", values: Array(5).fill("전원 상태 확인, UPS 종료, 상태 감시, 자가 진단, 파일 자동 저장") },
        ],
      },
      {
        label: "외형 및 중량",
        rows: [
          { label: "외형 W×D×H (mm)", values: ["310×560×870", "740×470×1180", "740×470×1180", "740×470×1180", "740×470×1180"] },
          { label: "포장 W×D×H (mm)", values: ["490×790×930", "950×675×1315", "950×675×1315", "950×675×1315", "950×675×1315"] },
          { label: "중량 (배터리 제외)", values: ["155 kg", "262 kg", "297 kg", "326 kg", "326 kg"] },
        ],
      },
    ],
  },

  "three-three-ups": {
    labelHeader: "구분",
    columns: ["10kVA", "15kVA", "20kVA", "30kVA", "40kVA", "60kVA", "80kVA", "100kVA", "120kVA"],
    groups: [
      { rows: [{ label: "정격 출력", values: ["8kW", "12kW", "16kW", "24kW", "32kW", "48kW", "64kW", "80kW", "96kW"] }] },
      { rows: [{ label: "출력 역률", values: Array(9).fill("0.8") }] },
      {
        band: "입력",
        rows: [
          { label: "상수", values: Array(9).fill("3상 4선식 + 접지") },
          { label: "전압 범위", values: Array(9).fill("+/-20%") },
          { label: "주파수 범위", values: Array(9).fill("45-65Hz") },
          { label: "정류 방식", values: Array(9).fill("3상 6펄스") },
        ],
      },
      {
        band: "출력",
        rows: [
          { label: "상수", values: Array(9).fill("3상 4선식 + 접지") },
          { label: "출력 파형", values: Array(9).fill("정현파") },
          { label: "파고율", values: Array(9).fill("3:1") },
          { label: "정격 전압", values: Array(9).fill("380/400/415V 선택 사양") },
          { label: "상전압 설정", values: Array(9).fill("200 - 244VAC (조작 패널)") },
          { label: "과도 응답", values: Array(9).fill("+/-5%, 10ms") },
          { label: "주파수", values: Array(9).fill("50 / 60 Hz") },
          { label: "주파수 안정도", values: Array(9).fill("+ / - 0.05%") },
          { label: "위상 동기 범위", values: Array(9).fill("동기 운전 시: +/-0.05%, 비동기 운전 시: +/-2% (설정 가능, 조작 패널에서 +/-1% 선택 가능)") },
          { label: "출력 전압 왜율", values: Array(9).fill("3% (선형 부하)") },
          { label: "단락 전류", values: Array(9).fill("정격 전류의 0.1s (200% 전류)") },
          { label: "과부하 내량", values: Array(9).fill("110% /125% /150% 정격 전류에서 300분 /10분 /1분") },
        ],
      },
      {
        band: "배터리",
        rows: [
          { label: "배터리 종류", values: Array(9).fill("무보수형 납축전지") },
          { label: "직류 전압", values: Array(9).fill("384VDC") },
        ],
      },
      {
        label: "바이패스",
        rows: [
          { label: "방식", values: Array(9).fill("정지형 바이패스 + 유지보수용 수동 바이패스") },
          { label: "입력 상수", values: Array(9).fill("3상 4선식 + 접지") },
          { label: "입력 전압 범위", values: Array(9).fill("15% - 25% (전면 조작 패널에서 선택 가능)") },
          { label: "입력 주파수 범위", values: Array(9).fill("+/-1% ~ +/-5% (전면 조작 패널에서 선택 가능)") },
        ],
      },
      {
        rows: [
          {
            label: "절체 시간",
            values: Array(9).fill("인버터/바이패스 절체 스위치 시간(Overload): 인버터/바이패스 절체 - 과부하 시 0ms, 인버터 고장 시 1ms"),
          },
        ],
      },
      { rows: [{ label: "과부하 내량 (10분)", values: ["170%", "180%", "170%", "170%", "170%", "140%", "130%", "125%", "125%"] }] },
      {
        band: "시스템",
        rows: [
          { label: "원격 제어", values: Array(9).fill("비상 정지(EPO) 및 바이패스") },
          { label: "통신 인터페이스", values: Array(9).fill("RS232 (SNMP, 모뎀 선택 사양)") },
          { label: "운전 온도", values: Array(9).fill("0~40°C") },
          { label: "상대 습도", values: Array(9).fill("95% 미만 (결로 없음)") },
          { label: "설치 고도", values: Array(9).fill("정격 출력: 1000m / 100m 상승 시 출력 1% 감소, 최대 4000m") },
          { label: "소음 (1m)", values: Array(9).fill("60dB 미만") },
          { label: "인버터 효율", values: ["92%", "92%", "92%", "92%", "93%", "93%", "93%", "93%", "93%"] },
          { label: "보호 등급", values: Array(9).fill("IP20") },
          { label: "적용 규격", values: Array(9).fill("EN50091-1-EMC, EN50091-2liv.A") },
        ],
      },
      {
        label: "선택 사양",
        rows: [{ label: "", values: Array(9).fill("절연 변압기 / 고조파 억제 필터 / 최대 6대 병렬 운전") }],
      },
      { rows: [{ label: "순중량 (kg)", values: ["210", "230", "230", "282", "330", "450", "555", "650", "750"] }] },
      { rows: [{ label: "총중량 (kg)", values: ["260", "280", "280", "332", "380", "505", "600", "700", "800"] }] },
      {
        rows: [
          {
            label: "포장 치수 (W x D x H)",
            values: [
              "W555×D720×H1200",
              "W555×D720×H1200",
              "W555×D720×H1200",
              "W555×D720×H1200",
              "W800×D745×H1400",
              "W800×D745×H1400",
              "W800×D745×H1400",
              "1070×740×1400",
              "1070×740×1400",
            ],
          },
        ],
      },
    ],
  },

  "server-ups": {
    // 출처: docs/제품 카다로그/PC 서버용 UPS.pdf 3p "SPECIFICATION" 표 중 타워형(비RM) 열만 발췌, PDF 원문 그대로(라벨/값 포함)
    labelHeader: "모델",
    columns: ["HP910", "HP920", "HP930", "HP960", "HP9100", "HP9120"],
    groups: [
      {
        rows: [{ label: "용량", values: ["1kVA / 700W", "2kVA / 1400W", "3kVA / 2100W", "6kVA / 4.2kW", "10kVA / 7kW", "12kVA / 8.4kW"] }],
      },
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          {
            label: "전압범위",
            values: [
              "부하가 70% 미만일 때: 115±5VAC~295±5VAC / 70% 이상일 때: 160±5VAC~295±5VAC",
              "부하가 70% 미만일 때: 115±5VAC~295±5VAC / 70% 이상일 때: 160±5VAC~295±5VAC",
              "부하가 70% 미만일 때: 115±5VAC~295±5VAC / 70% 이상일 때: 160±5VAC~295±5VAC",
              "176±5VAC~276±5VAC",
              "176±5VAC~276±5VAC",
              "176±5VAC~276±5VAC",
            ],
          },
          { label: "주파수", values: Array(6).fill("46~554Hz 또는 56~64Hz (자동인식)") },
          { label: "상", values: Array(6).fill("단상") },
          { label: "역률", values: ["≥0.97", "≥0.97", "≥0.97", "≥0.98", "≥0.98", "≥0.98"] },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "전압", values: Array(6).fill("220VAC ±2%") },
          { label: "주파수", values: Array(6).fill("50 / 60Hz ±2%") },
          { label: "THD(직선형부하)", values: ["<3%", "<3%", "<3%", "<2%", "<2%", "<2%"] },
          { label: "THD(비직선형부하)", values: Array(6).fill("<6%") },
          {
            label: "과부하시 용량",
            values: [
              ">110%: 바이패스모드로의 전환시간이 30s / >150%: 바이패스모드로의 전환시간이 30ms",
              ">110%: 바이패스모드로의 전환시간이 30s / >150%: 바이패스모드로의 전환시간이 30ms",
              ">110%: 바이패스모드로의 전환시간이 30s / >150%: 바이패스모드로의 전환시간이 30ms",
              ">106~130%: 바이패스모드로의 전환시간이 10ms / >130%: 바이패스모드로의 전환시간이 1s",
              ">106~130%: 바이패스모드로의 전환시간이 10ms / >130%: 바이패스모드로의 전환시간이 1s",
              ">106~130%: 바이패스모드로의 전환시간이 10ms / >130%: 바이패스모드로의 전환시간이 1s",
            ],
          },
          { label: "파고율", values: Array(6).fill("3:10 (최대)") },
          {
            label: "단락보호",
            values: Array(6).fill(
              "5사이클 후 인버터 정지, 바이패스로의 비 전환, 경보음 (AC모드) / 6사이클 후 인버터 정지, 경보음 (배터리모드) / 입력 휴즈가 타거나 또는 차단기 작동 (바이패스모드)"
            ),
          },
          { label: "파형", values: Array(6).fill("싸인파형") },
          { label: "절체시간", values: Array(6).fill("0ms") },
          { label: "효율", values: ["≥83%", "≥83%", "≥85%", "≥85%", "≥88%", "≥88%"] },
          { label: "전환 (AC 바이패스)", values: Array(6).fill("0ms") },
        ],
      },
      {
        band: "배터리",
        rows: [
          { label: "타입", values: Array(6).fill("12V 납 축전지") },
          { label: "DC전압", values: ["36VDC", "96VDC", "96VDC", "240VDC", "240VDC", "240VDC"] },
          { label: "사양", values: ["3×12V/7AH", "8×12V/7AH", "8×12V/7AH", "20×12V/7AH", "20×12V/7AH", "20×12V/7AH"] },
          { label: "백업타임", values: ["12min", "19min", "16min", "20min", "13min", "10min"] },
          { label: "백업타임", values: ["5ms", "8ms", "5ms", "7min", "5min", "3min"] },
          { label: "충전전류", values: ["0.7A", "0.7A", "0.7A", "1A", "1A", "1A"] },
          { label: "충전전류", values: ["7.5A", "7.5A", "7.5A", "5A", "5A", "5A"] },
          { label: "충전시간", values: Array(6).fill("8시간 후 약 90%") },
        ],
      },
      {
        band: "통신",
        rows: [
          { label: "통신", values: Array(6).fill("RS-232, SNMP(옵션)") },
          {
            label: "LCD",
            values: Array(6).fill(
              '1. 입력, 전압/주파수, 배터리 전압, 출력전압/주파수, 부하의 와트/VA 및 퍼센트, 인버터 온도  2. "ON라인", "ON배터리", 또는 "ON 바이패스" 같은 작동 모드'
            ),
          },
          { label: "LED", values: Array(6).fill("1. 초록색 → 정상 작동  2. 노란색 → 경보  3. 빨간색 → 비정상 작동") },
          { label: "소음", values: ["<45dB", "<45dB", "<45dB", "<55dB", "<55dB", "<55dB"] },
          {
            label: "병렬포트",
            values: ["병렬 기능 없음", "병렬 기능 없음", "병렬 기능 없음", "3대까지 설치 가능한 병렬기능", "3대까지 설치 가능한 병렬기능", "3대까지 설치 가능한 병렬기능"],
          },
        ],
      },
      {
        band: "주위",
        label: "주위",
        rows: [
          { label: "온도", values: Array(6).fill("0~40℃") },
          { label: "습도", values: Array(6).fill("0~95%") },
          // PDF 원문에는 '고도' 행에 아래 온도값이, '저장온도' 행에 '<1500m'이 표기되어 있음(원본 라벨-값 그대로 반영)
          { label: "고도", values: ["-25~55℃", "-25~55℃", "-25~55℃", "-0~40℃", "-0~40℃", "-0~40℃"] },
          { label: "저장온도", values: Array(6).fill("<1500m") },
        ],
      },
      {
        label: "기타",
        rows: [
          { label: "표준/총중량(kg)", values: ["14/16", "33/35", "34/36", "89/104", "92/107", "92/107"] },
          { label: "장시간/총중량(kg)", values: ["7.5/9", "14/16", "15/17", "34/43", "36/46", "36/46"] },
          {
            label: "크기(W×D×H)mm",
            values: ["144×419×215", "191×478×339", "191×478×339", "270×570×720", "270×570×720", "270×570×720"],
          },
          {
            label: "포장크기(W×D×H)mm",
            values: ["258×524×334", "332×603×482", "332×603×482", "370×670×940", "370×670×940", "370×670×940"],
          },
        ],
      },
    ],
  },

  "server-ups-rm": {
    // 출처: docs/제품 카다로그/PC 서버용 UPS.pdf 3p "HP900C-RM (RACK MOUNT-TYPE) SPECIFICATION" 표 중 RM(랙마운트) 열만 발췌, PDF 원문 그대로(라벨/값 포함)
    labelHeader: "모델",
    columns: ["HP910 | HP910-RM", "HP920 | HP920-RM", "HP930 | HP930-RM", "HP960 | HP960-RM", "HP9100 | HP9100-RM", "HP9120 | HP9120-RM"],
    groups: [
      {
        rows: [{ label: "용량", values: ["1kVA / 700W", "2kVA / 1400W", "3kVA / 2100W", "6kVA / 4.2kW", "10kVA / 7kW", "12kVA / 8.4kW"] }],
      },
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          {
            label: "전압범위",
            values: [
              "부하가 70% 미만일 때: 115±5VAC~295±5VAC / 70% 이상일 때: 160±5VAC~295±5VAC",
              "부하가 70% 미만일 때: 115±5VAC~295±5VAC / 70% 이상일 때: 160±5VAC~295±5VAC",
              "부하가 70% 미만일 때: 115±5VAC~295±5VAC / 70% 이상일 때: 160±5VAC~295±5VAC",
              "176±5VAC~276±5VAC",
              "176±5VAC~276±5VAC",
              "176±5VAC~276±5VAC",
            ],
          },
          { label: "주파수", values: Array(6).fill("46~554Hz 또는 56~64Hz (자동인식)") },
          { label: "상", values: Array(6).fill("단상") },
          { label: "역률", values: ["≥0.97", "≥0.97", "≥0.97", "≥0.98", "≥0.98", "≥0.98"] },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "전압", values: Array(6).fill("220VAC ±2%") },
          { label: "주파수", values: Array(6).fill("50 / 60Hz ±2%") },
          { label: "THD(직선형부하)", values: ["<3%", "<3%", "<3%", "<2%", "<2%", "<2%"] },
          { label: "THD(비직선형부하)", values: Array(6).fill("<6%") },
          {
            label: "과부하시 용량",
            values: [
              ">110%: 바이패스모드로의 전환시간이 30s / >150%: 바이패스모드로의 전환시간이 30ms",
              ">110%: 바이패스모드로의 전환시간이 30s / >150%: 바이패스모드로의 전환시간이 30ms",
              ">110%: 바이패스모드로의 전환시간이 30s / >150%: 바이패스모드로의 전환시간이 30ms",
              ">106~130%: 바이패스모드로의 전환시간이 10ms / >130%: 바이패스모드로의 전환시간이 1s",
              ">106~130%: 바이패스모드로의 전환시간이 10ms / >130%: 바이패스모드로의 전환시간이 1s",
              ">106~130%: 바이패스모드로의 전환시간이 10ms / >130%: 바이패스모드로의 전환시간이 1s",
            ],
          },
          { label: "파고율", values: Array(6).fill("3:10 (최대)") },
          {
            label: "단락보호",
            values: Array(6).fill(
              "5사이클 후 인버터 정지, 바이패스로의 비 전환, 경보음 (AC모드) / 6사이클 후 인버터 정지, 경보음 (배터리모드) / 입력 휴즈가 타거나 또는 차단기 작동 (바이패스모드)"
            ),
          },
          { label: "파형", values: Array(6).fill("싸인파형") },
          { label: "절체시간", values: Array(6).fill("0ms") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "효율", values: ["≥83%", "≥83%", "≥85%", "≥85%", "≥88%", "≥88%"] },
          { label: "전환 (AC 바이패스)", values: Array(6).fill("0ms") },
        ],
      },
      {
        band: "배터리",
        label: "배터리",
        rows: [
          { label: "타입", values: Array(6).fill("12V 납 축전지") },
          { label: "DC전압", values: ["36VDC", "96VDC", "96VDC", "240VDC", "240VDC", "240VDC"] },
          { label: "사양", values: ["3×12V/7AH", "8×12V/7AH", "8×12V/7AH", "20×12V/7AH", "20×12V/7AH", "20×12V/7AH"] },
          { label: "백업타임", values: ["12min", "19min", "16min", "N/A", "N/A", "10min"] },
          { label: "백업타임", values: ["5ms", "8ms", "5ms", "N/A", "N/A", "3min"] },
          { label: "충전전류", values: ["0.7A", "0.7A", "0.7A", "1A", "1A", "1A"] },
          { label: "충전전류", values: ["7.5A", "7.5A", "7.5A", "5A", "5A", "5A"] },
          { label: "충전시간", values: Array(6).fill("8시간 후 약 90%") },
        ],
      },
      {
        band: "기타",
        label: "기타",
        rows: [
          { label: "통신", values: Array(6).fill("RS-232, SNMP(옵션)") },
          {
            label: "LCD",
            values: Array(6).fill(
              '1. 입력, 전압/주파수, 배터리 전압, 출력전압/주파수, 부하의 와트/VA 및 퍼센트, 인버터 온도  2. "ON라인", "ON배터리", 또는 "ON 바이패스" 같은 작동 모드'
            ),
          },
          { label: "LED", values: Array(6).fill("1. 초록색 → 정상 작동  2. 노란색 → 경보  3. 빨간색 → 비정상 작동") },
          { label: "소음", values: ["<45dB", "<45dB", "<45dB", "<55dB", "<55dB", "<55dB"] },
          {
            label: "병렬포트",
            values: ["병렬 기능 없음", "병렬 기능 없음", "병렬 기능 없음", "3대까지 설치 가능한 병렬기능", "3대까지 설치 가능한 병렬기능", "3대까지 설치 가능한 병렬기능"],
          },
        ],
      },
      {
        band: "주위",
        label: "주위",
        rows: [
          { label: "온도", values: Array(6).fill("0~40℃") },
          { label: "습도", values: Array(6).fill("0~95%") },
          // PDF 원문에는 '고도' 행에 아래 온도값이, '저장온도' 행에 '<1500m'이 표기되어 있음(원본 라벨-값 그대로 반영)
          { label: "고도", values: ["-25~55℃", "-25~55℃", "-25~55℃", "-0~40℃", "-0~40℃", "-0~40℃"] },
          { label: "저장온도", values: Array(6).fill("<1500m") },
        ],
      },
      {
        label: "기타",
        rows: [
          { label: "표준/총중량(kg)", values: ["14/16", "34/36", "35/37", "N/A", "N/A", "N/A"] },
          { label: "장시간/총중량(kg)", values: ["8/10", "19/21", "20/22", "22/25", "22/25", "22/25"] },
          {
            label: "크기(W×D×H)mm",
            values: ["483×440×90", "483×440×90", "483×440×90", "440×650×176", "440×650×176", "440×650×176"],
          },
          {
            label: "포장크기(W×D×H)mm",
            values: ["587×550×254", "592×665×292", "592×665×292", "580×790×336", "580×790×336", "580×790×336"],
          },
        ],
      },
    ],
  },

  "server-ups-hp3900c": {
    // 출처: docs/제품 카다로그/PC 서버용 UPS.pdf 4p "HP3900C (TOWER-TYPE) SPECIFICATION" 표, PDF 원문 그대로(라벨/값 포함)
    labelHeader: "모델",
    columns: ["HP3910", "HP3915", "HP3920"],
    groups: [
      { rows: [{ label: "용량", values: ["10kVA / 7kW", "15kVA / 10.5kW", "20kVA / 14kW"] }] },
      {
        label: "입력",
        rows: [
          { label: "전압범위", values: Array(3).fill("304VAC ±5VAC ~ 478VAC ±5VAC") },
          { label: "주파수", values: Array(3).fill("46~54Hz 또는 56~64Hz ±0.5Hz (자동인식)") },
          { label: "상", values: Array(3).fill("3상") },
          { label: "역률", values: Array(3).fill("≥0.95") },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "전압범위", values: Array(3).fill("220Vac ±1%") },
          { label: "상", values: Array(3).fill("1상") },
          { label: "주파수", values: Array(3).fill("50 / 60Hz ±0.2%(배터리모드)") },
          { label: "THD(선형부하)", values: Array(3).fill("<2%") },
          { label: "THD(비선형부하)", values: Array(3).fill("<6%") },
          {
            label: "과부하 내량",
            values: Array(3).fill("105~130%: 바이패스모드로의 전환시간이 10min / >130%: 바이패스모드로의 전환시간 1s"),
          },
          { label: "파고율", values: Array(3).fill("3:1 (최대)") },
          { label: "파형", values: Array(3).fill("싸인파형") },
          { label: "절체시간", values: Array(3).fill("0ms") },
          { label: "전환시간", values: Array(3).fill("0ms") },
          { label: "효율", values: Array(3).fill("≥88%") },
          { label: "통신", values: Array(3).fill("RS-232, SNMP(옵션)") },
          { label: "병렬포트", values: Array(3).fill("3대까지 설치 가능한 병렬기능") },
        ],
      },
      {
        label: "환경",
        rows: [
          { label: "소음", values: Array(3).fill("<55dB") },
          { label: "온도", values: Array(3).fill("0 - 40℃") },
          { label: "습도", values: Array(3).fill("0 - 90%") },
          { label: "고도", values: Array(3).fill("<1500m") },
          { label: "저장온도", values: Array(3).fill("0 - 40℃") },
        ],
      },
      {
        label: "기타",
        rows: [
          { label: "표준/총중량(kg)", values: ["92 / 107", "92 / 107", "N/A"] },
          { label: "장기간/총중량(kg)", values: ["36 / 107", "36 / 107", "56 / 65"] },
          { label: "크기(W×D×H)mm", values: Array(3).fill("270×570×720") },
          { label: "포장크기(W×D×H)mm", values: Array(3).fill("370×670×940") },
        ],
      },
    ],
  },

  avr: {
    labelHeader: "항목",
    columns: ["단상 (Single-Phase)", "삼상 (Three-Phase)"],
    groups: [
      { rows: [{ label: "용량 범위", values: ["1~100KVA", "3~200KVA"] }] },
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          { label: "정격전압(허용범위)", values: Array(2).fill("설정 전압의 ±15%") },
          { label: "정격주파수(허용범위)", values: Array(2).fill("50Hz 또는 60Hz의 ±5%") },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "정격전압(허용범위)", values: Array(2).fill("설정 전압의 ±2% 이내 안정화") },
          { label: "정격주파수(허용범위)", values: Array(2).fill("50/60Hz ±0.5%") },
          { label: "파형왜율(THDi)", values: Array(2).fill("3% 이내") },
          { label: "역률", values: Array(2).fill("0.8 LAG") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "효율(%)", values: Array(2).fill("90% 이상") },
          { label: "절체 시간", values: Array(2).fill("0ms") },
        ],
      },
      {
        band: "기타",
        label: "기타",
        rows: [{ label: "외형 크기", values: Array(2).fill("용량별 상이 (견적 시 안내)") }],
      },
    ],
  },

  frequency: {
    labelHeader: "용량(KVA)",
    columns: ["2~5", "7.5~10", "15~20", "30", "50~60", "75~100"],
    groups: [
      {
        label: "구조",
        rows: [
          { label: "냉각방식", values: Array(6).fill("강제풍냉식") },
          { label: "사용정격", values: Array(6).fill("100% 연속 사용") },
          { label: "정류부", values: Array(6).fill("전파정류 제어방식 / SCR") },
          { label: "인버터부", values: Array(6).fill("고주파(20KHz) PWM / IGBT") },
          { label: "변압기 절연계급", values: Array(6).fill("고효율 H종") },
        ],
      },
      {
        band: "전기적 특성",
        label: "입력",
        rows: [{ label: "상수/전압/주파수", values: Array(6).fill("단상 또는 삼상 / 설정전압 ±15% / 60Hz ±5%") }],
      },
      {
        label: "출력",
        rows: [
          { label: "전압안정도/주파수안정도", values: Array(6).fill("±1% 이내 / ±0.5%") },
          { label: "주파수(선택)", values: Array(6).fill("50Hz, 60Hz") },
          { label: "파형왜율(THD)", values: Array(6).fill("3% 이하(선형부하 100%)") },
          { label: "과부하 내량", values: Array(6).fill("120% 10분간") },
          { label: "역률", values: Array(6).fill("0.8 LAG") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "종합효율", values: Array(6).fill("85% 이상") },
          { label: "소음", values: Array(6).fill("65dB(A), 전방 1.5m (FAN 제외)") },
        ],
      },
      {
        band: "안전/환경",
        label: "안전/환경",
        rows: [
          { label: "절연내압/절연저항", values: Array(6).fill("AC1800V 1분간 / DC500V 30㏁ 이상") },
          { label: "온도상승(변압기/반도체)", values: Array(6).fill("140℃ 이하 / 80℃ 이하") },
        ],
      },
      {
        label: "크기",
        rows: [
          { label: "W (mm)", values: ["320", "450", "550", "670", "850", "850"] },
          { label: "D (mm)", values: ["630", "800", "950", "770", "950", "1050"] },
          { label: "H (mm)", values: ["775", "950", "1150", "1300", "1650", "1650"] },
        ],
      },
    ],
  },

  "battery-es": {
    labelHeader: "형명",
    columns: ["전압(V)", "용량(AH, 20HR)", "외형치수 L×W×H×TH(mm)", "중량(kg)"],
    rows: [
      { label: "ES 1.2-6", values: ["6", "1.2", "97*25*50.5*55", "0.3"] },
      { label: "ES 4-6", values: ["6", "4", "70*47*98*101*0.8", "0.8"] },
      { label: "ES 7-6", values: ["6", "7", "151*34*94*97.5", "1.3"] },
      { label: "ES 10.6", values: ["6", "10", "151*50*94*97.5", "2"] },
      { label: "ES 1.2-12", values: ["12", "1.2", "97*47.5*50.5*55", "0.57"] },
      { label: "ES 2.0-12", values: ["12", "2", "178*34*60*64", "1"] },
      { label: "ES 2.9-12", values: ["12", "2.9", "79*55.5*98.5*102", "1.2"] },
      { label: "ES 3.2-12", values: ["12", "3.2", "134*67*60*63.5", "1.4"] },
      { label: "ES 4-12", values: ["12", "4", "90*70*102*105.5", "1.6"] },
      { label: "ES 4-12D", values: ["12", "4", "195*47*70*74", "1.6"] },
      { label: "ES 5-12", values: ["12", "5.4", "90*70*102*105.5", "1.8"] },
      { label: "ES 7-12", values: ["12", "7", "151*65*94*97.5", "2.5"] },
      { label: "ES 12-12", values: ["12", "12", "151*98*94*97.5", "4"] },
      { label: "ES 18-12", values: ["12", "18", "181*76*167*167", "5.9"] },
      { label: "ES 24-12", values: ["12", "24", "166*175*125*125", "8.7"] },
      { label: "ES 30-12", values: ["12", "30 (10HR)", "192*132*170*170", "9.3"] },
    ],
  },

  "battery-rp": {
    labelHeader: "형명",
    columns: ["전압(V)", "용량(AH, 20HR)", "외형치수 L×W×H×TH(mm)", "중량(kg)"],
    rows: [
      { label: "RP35-12", values: ["12", "35", "197*134*202*236(230)", "10.2"] },
      { label: "RP45-12", values: ["12", "45", "238*139*201*235(240)", "12.8"] },
      { label: "RP50-12", values: ["12", "50", "202*173*202*236(241)", "13.8"] },
      { label: "RP60-12", values: ["12", "60", "232*175*205*239(244)", "16.2"] },
      { label: "RP65-12", values: ["12", "65", "280*175*175*175", "16.5"] },
      { label: "RP80-12", values: ["12", "80", "260*170*200*234(239)", "18.0"] },
      { label: "RP100-12", values: ["12", "100", "330*173*207*241", "25.0"] },
      { label: "RP120-12", values: ["12", "120", "505*183*215*263(255)", "35.0"] },
      { label: "RP150-12", values: ["12", "150", "508*222*216*264(256)", "39.0"] },
      { label: "RP200-12", values: ["12", "200", "525*281*223*271(263)", "55.0"] },
      { label: "RP250-12", values: ["12", "250", "525*281*223*271(263)", "58.0"] },
    ],
  },
};
