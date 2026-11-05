// 출처: docs/납품실적(전체)-1.pdf

export type DeliveryField = "교육" | "산업·기업" | "공공·연구" | "의료";

export interface DeliveryRecord {
  field: DeliveryField;
  client: string;
  item: string;
  spec: string;
  quantity: string;
}

export const deliveryRecords: DeliveryRecord[] = [
  // 교육 (19개 항목 / 16곳)
  { field: "교육", client: "강남대학교", item: "UPS", spec: "3상 30KVA", quantity: "1 SET" },
  { field: "교육", client: "강릉대학교", item: "UPS", spec: "1상 10KVA", quantity: "3 SET" },
  { field: "교육", client: "강원대학교", item: "UPS", spec: "1상 10KVA", quantity: "3 SET" },
  { field: "교육", client: "고려대학교", item: "UPS", spec: "1상 5KVA", quantity: "5대" },
  { field: "교육", client: "국민대학교", item: "UPS", spec: "1상 10KVA", quantity: "1 SET" },
  { field: "교육", client: "국민대학교", item: "UPS", spec: "1상 15KVA / 1상 10KVA", quantity: "각 1 SET" },
  { field: "교육", client: "대전카이스트", item: "UPS", spec: "3상 50KVA / 1상 10KVA", quantity: "각 1 SET" },
  { field: "교육", client: "민족사관고등학교", item: "UPS", spec: "1상 10KVA", quantity: "3 SET" },
  { field: "교육", client: "서울대학교(레이저실)", item: "UPS", spec: "1상 10, 7.5, 5, 3KVA 외", quantity: "12 SET" },
  { field: "교육", client: "성균관대학교", item: "UPS", spec: "1상 10KVA, 5KVA", quantity: "각 15 SET" },
  { field: "교육", client: "성균관대학교(용인)", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "교육", client: "성균관대학교(안산)", item: "UPS", spec: "3상 30KVA", quantity: "1 SET" },
  { field: "교육", client: "아주대학교", item: "UPS", spec: "1상 10KVA, 5KVA", quantity: "8 SET" },
  { field: "교육", client: "연세대학교(레이저실)", item: "UPS", spec: "1상 10KVA, 5KVA", quantity: "5 SET" },
  { field: "교육", client: "원주대학교", item: "UPS", spec: "1상 10KVA / 1상 7.5KVA", quantity: "각 1 SET" },
  { field: "교육", client: "이화여자대학교", item: "UPS", spec: "1상 10KVA, 7.5KVA", quantity: "2 SET" },
  { field: "교육", client: "중앙대학교", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "교육", client: "한국외국어대학교", item: "UPS", spec: "3상 20KVA", quantity: "1 SET" },
  { field: "교육", client: "홍익대학교", item: "UPS", spec: "1상 10KVA", quantity: "1 SET" },

  // 산업·기업 (23개 항목 / 23곳)
  { field: "산업·기업", client: "(주)비전과학서울", item: "UPS", spec: "3상 40KVA / 80KVA", quantity: "각 1 SET" },
  { field: "산업·기업", client: "(주)우영", item: "UPS/AVR", spec: "3상 30KVA / 40KVA", quantity: "2 SET" },
  { field: "산업·기업", client: "LG디스플레이 제2공장", item: "UPS", spec: "3상 80KVA", quantity: "3 SET" },
  { field: "산업·기업", client: "녹십자EM", item: "UPS", spec: "3상 80 / 50 / 60KVA", quantity: "각 1 SET" },
  { field: "산업·기업", client: "다음커뮤니케이션", item: "UPS", spec: "3상 100KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "대우푸르지오서비스", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "데코브레인", item: "UPS", spec: "3상 40KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "동양제철화학", item: "UPS", spec: "3상 20KVA / 3상 30KVA", quantity: "각 1 SET" },
  { field: "산업·기업", client: "디아지오코리아", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "라이프일렉트론", item: "UPS", spec: "3상 40KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "미래산전", item: "UPS", spec: "3상 80KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "미션 디자인AD", item: "UPS", spec: "3상 25KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "벼룩신문", item: "UPS", spec: "3상 40KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "서원건설(주)", item: "UPS", spec: "3상 80KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "세일포트마", item: "UPS", spec: "3상 15KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "중앙상호신용금고", item: "UPS", spec: "3상 30KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "카메카코리아", item: "UPS", spec: "3상 80KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "페덱스킨코스", item: "UPS", spec: "1상 20KVA", quantity: "22 SET" },
  { field: "산업·기업", client: "하나HSBC생명보험(주)", item: "UPS", spec: "3상 60KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "한국 FA", item: "UPS", spec: "3상 200KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "한국IBM", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "한화큐셀(진천사업장)", item: "UPS", spec: "3상 80KVA", quantity: "1 SET" },
  { field: "산업·기업", client: "현대그룹 다이모스(주)", item: "UPS", spec: "3상 130KVA", quantity: "1 SET" },

  // 공공·연구 (13개 항목 / 13곳)
  { field: "공공·연구", client: "KOICA(한국국제협력단)", item: "UPS", spec: "1상 3KVA / 5KVA", quantity: "54대" },
  { field: "공공·연구", client: "광명시청", item: "UPS", spec: "3상 30KVA", quantity: "1 SET" },
  { field: "공공·연구", client: "국립보건원", item: "UPS", spec: "3상 50 / 80 / 60KVA", quantity: "각 1 SET" },
  { field: "공공·연구", client: "국립환경연구원", item: "UPS", spec: "3상 50KVA (72시간)", quantity: "1 SET" },
  { field: "공공·연구", client: "기무사", item: "UPS", spec: "3상 80KVA", quantity: "1 SET" },
  { field: "공공·연구", client: "대전 한국기계연구원", item: "UPS", spec: "3상 20KVA / 15KVA", quantity: "각 1 SET" },
  { field: "공공·연구", client: "대한송유관공사", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "공공·연구", client: "도봉구청", item: "UPS", spec: "3상 80KVA", quantity: "1 SET" },
  { field: "공공·연구", client: "서울메트로 지하철2호선", item: "UPS&AVR", spec: "3상 20KVA", quantity: "각 15 SET" },
  { field: "공공·연구", client: "한국산업인력공단", item: "UPS", spec: "3상 50KVA", quantity: "3 SET" },
  { field: "공공·연구", client: "한국천문연구원(연세대)", item: "UPS", spec: "3상 30KVA", quantity: "5 SET" },
  { field: "공공·연구", client: "한국해양연구원", item: "UPS", spec: "3상 80KVA", quantity: "1대" },
  { field: "공공·연구", client: "화성시청", item: "UPS", spec: "3상 30KVA", quantity: "1 SET" },

  // 의료 (6개 항목 / 6곳)
  { field: "의료", client: "동의성단원병원(안산)", item: "UPS", spec: "3상 50KVA", quantity: "1 SET" },
  { field: "의료", client: "부천병원", item: "UPS", spec: "1상 10KVA", quantity: "8 SET" },
  { field: "의료", client: "안산중앙병원", item: "UPS", spec: "3상 40, 20, 15KVA", quantity: "각 1 SET" },
  { field: "의료", client: "여의도성모병원", item: "UPS", spec: "3상 60KVA", quantity: "1 SET" },
  { field: "의료", client: "오렌지성형외과", item: "UPS", spec: "1상 20KVA", quantity: "1 SET" },
  { field: "의료", client: "홍성 김용신 내과의원", item: "UPS", spec: "3상 30KVA", quantity: "1 SET" },
];
