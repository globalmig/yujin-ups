import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "서비스 이용약관",
  description: "유진전원시스템(주)의 서비스 이용약관을 안내합니다.",
  alternates: { canonical: "https://www.upscom.co.kr/terms" },
  openGraph: {
    title: "서비스 이용약관 | 유진전원시스템",
    description: "유진전원시스템(주)의 서비스 이용약관을 안내합니다.",
    url: "https://www.upscom.co.kr/terms",
  },
};

const clauses = [
  {
    title: "제1조 (목적)",
    body: "이 약관은 유진전원시스템(주)(이하 \"회사\")가 운영하는 웹사이트(이하 \"사이트\")에서 제공하는 제품 정보, 견적문의, 고객지원 등 제반 서비스(이하 \"서비스\")의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
  },
  {
    title: "제2조 (약관의 효력 및 변경)",
    body: "① 이 약관은 사이트에 게시함으로써 효력을 발생합니다. ② 회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 개정 시 적용일자 및 개정사유를 명시하여 사이트에 사전 공지합니다.",
  },
  {
    title: "제3조 (서비스의 내용)",
    body: "회사는 다음과 같은 서비스를 제공합니다. ① 회사 및 제품 소개 정보 제공 ② 견적문의 및 상담 접수 ③ 유지보수 등 고객지원 관련 정보 제공 ④ 기타 회사가 정하는 서비스",
  },
  {
    title: "제4조 (이용자의 의무)",
    body: "이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다. ① 타인의 정보를 도용하거나 허위 정보를 등록하는 행위 ② 사이트의 운영을 방해하거나 서버에 부당한 부담을 주는 행위 ③ 회사 또는 제3자의 지식재산권을 침해하는 행위 ④ 관계 법령에 위반되는 행위",
  },
  {
    title: "제5조 (문의 접수 및 처리)",
    body: "① 이용자가 견적문의 등을 통해 제출한 내용은 담당자 확인 후 순차적으로 답변됩니다. ② 문의 내용이 사실과 다르거나 처리가 불가능한 경우 회사는 그 사유를 안내할 수 있습니다.",
  },
  {
    title: "제6조 (지식재산권)",
    body: "사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 로고, 제품 정보 등)에 대한 저작권 및 지식재산권은 회사에 귀속되며, 이용자는 회사의 사전 동의 없이 이를 복제, 배포, 전송, 2차적 저작물 작성 등의 방법으로 이용할 수 없습니다.",
  },
  {
    title: "제7조 (면책조항)",
    body: "① 회사는 천재지변, 불가항력적 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다. ② 회사는 이용자가 사이트에 게재한 정보, 자료, 사실의 신뢰도 및 정확성에 대해서는 책임을 지지 않습니다.",
  },
  {
    title: "제8조 (분쟁 해결)",
    body: "이 약관과 관련하여 회사와 이용자 간 분쟁이 발생한 경우 상호 협의하여 해결하며, 협의가 이루어지지 않을 경우 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.",
  },
  {
    title: "부칙",
    body: "이 약관은 2026년 1월 1일부터 적용됩니다.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/common/bg-contact.jpg"
        imageAlt="서비스 이용약관 배경"
        eyebrow="TERMS OF SERVICE"
        title="서비스 이용약관"
        description="유진전원시스템(주) 웹사이트 서비스 이용에 관한 약관을 안내합니다."
      />

      <section className="py-16 md:py-30 bg-white">
        <Container className="max-w-275!">
          <div className="text-sm text-ink leading-relaxed space-y-8">
            {clauses.map((clause) => (
              <div key={clause.title}>
                <h2 className="text-base font-bold text-navy mb-2">{clause.title}</h2>
                <p>{clause.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
