import Image from "next/image";
import Link from "next/link";

export default function ContactCtaBar() {
  return (
    <section className="bg-surface">
      <div className="w-full max-w-360 mx-auto flex flex-col md:flex-row md:py-15">
        <div className="flex items-center gap-4 bg-white px-6 py-6 md:px-10 md:py-12 md:w-full md:max-w-md shrink-0">
          <span className="w-11 h-11 rounded-full bg-white border border-line text-blue flex items-center justify-center shrink-0">
            <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          </span>
          <p className="leading-snug">
            <span className="block text-2xl font-bold text-navy mb-4">어떤 용량의 UPS가 필요한지 모르시겠다면?</span>
            <span className="block text-base md:text-lg text-muted">전문가가 사용 환경에 맞는 최적의 UPS를 추천해 드립니다.</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-navy px-6 py-6 md:px-10 flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <Link href="tel:02-894-8057" className="flex flex-col gap-2">
              <span className="flex items-center gap-3">
                <Image src="/image/icons/call.svg" alt="" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-2xl font-bold text-white leading-tight">02-894-8057</span>
              </span>
              <span className="block text-base md:text-lg text-white/60 leading-tight ml-8 md:ml-9">평일 09:00 ~ 18:00</span>
            </Link>
            <div className="hidden sm:block w-px h-9 bg-white/15" />
            <Link href="mailto:ups8057@naver.com" className="flex flex-col gap-2">
              <span className="flex items-center gap-3">
                <Image src="/image/icons/mail.svg" alt="" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-2xl font-bold text-white leading-tight">ups8057@naver.com</span>
              </span>
              <span className="block text-base md:text-lg text-white/60 leading-tight ml-8 md:ml-9">24시간 견적 문의 가능</span>
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 bg-white text-navy px-6 py-3 rounded-full text-sm font-bold hover:bg-white/90 transition-colors shrink-0 w-full sm:w-auto"
          >
            무료 견적 요청하기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
