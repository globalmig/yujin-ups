"use client";

import { useState } from "react";

const faqs = [
  {
    q: "견적은 어떻게 받을 수 있나요?",
    a: "견적문의 페이지에서 제품 종류, 용량, 전압 등 필요한 정보를 입력해 주시면 담당자가 확인 후 빠르게 안내해 드립니다. 용량이나 제품을 잘 모르셔도 전문가가 상담해 드리니 편하게 문의해 주세요.",
  },
  {
    q: "타사(수입) UPS도 유지보수가 가능한가요?",
    a: "가능합니다. 제조사의 구분 없이 국산 및 수입 UPS 모두 점검, 정비, 유지관리가 가능합니다. 자세한 내용은 유지보수 페이지를 참고해 주세요.",
  },
  {
    q: "방문 상담이나 현장 실사도 가능한가요?",
    a: "네, 가능합니다. 견적문의 또는 전화로 요청해 주시면 현장 상황에 맞춰 방문 상담 일정을 조율해 드립니다.",
  },
  {
    q: "소규모 사무실용 UPS도 제작하나요?",
    a: "네, 1KVA 소형 UPS부터 200KVA 대용량 UPS까지 사용 환경에 맞는 다양한 제품을 제공하고 있습니다. 자세한 사양은 제품소개 또는 기술정보 페이지를 참고해 주세요.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border border-line rounded-md bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex items-center gap-3 text-sm md:text-base font-semibold text-ink">
                <span className="text-blue font-bold">Q</span>
                {item.q}
              </span>
              <span className={`shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-muted leading-relaxed flex gap-3">
                  <span className="text-blue font-bold shrink-0">A</span>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
