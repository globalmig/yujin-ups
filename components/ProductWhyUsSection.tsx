import Container from "@/components/Container";
import Button from "@/components/Button";

function TrophyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M5 4h2v3a3 3 0 0 1-3-3 1 1 0 0 1 1-1zM19 4h-2v3a3 3 0 0 0 3-3 1 1 0 0 0-1-1z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function CheckShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const stats = [
  { icon: TrophyIcon, value: "30+", label: "30년 이상의 UPS 전문 기술력" },
  { icon: UsersIcon, value: "10,000+", label: "누적 납품 및 설치 실적" },
  { icon: HeadsetIcon, value: "24/7", label: "365일 24시간 기술지원" },
  { icon: CheckShieldIcon, value: "100%", label: "국내 설계 · 제작 · 검수" },
];

export default function ProductWhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy leading-snug mb-4">
            왜 <span className="text-blue">유진전원시스템</span>의
            <br />
            UPS를 선택해야 할까요?
          </h2>
          <p className="text-sm md:text-base text-muted leading-relaxed mb-8">
            30년 기술력과 현장 경험으로 검증된 안정성과 신뢰성, 차별화된
            서비스를 제공합니다.
          </p>
          <Button href="/company" variant="primary">
            회사소개 바로가기 →
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="border border-line rounded-lg p-5 md:p-6 bg-white">
              <span className="text-blue mb-3 inline-flex">
                <Icon />
              </span>
              <p className="text-2xl md:text-3xl font-bold text-navy leading-none mb-2">{value}</p>
              <p className="text-xs md:text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
