import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "유진전원시스템(주)의 개인정보처리방침을 안내합니다.",
  alternates: { canonical: "https://www.upscom.co.kr/privacy" },
  openGraph: {
    title: "개인정보처리방침 | 유진전원시스템",
    description: "유진전원시스템(주)의 개인정보처리방침을 안내합니다.",
    url: "https://www.upscom.co.kr/privacy",
  },
};

type Clause = {
  title: string;
  body?: string;
  items?: string[];
};

const clauses: Clause[] = [
  {
    title: "1. 수집하는 개인정보의 항목 및 수집방법",
    body: "유진전원시스템(주)(이하 \"당사\")는 견적문의 및 상담 접수를 위하여 홈페이지 내 견적문의 게시판을 통해 이용자가 직접 입력하는 방식으로 아래와 같은 정보를 수집합니다.",
    items: [
      "필수항목: 상호(소속), 담당자 성명, 직책, 전화번호, 이메일 주소",
      "선택항목: 휴대폰번호, 팩스번호",
      "서비스 이용 과정에서 자동으로 생성·수집되는 정보: 접속 로그, 쿠키, 접속 IP 정보",
    ],
  },
  {
    title: "2. 개인정보의 수집 및 이용목적",
    items: [
      "견적문의 및 상담 접수에 대한 확인, 답변, 처리결과 안내",
      "제품 사양 확인 및 맞춤 견적 제공",
      "문의 이력 관리 및 중복 문의 확인",
      "공지사항 등 고지사항 전달",
    ],
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    body: "당사는 개인정보의 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 견적문의 처리 이력 관리를 위하여 문의 접수일로부터 1년간 보관 후 파기하며, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 당사는 관계법령에서 정한 기간 동안 개인정보를 보관합니다.",
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: "당사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.",
    items: [
      "이용자가 사전에 동의한 경우",
      "법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우",
    ],
  },
  {
    title: "5. 개인정보처리의 위탁",
    body: "당사는 현재 개인정보 처리업무를 외부 업체에 위탁하고 있지 않습니다. 향후 위탁이 필요한 경우 위탁받는 자와 위탁업무의 내용을 사전에 홈페이지를 통해 공지하고, 필요한 경우 이용자의 동의를 받도록 하겠습니다.",
  },
  {
    title: "6. 정보주체의 권리·의무 및 행사방법",
    body: "이용자는 언제든지 자신의 개인정보에 대하여 열람, 정정, 삭제, 처리정지를 요청할 수 있으며, 아래의 방법으로 요청하실 수 있습니다. 당사는 이용자의 요청이 있을 경우 지체 없이 필요한 조치를 취합니다.",
    items: [
      "개인정보 보호책임자에게 이메일로 요청",
      "전화 또는 고객센터를 통한 요청",
    ],
  },
  {
    title: "7. 쿠키(Cookie)의 운용",
    body: "당사는 이용자에게 맞춤화된 서비스를 제공하기 위하여 쿠키를 사용할 수 있습니다. 쿠키는 웹사이트 이용 통계 분석 등의 목적으로만 사용되며, 이용자는 웹브라우저의 설정을 변경하여 쿠키 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부할 경우 서비스 이용에 일부 어려움이 발생할 수 있습니다.",
  },
  {
    title: "8. 개인정보의 안전성 확보조치",
    items: [
      "개인정보 취급 담당자를 최소한으로 지정하여 관리",
      "전송구간 암호화(HTTPS) 적용",
      "방화벽 및 보안프로그램을 통한 외부 침입 차단",
      "접근권한 관리를 통한 개인정보 접근 통제",
    ],
  },
  {
    title: "9. 개인정보 보호책임자",
    body: "당사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
    items: ["부서: 시스템사업부", "E-mail: ups8057@naver.com"],
  },
  {
    title: "부칙",
    body: "이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/common/bg-contact.jpg"
        imageAlt="개인정보처리방침 배경"
        eyebrow="PRIVACY POLICY"
        title="개인정보처리방침"
        description="유진전원시스템(주)은 고객님의 개인정보를 소중히 보호합니다."
      />

      <section className="py-16 md:py-30 bg-white">
        <Container className="max-w-275!">
          <div className="text-sm text-ink leading-relaxed space-y-8">
            {clauses.map((clause) => (
              <div key={clause.title}>
                <h2 className="text-base font-bold text-navy mb-2">{clause.title}</h2>
                {clause.body && <p>{clause.body}</p>}
                {clause.items && (
                  <ul className={clause.body ? "mt-2 space-y-1" : "space-y-1"}>
                    {clause.items.map((item) => (
                      <li key={item} className="flex gap-1.5">
                        <span aria-hidden="true">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
