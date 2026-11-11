"use client";

import { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import { deliveryInspections, type DeliveryInspection, type InspectionCategory } from "@/data/deliveries/delivery-inspections";
import { deliveryInspectionImages } from "@/data/deliveries/delivery-inspection-images";

const categories: InspectionCategory[] = [
  "건물·시설",
  "공공·연구·행정",
  "교육·대학·학교",
  "산업·기업",
  "의료·병원",
  "금융·은행·농협·수협·새마을금고",
];

const PAGE_SIZE = 12;

export default function DeliveryInspectionsList() {
  const [active, setActive] = useState<InspectionCategory | "전체">("전체");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<DeliveryInspection | null>(null);

  const filtered = active === "전체" ? deliveryInspections : deliveryInspections.filter((g) => g.category === active);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const groups = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changeCategory = (category: InspectionCategory | "전체") => {
    setActive(category);
    setPage(1);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          type="button"
          onClick={() => changeCategory("전체")}
          className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
            active === "전체" ? "bg-blue text-white" : "bg-surface text-muted border border-line hover:border-blue hover:text-blue"
          }`}
        >
          전체 <span className="opacity-70">{deliveryInspections.length}</span>
        </button>
        {categories.map((category) => {
          const count = deliveryInspections.filter((g) => g.category === category).length;
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                isActive ? "bg-blue text-white" : "bg-surface text-muted border border-line hover:border-blue hover:text-blue"
              }`}
            >
              {category} <span className="opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {groups.map((g) => {
          const sites = [...new Set(g.documents.map((d) => d.site).filter((site): site is string => Boolean(site) && site !== g.client))];

          return (
            <button
              key={`${g.category}-${g.client}`}
              type="button"
              onClick={() => setSelected(g)}
              className="text-left bg-white border border-line rounded-md p-5 hover:border-blue hover:shadow-md transition-all cursor-pointer"
            >
              <div className="mb-2">
                <h3 className="text-sm md:text-base font-bold text-navy">{g.client}</h3>
              </div>
              {sites.length > 0 && (
                <ul className="text-xs text-muted leading-relaxed space-y-0.5">
                  {sites.map((site) => (
                    <li key={site}>· {site}</li>
                  ))}
                </ul>
              )}
            </button>
          );
        })}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-line px-5 py-4 flex items-center justify-between">
              <h3 className="text-sm md:text-base font-bold text-navy">{selected.client}</h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="닫기"
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:bg-surface hover:text-navy transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-5 space-y-6">
              {selected.documents.map((d) => {
                const file = deliveryInspectionImages[d.certNo];
                return (
                  <div key={d.certNo}>
                    {selected.documents.length > 1 && (
                      <p className="text-xs text-muted mb-2">
                        {d.site ?? selected.client} ({d.part}/{d.totalParts})
                      </p>
                    )}
                    {file ? (
                      <Image
                        src={`/image/projects/${encodeURIComponent(file)}`}
                        alt={`${d.site ?? selected.client} 납품검수확인서`}
                        width={1654}
                        height={2338}
                        className="w-full h-auto"
                      />
                    ) : (
                      <p className="text-xs text-muted">이미지를 찾을 수 없습니다.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
