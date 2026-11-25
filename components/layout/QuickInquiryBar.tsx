"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isQuickInquiryBarHidden } from "./quickInquiryVisibility";

const INITIAL_FORM = { name: "", tel: "" };

type FormState = typeof INITIAL_FORM;

export default function QuickInquiryBar() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);

  if (isQuickInquiryBarHidden(pathname)) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "tel") {
      setForm((prev) => ({ ...prev, tel: value.replace(/\D/g, "") }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const missing: string[] = [];
    if (!form.name.trim()) missing.push("상호명/담당자");
    if (!form.tel.trim()) missing.push("연락처");

    if (missing.length > 0) {
      alert(`다음 필수 항목을 입력해 주세요:\n${missing.map((m) => `• ${m}`).join("\n")}`);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/quick-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("서버 오류");
      alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
      setForm(INITIAL_FORM);
      setMobileFormOpen(false);
    } catch {
      alert("문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  const formFields = (
    <>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="상호명 또는 담당자 이름"
        aria-label="상호명 또는 담당자 이름"
        maxLength={100}
        className="w-full border border-white/15 bg-white text-ink placeholder-muted rounded px-3 py-2 text-sm outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20 sm:w-48"
      />
      <input
        type="tel"
        name="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        value={form.tel}
        onChange={handleChange}
        placeholder="연락처"
        aria-label="연락처"
        maxLength={20}
        className="w-full border border-white/15 bg-white text-ink placeholder-muted rounded px-3 py-2 text-sm outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20 sm:w-40"
      />
      <button
        type="submit"
        disabled={submitting}
        className="shrink-0 inline-flex items-center justify-center min-h-10 bg-blue text-white px-6 rounded text-sm font-bold transition-colors hover:bg-blue-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "접수 중..." : "문의하기"}
      </button>
    </>
  );

  return (
    <>
      <div aria-hidden className="h-16" />

      {/* 모바일: 견적문의 버튼 클릭 시 아래에서 위로 펼쳐지는 간편문의 폼 */}
      <div
        aria-hidden={!mobileFormOpen}
        className={`sm:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          mobileFormOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileFormOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="간편문의"
        className={`sm:hidden fixed bottom-0 inset-x-0 z-50 bg-navy-dark rounded-t-2xl shadow-[0_-4px_16px_rgba(0,0,0,0.15)] transition-transform duration-300 ${
          mobileFormOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <form onSubmit={handleSubmit} className="px-4 pt-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-white">간편문의</span>
            <button
              type="button"
              onClick={() => setMobileFormOpen(false)}
              aria-label="간편문의 닫기"
              className="inline-flex items-center justify-center w-8 h-8 text-white/70"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-3">{formFields}</div>
        </form>
      </div>

      <div className="fixed bottom-0 inset-x-0 z-30 bg-navy-dark shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        {/* 모바일: 전화·견적문의 버튼만 작게 표시 (본문/사양표를 가리지 않도록) */}
        <div className="sm:hidden flex items-center gap-2 px-4 py-2.5">
          <Link
            href="tel:02-894-8057"
            className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-10 border border-white/20 text-white rounded text-sm font-bold"
          >
            전화 문의
          </Link>
          <button
            type="button"
            onClick={() => setMobileFormOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-10 bg-blue text-white rounded text-sm font-bold"
          >
            견적 문의
          </button>
        </div>

        {/* PC/태블릿: 이름·연락처 입력 후 바로 접수 */}
        <form onSubmit={handleSubmit} className="hidden sm:block">
          <div className="max-w-300 mx-auto px-4 py-5 flex items-center gap-3">
            <span className="text-xl font-bold text-white shrink-0 whitespace-nowrap">간편문의</span>
            {formFields}
          </div>
        </form>
      </div>
    </>
  );
}
