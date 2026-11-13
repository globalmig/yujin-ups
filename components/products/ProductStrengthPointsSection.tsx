import Image from "next/image";
import Container from "@/components/layout/Container";

const points = [
  {
    label: "POINT 01",
    title: "Zero Transfer Time",
    desc: "정전이 발생하면 0ms로 배터리 전원으로 전환되며, UPS가 꺼진 상태에서도 배터리를 자동으로 충전합니다.",
    image: "/image/제품강점01.png",
  },
  {
    label: "POINT 02",
    title: "지능형 제어",
    desc: "전원을 켤 때마다 내부 회로와 배터리 상태를 자가 점검하며, 16비트 MCU가 전력을 최적으로 관리합니다.",
    image: "/image/제품강점02.png",
  },
  {
    label: "POINT 03",
    title: "컴팩트 타워형",
    desc: "좁은 공간에도 효율적으로 설치할 수 있는 컴팩트한 타워형 디자인을 적용했습니다.",
    image: "/image/제품강점03.png",
  },
  {
    label: "POINT 04",
    title: "순수 정현파 출력",
    desc: "순수 정현파 출력으로 부하 장비의 수명을 연장하고 안정적으로 구동하여 최상의 안정성을 유지합니다.",
    image: "/image/제품강점04.png",
  },
];

export default function ProductStrengthPointsSection() {
  return (
    <section className="relative py-16 md:py-30 overflow-hidden bg-navy-dark">
      <Image src="/image/제품강점%20배경.png" alt="" fill sizes="100vw" className="object-cover" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-blue-light font-semibold mb-3">
            정전의 순간에도 기기는 멈추지 않습니다.
          </p>
          <h2 className="text-2xl md:text-[40px] font-bold text-white leading-snug mb-4">
            멈추지 않는 전력, 365일 안심하고 사용하는 무결점 비즈니스
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            컴퓨터 전원, 공정제어기기, 통신기기, 의료기기, 전자장비 등을 정전 시에도 작동시켜 정전으로부터 각종
            산업기기를 완벽하게 보호합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {points.map(({ label, title, desc, image }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row items-stretch rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm border border-white/15"
            >
              <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-3/4 shrink-0">
                <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-xs text-blue-light font-bold tracking-widest uppercase mb-2">{label}</p>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
