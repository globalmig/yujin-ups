"use client";

import { useState } from "react";
import Pagination from "@/components/Pagination";
import { deliveryInspections, type InspectionCategory } from "@/data/deliveries/delivery-inspections";

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
            <div key={`${g.category}-${g.client}`} className="bg-white border border-line rounded-md p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm md:text-base font-bold text-navy">{g.client}</h3>
                <span className="shrink-0 rounded-full bg-blue/10 text-blue text-[11px] font-semibold px-2.5 py-1 whitespace-nowrap">
                  총 {g.documents.length}장
                </span>
              </div>
              {sites.length > 0 && (
                <ul className="text-xs text-muted leading-relaxed space-y-0.5">
                  {sites.map((site) => (
                    <li key={site}>· {site}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
