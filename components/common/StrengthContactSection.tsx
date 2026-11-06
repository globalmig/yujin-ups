import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

const strengths = [
  "30년 이상 UPS 제조 노하우",
  "우수한 기술력과 품질",
  "철저한 사후관리 및 기술지원",
  "고객 맞춤형 설계 및 제작",
  "빠른 대응과 신속한 유지보수",
];

export default function StrengthContactSection() {
  return (
    <section id="service" className="grid grid-cols-1 lg:grid-cols-2 scroll-mt-20">
      {/* 강점 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-navy text-white">
        <div className="px-6 py-10 md:px-10 md:py-12 flex flex-col justify-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white/70 mb-2">OUR STRENGTHS</p>
          <h2 className="text-xl md:text-[40px] font-bold mb-5">유진전원시스템의 강점</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {strengths.map((s) => (
              <li key={s} className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center text-xs shrink-0">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-55 sm:min-h-full">
          <Image src="/image/home/strength.png" alt="유진전원시스템의 강점" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-navy/70 to-transparent" />
        </div>
      </div>

      {/* 문의 */}
      <div id="contact" className="relative overflow-hidden bg-linear-to-br from-blue to-blue-dark text-white scroll-mt-20">
        <div className="relative z-10 px-6 py-10 md:px-14 md:py-12 max-w-lg">
          <p className="text-xs font-bold tracking-[0.2em] text-white/70 mb-2">YOUR POWER, OUR RESPONSIBILITY</p>
          <h2 className="text-xl md:text-[40px] font-bold mb-2">UPS 견적이 필요하신가요?</h2>
          <p className="text-sm text-white/85 leading-relaxed mb-4">
            용량을 모르셔도, 제품을 모르셔도 괜찮습니다.
            <br />
            전문가가 친절하게 상담해 드리겠습니다.
          </p>
          <Link href="tel:02-894-8057" className="block text-2xl font-bold mb-1">
            ☎ 02-894-8057
          </Link>
          <Link href="mailto:ups8057@naver.com" className="block text-sm text-white/85 mb-5">
            ✉ ups8057@naver.com
          </Link>
          <Button href="mailto:ups8057@naver.com?subject=UPS%20견적%20문의" variant="white">
            견적 문의하기
          </Button>
        </div>
        <div
          className="hidden md:block absolute right-[3%] bottom-0 w-[32%] h-[95%]"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 20%)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 20%)" }}
        >
          <Image src="/image/home/quote.png" alt="UPS 견적 문의" fill sizes="32vw" className="object-cover object-bottom" />
        </div>
      </div>
    </section>
  );
}
