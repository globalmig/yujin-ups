// 출처: docs/납품검수확인서(전체)-1.pdf

export type InspectionCategory =
  | "건물·시설"
  | "공공·연구·행정"
  | "교육·대학·학교"
  | "산업·기업"
  | "의료·병원"
  | "금융·은행·농협·수협·새마을금고";

export interface InspectionDocument {
  certNo: string;
  part: number;
  totalParts: number;
  /** 같은 묶음 안에서 장(페이지)마다 현장명이 다르게 표기된 경우에만 사용 */
  site?: string;
}

export interface DeliveryInspection {
  category: InspectionCategory;
  client: string;
  documents: InspectionDocument[];
}

export const deliveryInspections: DeliveryInspection[] = [
  // 건물·시설 (11곳 / 12장)
  { category: "건물·시설", client: "강남구 역삼동 797-27", documents: [{ certNo: "003", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "나라키움 역삼A빌딩 102호", documents: [{ certNo: "009", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "대우트럼프월드2차", documents: [{ certNo: "001", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "안양시 동안구 두산벤처다임1029", documents: [{ certNo: "004", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "여의도 인영빌딩 10층", documents: [{ certNo: "035", part: 1, totalParts: 1 }] },
  {
    category: "건물·시설",
    client: "용평리조트",
    documents: [
      { certNo: "029", part: 1, totalParts: 2 },
      { certNo: "030", part: 2, totalParts: 2 },
    ],
  },
  { category: "건물·시설", client: "인천 북항로 309번길 118", documents: [{ certNo: "007", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "충북 청주시 직지스마트타워", documents: [{ certNo: "023", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "파크팰리스", documents: [{ certNo: "051", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "평창휴게소(상행선)", documents: [{ certNo: "048", part: 1, totalParts: 1 }] },
  { category: "건물·시설", client: "해성제2빌딩", documents: [{ certNo: "040", part: 1, totalParts: 1 }] },

  // 공공·연구·행정 (12곳 / 12장)
  { category: "공공·연구·행정", client: "강동수도사업소", documents: [{ certNo: "059", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "강원도 동해시 해군1함대", documents: [{ certNo: "022", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "기초과학연구원", documents: [{ certNo: "019", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "나노융합기술원", documents: [{ certNo: "042", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "대한결핵협회 서울시 지부", documents: [{ certNo: "049", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "동천안농협 로컬푸드현장", documents: [{ certNo: "046", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "신영127 행정시설", documents: [{ certNo: "069", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "전남광주 치평동 (수자원공사)", documents: [{ certNo: "045", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "한국동물약품기술연구원", documents: [{ certNo: "031", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "한국원자력연구원", documents: [{ certNo: "037", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "홍천읍 태학정수장", documents: [{ certNo: "047", part: 1, totalParts: 1 }] },
  { category: "공공·연구·행정", client: "화성시 수질복원센터", documents: [{ certNo: "002", part: 1, totalParts: 1 }] },

  // 교육·대학·학교 (8곳 / 12장)
  { category: "교육·대학·학교", client: "가톨릭대학교 성신교정 전산실", documents: [{ certNo: "026", part: 1, totalParts: 1 }] },
  { category: "교육·대학·학교", client: "광주과학기술원", documents: [{ certNo: "056", part: 1, totalParts: 1 }] },
  {
    category: "교육·대학·학교",
    client: "동의대학교",
    documents: [
      { certNo: "060", part: 1, totalParts: 2 },
      { certNo: "067", part: 2, totalParts: 2 },
    ],
  },
  {
    category: "교육·대학·학교",
    client: "민족사관고등학교",
    documents: [
      { certNo: "016", part: 1, totalParts: 3 },
      { certNo: "038", part: 2, totalParts: 3 },
      { certNo: "064", part: 3, totalParts: 3 },
    ],
  },
  { category: "교육·대학·학교", client: "부경대학교 / 물리학과", documents: [{ certNo: "005", part: 1, totalParts: 1 }] },
  { category: "교육·대학·학교", client: "서울대학교 501동 B-219호", documents: [{ certNo: "027", part: 1, totalParts: 1 }] },
  {
    category: "교육·대학·학교",
    client: "성균관대학교 기초과학연구원",
    documents: [
      { certNo: "052", part: 1, totalParts: 2, site: "성균관대학교 기초과학연구원" },
      { certNo: "058", part: 2, totalParts: 2, site: "조새벽 교수 연구실 23121호" },
    ],
  },
  { category: "교육·대학·학교", client: "아주대학교 레이저연구실", documents: [{ certNo: "053", part: 1, totalParts: 1 }] },

  // 산업·기업 (17곳 / 21장)
  { category: "산업·기업", client: "(주)LIG건설", documents: [{ certNo: "020", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "경남에너지 진영지구정압기", documents: [{ certNo: "068", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "(주)나르샤팜 경기광주 물류센터", documents: [{ certNo: "070", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "레퍼런스바이오랩", documents: [{ certNo: "021", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "명성에이브이", documents: [{ certNo: "065", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "비와이씨(신축사옥)", documents: [{ certNo: "028", part: 1, totalParts: 1 }] },
  {
    category: "산업·기업",
    client: "비코리아(충남광천)",
    documents: [
      { certNo: "072", part: 1, totalParts: 2 },
      { certNo: "073", part: 2, totalParts: 2 },
    ],
  },
  { category: "산업·기업", client: "삼양화학공업(주) 영동공장", documents: [{ certNo: "011", part: 1, totalParts: 1 }] },
  {
    category: "산업·기업",
    client: "수엔지니어링",
    documents: [
      { certNo: "006", part: 1, totalParts: 2, site: "(주)수엔지니어링" },
      { certNo: "017", part: 2, totalParts: 2, site: "수엔지니어링" },
    ],
  },
  { category: "산업·기업", client: "이투시스템", documents: [{ certNo: "024", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "제이피이", documents: [{ certNo: "054", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "테크하임", documents: [{ certNo: "050", part: 1, totalParts: 1 }] },
  { category: "산업·기업", client: "평택NCK", documents: [{ certNo: "044", part: 1, totalParts: 1 }] },
  {
    category: "산업·기업",
    client: "한국SGS",
    documents: [
      { certNo: "014", part: 1, totalParts: 2, site: "동탄한국SGS" },
      { certNo: "015", part: 2, totalParts: 2, site: "한국SGS" },
    ],
  },
  { category: "산업·기업", client: "한국신광마이크로애랙트로닉스(주)", documents: [{ certNo: "033", part: 1, totalParts: 1 }] },
  {
    category: "산업·기업",
    client: "한솔윌텍(전산실)",
    documents: [
      { certNo: "008", part: 1, totalParts: 2 },
      { certNo: "013", part: 2, totalParts: 2 },
    ],
  },
  { category: "산업·기업", client: "한화큐셀(진천사업장)", documents: [{ certNo: "025", part: 1, totalParts: 1 }] },

  // 의료·병원 (6곳 / 6장)
  { category: "의료·병원", client: "SNU서울병원", documents: [{ certNo: "071", part: 1, totalParts: 1 }] },
  { category: "의료·병원", client: "더좋은병원", documents: [{ certNo: "010", part: 1, totalParts: 1 }] },
  { category: "의료·병원", client: "더좋은요양병원", documents: [{ certNo: "032", part: 1, totalParts: 1 }] },
  { category: "의료·병원", client: "샘물호스피스병원", documents: [{ certNo: "066", part: 1, totalParts: 1 }] },
  { category: "의료·병원", client: "세인트마리여성병원", documents: [{ certNo: "055", part: 1, totalParts: 1 }] },
  { category: "의료·병원", client: "좋은아침병원", documents: [{ certNo: "012", part: 1, totalParts: 1 }] },

  // 금융·은행·농협·수협·새마을금고 (6곳 / 10장)
  { category: "금융·은행·농협·수협·새마을금고", client: "가평군 새마을금고", documents: [{ certNo: "041", part: 1, totalParts: 1 }] },
  { category: "금융·은행·농협·수협·새마을금고", client: "금천남부새마을금고 중앙지점", documents: [{ certNo: "039", part: 1, totalParts: 1 }] },
  {
    category: "금융·은행·농협·수협·새마을금고",
    client: "서홍천농협",
    documents: [
      { certNo: "061", part: 1, totalParts: 3, site: "서홍천농협 / 모곡지점" },
      { certNo: "062", part: 2, totalParts: 3, site: "서홍천농협 / 두미지점" },
      { certNo: "063", part: 3, totalParts: 3, site: "서홍천농협 / 시동지점" },
    ],
  },
  {
    category: "금융·은행·농협·수협·새마을금고",
    client: "수협 난곡지점",
    documents: [
      { certNo: "034", part: 1, totalParts: 2 },
      { certNo: "057", part: 2, totalParts: 2 },
    ],
  },
  { category: "금융·은행·농협·수협·새마을금고", client: "수협 장평지점", documents: [{ certNo: "043", part: 1, totalParts: 1 }] },
  {
    category: "금융·은행·농협·수협·새마을금고",
    client: "중구농협 하인천지점",
    documents: [
      { certNo: "018", part: 1, totalParts: 2 },
      { certNo: "036", part: 2, totalParts: 2 },
    ],
  },
];
