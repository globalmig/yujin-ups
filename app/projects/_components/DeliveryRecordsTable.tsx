"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import { deliveryRecords, type DeliveryField } from "@/data/deliveries/delivery-records";

const fields: DeliveryField[] = ["교육", "산업·기업", "공공·연구", "의료"];
const PAGE_SIZE = 10;

export default function DeliveryRecordsTable() {
  const [active, setActive] = useState<DeliveryField | "전체">("전체");
  const [page, setPage] = useState(1);

  const filtered = active === "전체" ? deliveryRecords : deliveryRecords.filter((r) => r.field === active);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changeField = (field: DeliveryField | "전체") => {
    setActive(field);
    setPage(1);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          type="button"
          onClick={() => changeField("전체")}
          className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
            active === "전체" ? "bg-blue text-white" : "bg-white text-muted border border-line hover:border-blue hover:text-blue"
          }`}
        >
          전체 <span className="opacity-70">{deliveryRecords.length}</span>
        </button>
        {fields.map((field) => {
          const count = deliveryRecords.filter((r) => r.field === field).length;
          const isActive = active === field;
          return (
            <button
              key={field}
              type="button"
              onClick={() => changeField(field)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                isActive ? "bg-blue text-white" : "bg-white text-muted border border-line hover:border-blue hover:text-blue"
              }`}
            >
              {field} <span className="opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto rounded-md border border-line bg-white">
        <table className="w-full text-left border-collapse min-w-140">
          <thead>
            <tr className="bg-surface border-b border-line">
              <th className="px-4 md:px-5 py-3 text-xs font-semibold text-muted uppercase tracking-wide">납품처</th>
              <th className="px-4 md:px-5 py-3 text-xs font-semibold text-muted uppercase tracking-wide">품목</th>
              <th className="px-4 md:px-5 py-3 text-xs font-semibold text-muted uppercase tracking-wide">규격</th>
              <th className="px-4 md:px-5 py-3 text-xs font-semibold text-muted uppercase tracking-wide">수량</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r, i) => (
              <tr key={`${r.field}-${r.client}-${i}`} className="hover:bg-surface/60 transition-colors">
                <td className="px-4 md:px-5 py-3 text-sm font-semibold text-ink whitespace-nowrap">{r.client}</td>
                <td className="px-4 md:px-5 py-3 text-sm text-muted whitespace-nowrap">{r.item}</td>
                <td className="px-4 md:px-5 py-3 text-sm text-ink">{r.spec}</td>
                <td className="px-4 md:px-5 py-3 text-sm text-blue font-semibold whitespace-nowrap">{r.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
