"use client";

import { useState } from "react";

const INITIAL_FORM = {
  company: "",
  name: "",
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
  const [agreed, setAgreed] = useState(false);
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
    if (!form.name.trim()) missing.push("이름");
    if (!form.tel1.trim() || !form.tel2.trim() || !form.tel3.trim()) missing.push("전화번호");
    if (!form.message.trim()) missing.push("문의내용");
    if (!agreed) missing.push("개인정보처리방침 동의");

    if (missing.length > 0) {
      alert(`다음 필수 항목을 입력해 주세요:\n${missing.map((m) => `• ${m}`).join("\n")}`);
      return;
    }

    const hasEmail = form.email1.trim() || form.email2.trim();
    if (hasEmail && !EMAIL_REGEX.test(`${form.email1}@${form.email2}`)) {
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
      setAgreed(false);
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
              상호
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

          {/* 이름 */}
          <div className="flex flex-col md:flex-row border-b border-line">
            <label htmlFor="inquiry-name" className="w-full md:w-35 shrink-0 bg-surface px-4 py-3 font-medium text-ink border-b border-line md:border-b-0 md:border-r flex items-center">
              이름 <span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex-1 px-4 py-2 flex items-center">
              <input
                id="inquiry-name"
                type="text"
                name="name"
                value={form.name}
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
              이메일
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

      {/* 개인정보처리방침 */}
      <div className="mt-6 w-full">
        <div className="border border-line rounded-md overflow-hidden">
          <div className="bg-surface px-4 py-3 border-b border-line font-medium text-ink text-sm">
            개인정보처리방침 <span className="text-red-500">*</span>
          </div>
          <div className="h-55 overflow-y-auto px-4 py-4 text-sm text-ink leading-relaxed space-y-4">
            <div>
              <p>
                1. 회원의 개인정보 수집목적 및 이용 당사는 고객님께서 당사에서 물품 및 서비스 상품에 대한 주문 및 접수, 대금 결제를 이용하고 주문 상품 배송 및 회원에게 제공되는 각종 편의
                서비스를 이용하기 위해 필요한 최소한의 정보를 필수로 수집하고 있습니다. 당사 회원으로 등록하신 모든 고객의 개인정보는 위에서 밝힌 목적이외에는 절대로 사용될 수 없으나, 회원
                개인정보의 사용 목적과 용도가 변경될 경우에 반드시 당사 회원으로 등록하신 모든 고객님께 동의를 구할 것입니다. <br /> <br />
                2. 개인정보 수집 항목 및 보유, 이용 기간 당사 회원을 대상으로 각종 서비스를 제공하기 위해 제공 받는 필수 회원정보는 다음과 같습니다. ① 성명 ② 주민등록번호(회원의 경우) ③ 주소 ④
                전화번호(일반전화와 핸드폰) ⑤ 희망ID(회원의 경우) ⑥ 비밀번호(회원의 경우) 이외에 회원가입시 고객님이 원하실 경우에 추가 정보를 선택하여 제공하실 수 있도록 되어 있으며 일부 물품
                및 서비스 상품에 대한 주문 및 접수시에 고객님이 원하시는 정확한 주문 내용을 파악하여 원활한 주문 및 결제와 배송을 위하여 추가 정보를 요구하고 있습니다. 회원이 탈퇴하시거나 코센의
                이용약관에 의한 회원 자격 상실의 경우에 당사가 보유한 해당 고객의 개인 정보는 지체 없이 파기됩니다. <br /> <br />
                3. 아동의 개인 정보 보호 당사는 &quot;정보통신망이용 촉진 및 정보보호등에 관한 법률 제31조 제1항&quot;에 의하여 만14세미만의 아동의 개인정보 수집시 법정대리인의 동의를 받아야
                합니다. 따라서, 당사는 만14세미만의 아동에 대해서는 개인정보를 받지 않을 뿐만 아니라, 회원으로 가입이 되지 않습니다. 단, 14세 미만의 아동은 법정대리인의 동의 및 서면 인증후에,
                회원으로 가입할 수 있습니다. 또한, 만 14세 미만 아동의 법정 대리인은 아동의 개인정보의 열람, 정정, 동의 철회를 요청할수 있으며 이런 요청이 있을 경우 당사는 지체없이 필요한 조치를
                취합니다. <br /> <br />
                4. 개인정보 제공 및 공유 당사 회원의 고객 개인정보는 원칙적으로 제3기관 및 제3자에게 제공 될 수 없으며 당사가 회원님께 편의를 제공하기 위하여 특정 회사에 개인정보를 제공하고자 할
                경우에는 반드시 회원님께 해당되는 합당한 절차를 통하여 동의를 구하도록 되어 있습니다. 단, 다음 경우에 한하여 고객의 동의 없이 개인정보를 제공할 수 있습니다. ① 업무상 배송업체에
                배송에 필요한 최소한의 이용자정보(성명, 주소, 전화번호)를 알려주는 경우 ② 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는
                경우 ③ 정부 기관의 공식적 요청이 있을 경우.
                <br /> <br /> 5. 개인정보 열람, 정정 및 삭제 처리 회원님이 원하실 경우 언제라도 당사에서 개인정보를 열람하실 수 있으며 보관된 필수 정보를 수정하실 수 있습니다. 또한 회원가입시
                요구된 필수 정보 외의 추가 정보는 언제나 열람, 수정, 삭제할 수 있습니다. 회원님의 개인정보 변경 및 삭제와 회원탈퇴는 당사의 고객센터에서 로그인(Login) 후 이용하실 수 있습니다.{" "}
                <br /> <br />
                6. 쿠키(Cookie) 운영 당사는 회원인증을 위하여 Cookie 방식을 이용하고 있습니다. 이는 로그아웃(Logout)시 자동으로 컴퓨터에 저장되지 않고 삭제되도록 되어 있으므로 공공장소나 타인이
                사용할 수 있는 컴퓨터를 사용하 실 경우에는 로그인(Login)후 서비스 이용이 끝나시면 반드시 로그아웃(Logout)해 주시기 바랍니다.
                <br /> <br /> 7. 비회원고객의 개인정보관리 ① 당사는 비회원 고객 또한 물품 및 서비스 상품의 구매를 하실 수 있습니다. 당사는 비회원 주문의 경우 배송 및 대금 결제, 상품 배송에
                반드시 필요한 개인정보만을 고객님께 요청하고 있습니다. ② 당사에서 비회원으로 구입을 하신 경우 비회원 고객께서 입력하신 지불인 정보 및 수령인 정보는 대금 결제 및 상품 배송에
                관련한 용도 외에는 다른 어떠한 용도로도 사용되지 않습니다.
                <br /> <br /> 8. 네트워크 보안 당사는 서버 및 네트워크 관련 첨단 보안시스템을 갖추고 있습니다. 당사는 자체 방화벽 및 침입탐지 시스템, 침입방지 시스템을 갖추고 고객님의 개인정보
                보호를 위해 최선의 방법을 취하고 있습니다. 또한, 전문 보안 솔루션 업체인 시큐아이닷컴(SecuI.com)을 통해 정기적, 부정기적으로 보안점검 및 컨설팅을 받고 있으며 자체 네트워크
                보안규정에 따라 철저한 시스템 점검을 시행하고 있습니다. 전자 결제에 대해서는 SSL(Secure Socket Layer)방식의 보안 시스템을 탑재하고 있으며 미국 베리사인社(Verisign Inc.)를 통하여
                인증받아 사용하고 있습니다. 9. 내부 보안 대책 당사는 고객의 개인정보를 취급할 수 있는 인력을 최소한으로 한정하고 해당 인원에게 정기적, 부정기적 보안교육을 실시하고 있습니다. 또한
                고객님의 개인정보를 열람할 수 있는 시스템에는 2차 암호 체제를 갖추고 외부 네트워크로부터 철저하게 격리시켜 외부 침입 및 내부 침입에 대응하고 있습니다. 이상의 당사의 개인정보
                보호정책은 사이트 오픈과 동시에 시행합니다. 당사는 개인정보 보호 관리책임자를 아래와 같이 지정합니다. - 부서: 시스템사업부 - 성명: 김 진 영 - E-mail: ups8057@hanmail.net
              </p>
            </div>
          </div>
        </div>
        <label className="mt-3 flex items-center gap-2 cursor-pointer text-sm text-ink select-none">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 accent-blue cursor-pointer" />
          개인정보처리방침에 동의합니다.
        </label>
      </div>

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
