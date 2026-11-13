import Image from "next/image";
import Container from "@/components/layout/Container";

const risks = [
  {
    title: "전산실 서버 다운",
    desc: "거래로그 유실, 복구 비용 폭증",
    image: "/image/다운손실%20사례01.png",
  },
  {
    title: "수술 장비 정지",
    desc: "수술 중단, 환자 안전 리스크",
    image: "/image/다운손실%20사례02.png",
  },
  {
    title: "IT 인프라 장애",
    desc: "복구 작업 장기화, 업무 마비",
    image: "/image/다운손실%20사례03.png",
  },
  {
    title: "의료 영상 장비 정지",
    desc: "진단 지연, 응급 대응 차질",
    image: "/image/다운손실%20사례04.png",
  },
];

export default function DowntimeRiskSection() {
  return (
    <section className="py-16 md:py-30 bg-[#ECEFF1]">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <p className="text-xs text-blue font-bold tracking-widest uppercase mb-3">POWER QUALITY MATTERS</p>
          <h2 className="text-2xl md:text-[40px] font-bold text-navy leading-snug mb-6">
            다운타임 1초도 치명적인 손실이 됩니다.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            서버 중단은 데이터 손실로, 의료 장비 정지는 안전 리스크로, 제조 라인 정지는 납기 지연과 반품으로
            이어집니다. <span className="font-semibold text-navy">전력 품질은 비즈니스의 생명선입니다.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {risks.map(({ title, desc, image }) => (
            <div key={title} className="bg-white rounded-lg border border-line overflow-hidden text-center sm:text-left">
              <div className="relative w-full aspect-square">
                <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-lg font-bold text-navy mb-2">{title}</p>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
