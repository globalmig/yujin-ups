"use client";

import { useState } from "react";

const INITIAL_FORM = {
  company: "",
  manager: "",
  tel1: "",
  tel2: "",
  tel3: "",
  email1: "",
  email2: "",
  message: "",
};

type FormState = typeof INITIAL_FORM;

const TEL_FIELDS = new Set(["tel1", "tel2", "tel3"]);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (TEL_FIELDS.has(name)) {
      setForm((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const missing: string[] = [];
    if (!form.company.trim()) missing.push("상호");
    if (!form.manager.trim()) missing.push("담당자");
    if (!form.tel1.trim() || !form.tel2.trim() || !form.tel3.trim()) missing.push("전화번호");
    if (!form.email1.trim() || !form.email2.trim()) missing.push("이메일");
    if (!form.message.trim()) missing.push("문의내용");

    if (missing.length > 0) {
      alert(`다음 필수 항목을 입력해 주세요:\n${missing.map((m) => `• ${m}`).join("\n")}`);
      return;
    }

    if (!EMAIL_REGEX.test(`${form.email1}@${form.email2}`)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
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
    <div className="w-full">
      <p className="text-sm text-muted text-left mb-2">
        <span className="text-red-500">*</span> 표시는 필수 입력 항목입니다.
      </p>
      <form className="w-full text-sm">
        <div className="w-full border border-line rounded-md overflow-hidden">
          {/* 상호 */}
          <div className="flex flex-col md:flex-row border-b border-line">
            <label htmlFor="inquiry-company" className="w-full md:w-35 shrink-0 bg-surface px-4 py-3 font-medium text-ink border-b border-line md:border-b-0 md:border-r flex items-center">
              상호 <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex-1 px-4 py-2 flex items-center">
              <input
                id="inquiry-company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-line px-2 py-1 rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20"
              />
            </div>
          </div>

          {/* 담당자 */}
          <div className="flex flex-col md:flex-row border-b border-line">
            <label htmlFor="inquiry-manager" className="w-full md:w-35 shrink-0 bg-surface px-4 py-3 font-medium text-ink border-b border-line md:border-b-0 md:border-r flex items-center">
              담당자 <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex-1 px-4 py-2 flex items-center">
              <input
                id="inquiry-manager"
                type="text"
                name="manager"
                value={form.manager}
                onChange={handleChange}
                className="w-full md:w-45 border border-line px-2 py-1 rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20"
              />
            </div>
          </div>

          {/* 전화번호 */}
          <div className="flex flex-col md:flex-row border-b border-line">
            <label htmlFor="inquiry-tel1" className="w-full md:w-35 shrink-0 bg-surface px-4 py-3 font-medium text-ink border-b border-line md:border-b-0 md:border-r flex items-center">
              전화번호 <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex-1 px-4 py-2 flex items-center gap-1">
              <input id="inquiry-tel1" type="text" inputMode="numeric" pattern="[0-9]*" name="tel1" maxLength={4} value={form.tel1} onChange={handleChange} className="w-15 border border-line px-2 py-1 text-center rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20" />
              <span className="text-muted">-</span>
              <input type="text" inputMode="numeric" pattern="[0-9]*" name="tel2" maxLength={4} value={form.tel2} onChange={handleChange} className="w-20 border border-line px-2 py-1 text-center rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20" />
              <span className="text-muted">-</span>
              <input type="text" inputMode="numeric" pattern="[0-9]*" name="tel3" maxLength={4} value={form.tel3} onChange={handleChange} className="w-15 border border-line px-2 py-1 text-center rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20" />
            </div>
          </div>

          {/* 이메일 */}
          <div className="flex flex-col md:flex-row border-b border-line">
            <label htmlFor="inquiry-email1" className="w-full md:w-35 shrink-0 bg-surface px-4 py-3 font-medium text-ink border-b border-line md:border-b-0 md:border-r flex items-center">
              이메일 <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex-1 px-4 py-2 flex items-center gap-1">
              <input id="inquiry-email1" type="text" name="email1" value={form.email1} onChange={handleChange} className="flex-1 md:flex-none md:w-35 border border-line px-2 py-1 rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20" />
              <span className="text-muted">@</span>
              <input type="text" name="email2" value={form.email2} onChange={handleChange} className="flex-1 md:flex-none md:w-40 border border-line px-2 py-1 rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20" />
            </div>
          </div>

          {/* 문의내용 */}
          <div className="flex flex-col md:flex-row">
            <label htmlFor="inquiry-message" className="w-full md:w-35 shrink-0 bg-surface px-4 py-3 font-medium text-ink border-b border-line md:border-b-0 md:border-r flex items-start pt-3">
              문의내용 <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex-1 px-4 py-2">
              <textarea
                id="inquiry-message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-line px-2 py-1 rounded outline-none focus:border-blue focus-visible:ring-2 focus-visible:ring-blue/20 resize-none"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="inline-flex items-center justify-center min-h-12 bg-blue text-white px-12 rounded text-sm font-bold transition-colors hover:bg-blue-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "접수 중..." : "문의하기"}
        </button>
      </div>
    </div>
  );
}
