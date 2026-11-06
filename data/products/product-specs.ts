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
  | { labelHeader: string; columns: string[]; rows: ProductSpecRow[] }
  | { labelHeader: string; columns: string[]; groups: ProductSpecGroup[] };

export const productSpecsMap: Record<string, ProductSpecTable> = {
  "single-ups": {
    labelHeader: "용량(KVA)",
    columns: ["3", "5", "7.5", "10"],
    groups: [
      { rows: [{ label: "모델명", values: ["SPT-301K", "SPT-501K", "SPT-701K", "SPT-100AK"] }] },
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          { label: "정격전압(허용범위)", values: Array(4).fill("110VAC ±20%, 220VAC ±20%") },
          { label: "정격주파수(허용범위)", values: Array(4).fill("50/60Hz ±5%") },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "정격전압(허용범위)", values: Array(4).fill("110VAC ±1% 또는 220VAC ±1%") },
          { label: "정격주파수(허용범위)", values: Array(4).fill("50/60Hz ±0.5%") },
          { label: "파형왜율(THDi)", values: Array(4).fill("3% 이내") },
          { label: "역률", values: Array(4).fill("0.8 LAG") },
          { label: "과부하 내량", values: Array(4).fill("20초 후 바이패스 절체, 정상화 시 자동 복귀") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "효율(%)", values: Array(4).fill("88% 이상") },
          { label: "절체 시간", values: Array(4).fill("0ms") },
        ],
      },
      {
        band: "기타",
        label: "기타",
        rows: [
          { label: "소음 [dB(A)]", values: Array(4).fill("1m에서 55dB 이하") },
          { label: "보호등급/도장색상", values: Array(4).fill("IP20 / RAL7035 (Light Grey)") },
          { label: "외부통신", values: Array(4).fill("RS-232C, 422, 485, SNMP (옵션)") },
        ],
      },
      {
        label: "크기",
        rows: [
          { label: "W (mm)", values: ["580", "580", "305", "305"] },
          { label: "D (mm)", values: ["230", "230", "590", "590"] },
          { label: "H (mm)", values: ["710", "710", "870", "870"] },
        ],
      },
    ],
  },

  "three-single-ups": {
    labelHeader: "용량(KVA)",
    columns: ["10", "15", "20", "30"],
    groups: [
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          { label: "상수", values: Array(4).fill("3상 + 접지(G)") },
          { label: "정격전압(허용범위)", values: Array(4).fill("380V ±20%(3상) 또는 190V ±20%(3상)") },
          { label: "정격주파수(허용범위)", values: Array(4).fill("50Hz ±5% 또는 60Hz ±5%") },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "상수", values: Array(4).fill("단상 + 접지(G)") },
          { label: "정격전압(허용범위)", values: Array(4).fill("220V ±1% 또는 110VAC ±1%") },
          { label: "정격주파수(허용범위)", values: Array(4).fill("50/60Hz ±0.5%") },
          { label: "파형왜율(THDi)", values: Array(4).fill("3% 이내") },
          { label: "역률", values: Array(4).fill("0.8 LAG") },
          { label: "과부하 내량", values: Array(4).fill("110~150% 과부하 시 20초 후 바이패스, 정상 시 자동 복귀") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "효율(%)", values: Array(4).fill("85% 이상") },
          { label: "절체 시간", values: Array(4).fill("0ms") },
        ],
      },
      {
        band: "기타",
        label: "기타",
        rows: [
          { label: "소음 [dB(A)]", values: Array(4).fill("1m에서 58dB 이하") },
          { label: "보호등급/도장색상", values: Array(4).fill("IP20 / RAL7035 (Light Grey)") },
          { label: "외부통신", values: Array(4).fill("RS-232C, SNMP (옵션)") },
        ],
      },
      {
        label: "크기",
        rows: [
          { label: "W (mm)", values: ["310", "470", "470", "740"] },
          { label: "D (mm)", values: ["560", "470", "470", "470"] },
          { label: "H (mm)", values: ["870", "1080", "1080", "1180"] },
        ],
      },
    ],
  },

  "three-three-ups": {
    labelHeader: "용량(KVA)",
    columns: ["10~20", "30~60", "80~120"],
    groups: [
      { rows: [{ label: "세부 용량(KVA)", values: ["10 / 15 / 20", "30 / 40 / 60", "80 / 100 / 120"] }] },
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          { label: "상수", values: Array(3).fill("삼상 3선식/4선식 + 접지(G)") },
          { label: "정격전압(허용범위)", values: Array(3).fill("220/380/440VAC -18%~+20%") },
          { label: "정격주파수(허용범위)", values: Array(3).fill("50/60Hz ±5%") },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "정격전압(허용범위)", values: Array(3).fill("220/380/440VAC ±2%") },
          { label: "정격주파수(허용범위)", values: Array(3).fill("50/60Hz ±0.5%") },
          { label: "파형왜율(THDi)", values: Array(3).fill("3% 이내") },
          { label: "역률", values: Array(3).fill("0.8 LAG") },
          { label: "과부하 내량", values: Array(3).fill("110~120%에서 10분간") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "효율(%)", values: ["92% 이하", "93% 이상", "93% 이상"] },
          { label: "절체 시간", values: Array(3).fill("0ms") },
        ],
      },
      {
        band: "기타",
        label: "기타",
        rows: [
          { label: "소음 [dB(A)]", values: Array(3).fill("1m에서 60dB 이하") },
          { label: "보호등급/도장색상", values: Array(3).fill("IP20 / RAL7035 (Light Grey)") },
          { label: "외부통신", values: Array(3).fill("RS-232C, 422, 485, SNMP (옵션)") },
        ],
      },
      {
        label: "크기",
        rows: [
          { label: "W (mm)", values: ["650", "950", "1070"] },
          { label: "D (mm)", values: ["850", "890", "740"] },
          { label: "H (mm)", values: ["1340", "1620", "1400"] },
        ],
      },
    ],
  },

  "server-ups": {
    labelHeader: "모델명",
    columns: ["HP910C (1KVA)", "HP920C (2KVA)", "HP930C (3KVA)", "HP960C (6KVA)", "HP9100C (10KVA)"],
    groups: [
      {
        band: "전기적 특성",
        label: "입력",
        rows: [
          { label: "상수", values: Array(5).fill("단상(1-Phase, L/N/G)") },
          { label: "정격전압", values: Array(5).fill("110~300VAC") },
          { label: "정격주파수", values: Array(5).fill("56~64Hz") },
        ],
      },
      {
        label: "출력",
        rows: [
          { label: "정격전압", values: Array(5).fill("220/230/240V (±1%)") },
          { label: "정격주파수", values: Array(5).fill("56~64Hz") },
          { label: "파형왜율(THDi)", values: Array(5).fill("3% 이내") },
          { label: "역률", values: Array(5).fill("0.98 LAG") },
          { label: "과부하 내량", values: Array(5).fill("110% 이상 30초 후 바이패스, 150% 초과 시 300ms 후 바이패스") },
        ],
      },
      {
        band: "성능",
        label: "성능",
        rows: [
          { label: "효율(%)", values: ["83%", "85%", "85%", "88%", "88%"] },
          { label: "절체 시간", values: Array(5).fill("0ms") },
        ],
      },
      {
        band: "기타",
        label: "기타",
        rows: [
          { label: "소음 [dB(A)]", values: Array(5).fill("1m에서 60dB 이하") },
          { label: "보호등급/도장색상", values: Array(5).fill("IP20 / RAL7035 (Light Grey)") },
          { label: "외부통신", values: Array(5).fill("RS-232, SNMP (옵션)") },
        ],
      },
      {
        label: "크기",
        rows: [
          { label: "W (mm)", values: ["470", "470", "470", "688", "688"] },
          { label: "D (mm)", values: ["440", "440", "440", "440", "440"] },
          { label: "H (mm)", values: ["88", "88", "88", "175", "175"] },
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
