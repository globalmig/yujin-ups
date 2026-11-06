import Container from "@/components/layout/Container";

function CalendarIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function CaseIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const stats = [
  { icon: CalendarIcon, value: "1996", label: "UPS 사업 시작" },
  { icon: AwardIcon, value: "30년 이상", label: "UPS 전문 경험" },
  { icon: CaseIcon, value: "2,500여 대", label: "중대형 UPS 공급 실적" },
  { icon: BoltIcon, value: "1~200KVA", label: "다양한 용량 대응" },
];

export default function StatsBar() {
  return (
    <section className="bg-linear-to-r from-navy to-blue text-white" aria-label="주요 실적">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-y-6 py-6">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-start md:justify-center gap-4 px-2 ${
              i < stats.length - 1 ? "md:border-r md:border-white/20" : ""
            }`}
          >
            <Icon />
            <p className="flex flex-col leading-tight">
              <b className="text-lg md:text-xl font-bold">{value}</b>
              <span className="text-xs text-white/70">{label}</span>
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
