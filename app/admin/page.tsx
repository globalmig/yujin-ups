"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { ContactSubmission } from "@/lib/contacts";
import type { InquirySubmission } from "@/lib/inquiries";
import type { QuickInquirySubmission } from "@/lib/quick-inquiries";

const PRODUCT_LABELS: Record<string, string> = {
  ups: "UPS",
  avr: "AVR",
  fc: "FC",
  rectifier: "정류기",
  battery: "배터리",
};

const PAGE_SIZE = 12;

type InquiryKind = "quote" | "general" | "quick";

const TYPE_LABELS: Record<InquiryKind, string> = {
  quote: "견적문의",
  general: "일반문의",
  quick: "간편문의",
};

const TYPE_BADGE_STYLES: Record<InquiryKind, string> = {
  quote: "bg-[#e8eef8] text-[#1a4fa0]",
  general: "bg-emerald-50 text-emerald-700",
  quick: "bg-amber-50 text-amber-700",
};

const FILTERS: { value: "all" | InquiryKind; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "general", label: "고객지원 (일반문의)" },
  { value: "quick", label: "간편문의" },
  { value: "quote", label: "견적문의" },
];

type AnyInquiry =
  | { kind: "quote"; id: string; created_at: string; data: ContactSubmission }
  | { kind: "general"; id: string; created_at: string; data: InquirySubmission }
  | { kind: "quick"; id: string; created_at: string; data: QuickInquirySubmission };

interface StoredSession {
  token: string;
  expiresAt: number;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [items, setItems] = useState<AnyInquiry[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<"all" | InquiryKind>("all");

  const fetchAll = useCallback(async (sessionToken: string) => {
    setLoading(true);
    setError("");
    const headers = { Authorization: `Bearer ${sessionToken}` };
    const [contactsRes, inquiriesRes, quickRes] = await Promise.all([
      fetch("/api/admin/contacts", { headers }),
      fetch("/api/admin/inquiries", { headers }),
      fetch("/api/admin/quick-inquiries", { headers }),
    ]);
    setLoading(false);

    if ([contactsRes, inquiriesRes, quickRes].some((r) => r.status === 401)) {
      setError("로그인이 필요합니다.");
      sessionStorage.removeItem("admin_session");
      setToken(null);
      return;
    }

    const [contacts, inquiries, quick]: [ContactSubmission[], InquirySubmission[], QuickInquirySubmission[]] =
      await Promise.all([contactsRes.json(), inquiriesRes.json(), quickRes.json()]);

    const merged: AnyInquiry[] = [
      ...contacts.map((data) => ({ kind: "quote" as const, id: data.id, created_at: data.created_at, data })),
      ...inquiries.map((data) => ({ kind: "general" as const, id: data.id, created_at: data.created_at, data })),
      ...quick.map((data) => ({ kind: "quick" as const, id: data.id, created_at: data.created_at, data })),
    ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    setItems(merged);
    setToken(sessionToken);
    setPage(1);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_session");
    if (!saved) return;
    try {
      const session: StoredSession = JSON.parse(saved);
      if (session.expiresAt > Date.now()) {
        fetchAll(session.token);
      } else {
        sessionStorage.removeItem("admin_session");
      }
    } catch {
      sessionStorage.removeItem("admin_session");
    }
  }, [fetchAll]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      setError(res.status === 429 ? "잠시 후 다시 시도해 주세요." : "비밀번호가 올바르지 않습니다.");
      return;
    }
    const session: StoredSession = await res.json();
    sessionStorage.setItem("admin_session", JSON.stringify(session));
    setPassword("");
    fetchAll(session.token);
  };

  const DELETE_ENDPOINTS: Record<InquiryKind, string> = {
    quote: "/api/admin/contacts",
    general: "/api/admin/inquiries",
    quick: "/api/admin/quick-inquiries",
  };

  const handleDelete = async (item: AnyInquiry) => {
    if (!token) return;
    if (!confirm("이 문의를 삭제하시겠습니까?")) return;
    const res = await fetch(`${DELETE_ENDPOINTS[item.kind]}/${item.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      if (expanded === item.id) setExpanded(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_session");
    setToken(null);
    setItems([]);
    setPassword("");
  };

  const filteredItems = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.kind === filter)),
    [items, filter]
  );

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedItems = filteredItems.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleFilterChange = (value: "all" | InquiryKind) => {
    setFilter(value);
    setPage(1);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow w-full max-w-sm">
          <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded outline-none focus:border-[#1a4fa0]"
            />
            {error && <p className="text-red-700 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#1a4fa0] text-white py-2 rounded hover:bg-[#0d3070] transition-colors"
            >
              {loading ? "확인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">문의 관리</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">총 {filteredItems.length}건</span>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              로그아웃
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                filter === f.value
                  ? "bg-[#1a4fa0] text-white border-[#1a4fa0]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-white rounded shadow p-10 text-center text-gray-600">
            접수된 문의가 없습니다.
          </div>
        ) : (
          <div className="space-y-3">
            {pagedItems.map((item) => (
              <div key={item.id} className="bg-white rounded shadow overflow-hidden">
                <div
                  className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded shrink-0 ${TYPE_BADGE_STYLES[item.kind]}`}>
                      {TYPE_LABELS[item.kind]}
                    </span>
                    {item.kind === "quote" && (
                      <>
                        <span className="font-semibold text-gray-800">{item.data.company}</span>
                        <span className="text-sm text-gray-600">{item.data.manager} ({item.data.position})</span>
                        <span className="text-sm bg-[#e8eef8] text-[#1a4fa0] px-2 py-0.5 rounded">
                          {PRODUCT_LABELS[item.data.product] ?? item.data.product}
                        </span>
                      </>
                    )}
                    {item.kind === "general" && (
                      <>
                        <span className="font-semibold text-gray-800">{item.data.company}</span>
                        <span className="text-sm text-gray-600">{item.data.manager}</span>
                      </>
                    )}
                    {item.kind === "quick" && (
                      <>
                        <span className="font-semibold text-gray-800">{item.data.name}</span>
                        <span className="text-sm text-gray-600">{item.data.tel}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs text-gray-600">{formatDate(item.created_at)}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(item); }}
                      className="text-xs text-red-700 hover:text-red-800 px-2 py-1 border border-red-300 rounded hover:bg-red-50"
                    >
                      삭제
                    </button>
                    <span className="text-gray-600 text-xs">{expanded === item.id ? "▲" : "▼"}</span>
                  </div>
                </div>

                {expanded === item.id && (
                  <div className="border-t border-gray-200 px-5 py-4 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {item.kind === "quote" && (
                      <>
                        <Row label="상호" value={item.data.company} />
                        <Row label="직책/담당자" value={`${item.data.position} / ${item.data.manager}`} />
                        <Row label="전화번호" value={item.data.tel} />
                        {item.data.mobile && <Row label="휴대폰" value={item.data.mobile} />}
                        {item.data.fax && <Row label="팩스" value={item.data.fax} />}
                        <Row label="이메일" value={item.data.email} />
                        <Row label="제품선택" value={PRODUCT_LABELS[item.data.product] ?? item.data.product} />
                        {item.data.input_voltage && <Row label="입력전압" value={item.data.input_voltage} />}
                        {item.data.output_voltage && <Row label="출력전압" value={item.data.output_voltage} />}
                        {item.data.input_hz && <Row label="입력주파수" value={item.data.input_hz} />}
                        {item.data.output_hz && <Row label="출력주파수" value={item.data.output_hz} />}
                        {item.data.capacity && <Row label="전격용량" value={item.data.capacity} />}
                        {item.data.backup && <Row label="백업시간" value={item.data.backup} />}
                        {item.data.message && (
                          <div className="md:col-span-2">
                            <span className="font-medium text-gray-600 mr-2">기타내용</span>
                            <span className="whitespace-pre-wrap">{item.data.message}</span>
                          </div>
                        )}
                      </>
                    )}
                    {item.kind === "general" && (
                      <>
                        <Row label="상호" value={item.data.company} />
                        <Row label="담당자" value={item.data.manager} />
                        <Row label="전화번호" value={item.data.tel} />
                        <Row label="이메일" value={item.data.email} />
                        <div className="md:col-span-2">
                          <span className="font-medium text-gray-600 mr-2">문의내용</span>
                          <span className="whitespace-pre-wrap">{item.data.message}</span>
                        </div>
                      </>
                    )}
                    {item.kind === "quick" && (
                      <>
                        <Row label="상호명/담당자" value={item.data.name} />
                        <Row label="연락처" value={item.data.tel} />
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {filteredItems.length > 0 && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="text-sm px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`text-sm w-8 h-8 rounded border ${
                  p === currentPage
                    ? "bg-[#1a4fa0] text-white border-[#1a4fa0]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="text-sm px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              다음
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-medium text-gray-600 mr-2">{label}</span>
      <span>{value}</span>
    </div>
  );
}
