import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FaqAccordion from "./_components/FaqAccordion";
import InquiryForm from "./_components/InquiryForm";

export const metadata: Metadata = {
  title: "고객지원",
  description: "유진전원시스템 고객지원 안내. 연락처, 납품실적·유지보수·기술정보 바로가기, 자주 묻는 질문을 확인하세요.",
  alternates: { canonical: "https://upscom.co.kr/support" },
  openGraph: {
    title: "고객지원 | 유진전원시스템",
    description: "연락처 안내와 자주 묻는 질문, 유진전원시스템 고객지원",
    url: "https://upscom.co.kr/support",
  },
};

const channels = [
  {
    label: "전화 문의",
    value: "02-894-8057",
    href: "tel:02-894-8057",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 12 19.79 19.79 0 0 1 1.92 3.4 2 2 0 0 1 3.9 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "팩스",
    value: "02-894-8058",
    href: undefined,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "이메일",
    value: "ups8057@naver.com",
    href: "mailto:ups8057@naver.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    label: "본사 주소",
    value: "서울시 금천구 시흥대로 97",
    href: undefined,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const quickLinks = [
  { title: "납품실적", desc: "다양한 분야의 UPS 공급 사례", href: "/projects" },
  { title: "유지보수", desc: "국산·수입 UPS 전문 유지보수", href: "/maintenance" },
  { title: "기술정보", desc: "용량별 대응 범위와 기술력", href: "/tech-info" },
  { title: "견적문의", desc: "UPS 견적 요청하기", href: "/contact" },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/common/bg-contact.jpg"
        imageAlt="고객지원 배경"
        eyebrow="CUSTOMER SUPPORT"
        title="고객지원"
        description="연락처 안내와 자주 묻는 질문 등 유진전원시스템 고객지원 정보를 확인하세요."
      />

  {/* 일반 문의 */}
      <section className="py-16 md:py-30 bg-white">
        <Container className="max-w-275">
          <SectionTitle eyebrow="GENERAL INQUIRY" title="일반 문의" description="견적 외 궁금한 점이나 요청 사항을 남겨주시면 담당자가 확인 후 답변드립니다." />
          <InquiryForm />
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-30 bg-surface">
        <Container className="max-w-220">
          <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />
          <FaqAccordion />
        </Container>
      </section>


      {/* 바로가기 */}
      {/* <section className="py-16 md:py-30 bg-surface">
        <Container>
          <SectionTitle eyebrow="QUICK LINKS" title="바로가기" description="필요한 정보를 빠르게 찾아보세요." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {quickLinks.map((q) => (
              <Link
                key={q.title}
                href={q.href}
                className="group bg-white rounded-md border border-line p-5 md:p-6 flex flex-col justify-between gap-4 hover:border-blue hover:shadow-lg transition-all"
              >
                <div>
                  <h3 className="text-sm md:text-base font-bold text-navy mb-1.5">{q.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{q.desc}</p>
                </div>
                <span className="self-end w-8 h-8 rounded-full bg-surface border border-line flex items-center justify-center text-navy text-xs group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-colors">
                  ›
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section> */}

       {/* 연락처 */}
      <section className="py-16 md:py-30 bg-white">
        <Container>
          <SectionTitle eyebrow="CONTACT INFO" title="연락처 안내" description="궁금하신 사항이나 필요한 자료가 있으시면 언제든지 문의해 주세요." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {channels.map((c) => {
              const content = (
                <div className="h-full bg-surface rounded-md p-5 md:p-6 text-center flex flex-col items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue/10 text-blue">{c.icon}</span>
                  <div>
                    <p className="text-xs text-muted font-semibold tracking-widest uppercase mb-1">{c.label}</p>
                    <p className="text-sm md:text-base font-bold text-ink break-all">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <Link key={c.label} href={c.href} className="block hover:-translate-y-1 transition-transform">
                  {content}
                </Link>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
