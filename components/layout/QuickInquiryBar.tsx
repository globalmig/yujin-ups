"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { isQuickInquiryBarHidden } from "./quickInquiryVisibility";

const INITIAL_FORM = { name: "", tel: "" };

type FormState = typeof INITIAL_FORM;

export default function QuickInquiryBar() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

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
    } catch {
      alert("문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div aria-hidden className="h-30 sm:h-16" />
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 inset-x-0 z-30 bg-navy-dark shadow-[0_-2px_12px_rgba(0,0,0,0.08)]"
      >
        <div className="max-w-300 mx-auto px-4 py-5 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
          <label htmlFor="quick-inquiry-name" className="hidden sm:inline text-xl font-bold text-white shrink-0 whitespace-nowrap">간편문의</label>
          <input
            id="quick-inquiry-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="상호명 또는 담당자 이름"
            aria-label="상호명 또는 담당자 이름"
            maxLength={100}
            className="flex-1 min-w-0 basis-[calc(50%-4px)] sm:basis-auto sm:w-48 border border-white/15 bg-white text-ink placeholder-muted rounded px-3 py-2 text-sm outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20"
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
            className="flex-1 min-w-0 basis-[calc(50%-4px)] sm:basis-auto sm:w-40 border border-white/15 bg-white text-ink placeholder-muted rounded px-3 py-2 text-sm outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center min-h-10 bg-blue text-white px-6 rounded text-sm font-bold transition-colors hover:bg-blue-dark disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "접수 중..." : "문의하기"}
          </button>
        </div>
      </form>
    </>
  );
}
