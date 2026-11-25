"use client";

import { Fragment, useState } from "react";
import type { ProductSpecTable } from "@/data/products/product-specs";

const headerCellClass = "px-4 md:px-5 py-3 text-xs font-semibold text-white uppercase tracking-wide text-center whitespace-nowrap lg:whitespace-normal border-x border-white/20";
const bandCellClass = "px-4 md:px-5 py-2.5 text-xs font-bold text-navy uppercase tracking-widest text-center bg-surface border-x border-white/20";
const groupLabelClass = "px-4 md:px-5 py-3 text-sm font-bold text-navy text-center bg-surface border-x border-line align-middle";
const itemLabelClass = "px-4 md:px-5 py-3 text-sm text-ink text-center bg-surface border-x border-line align-middle";
const valueClass = "px-4 md:px-5 py-3 text-sm text-muted text-center bg-white border-x border-line";

function groupRuns(values: string[]) {
  const runs: { value: string; span: number }[] = [];
  for (const v of values) {
    const last = runs[runs.length - 1];
    if (last && last.value === v) last.span += 1;
    else runs.push({ value: v, span: 1 });
  }
  return runs;
}

function MobileSpecCard({ table, selected }: { table: ProductSpecTable; selected: number }) {
  if ("rows" in table) {
    return (
      <div className="rounded-md border border-line overflow-hidden divide-y divide-line">
        {table.rows.map((row, ri) => (
          <div key={ri} className="flex">
            <div className="w-28 shrink-0 bg-surface px-3 py-2.5 text-xs font-semibold text-navy">{row.label}</div>
            <div className="flex-1 px-3 py-2.5 text-xs text-ink">{row.values[selected]}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {table.groups.map((group, gi) => {
        const heading = [group.band, group.label].filter(Boolean).join(" · ");
        return (
          <div key={gi} className="rounded-md border border-line overflow-hidden">
            {heading && (
              <div className="bg-navy px-3 py-2 text-xs font-bold uppercase tracking-wide text-white">{heading}</div>
            )}
            <div className="divide-y divide-line">
              {group.rows.map((row, ri) => (
                <div key={ri} className="flex">
                  <div className="w-28 shrink-0 bg-surface px-3 py-2.5 text-xs font-semibold text-navy">{row.label}</div>
                  <div className="flex-1 px-3 py-2.5 text-xs text-ink">{row.values[selected]}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function SpecsTable({ table }: { table: ProductSpecTable }) {
  const { labelHeader, labelHeaders, columns } = table;
  const colCount = columns.length;
  const [selected, setSelected] = useState(0);

  const labelColWidth = 24 / 2;
  const dataColWidth = (100 - 24) / colCount;

  return (
    <>
      {/* 모바일: 모델 선택 후 해당 모델의 제원만 카드형으로 표시 */}
      <div className="lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {columns.map((col, i) => (
            <button
              key={col}
              type="button"
              onClick={() => setSelected(i)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                i === selected ? "border-navy bg-navy text-white" : "border-line bg-white text-ink"
              }`}
            >
              {col}
            </button>
          ))}
        </div>
        <MobileSpecCard table={table} selected={selected} />
      </div>

      {/* 데스크톱: 전체 제원표 */}
      <div className="hidden lg:block lg:max-w-250 lg:mx-auto rounded-md border border-line">
      <table className="w-full border-collapse lg:table-fixed">
        <colgroup>
          <col style={{ width: `${labelColWidth}%` }} />
          <col style={{ width: `${labelColWidth}%` }} />
          {columns.map((col) => (
            <col key={col} style={{ width: `${dataColWidth}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr className="bg-navy border-b border-white/20">
            {labelHeaders ? (
              <>
                <th className={headerCellClass}>{labelHeaders[0]}</th>
                <th className={headerCellClass}>{labelHeaders[1]}</th>
              </>
            ) : (
              <th className={headerCellClass} colSpan={2}>
                {labelHeader}
              </th>
            )}
            {columns.map((col) => (
              <th key={col} className={headerCellClass}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {"rows" in table
            ? table.rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-surface/60 transition-colors">
                  <td className={itemLabelClass} colSpan={2}>
                    {row.label}
                  </td>
                  {groupRuns(row.values).map((run, i) => (
                    <td key={i} className={valueClass} colSpan={run.span}>
                      {run.value}
                    </td>
                  ))}
                </tr>
              ))
            : table.groups.map((group, gi) => (
                <Fragment key={gi}>
                  {group.band && (
                    <tr className="border-y border-line">
                      <td className={bandCellClass} colSpan={2}>
                        {group.band}
                      </td>
                      <td className={bandCellClass} colSpan={colCount} />
                    </tr>
                  )}
                  {group.rows.map((row, ri) => {
                    return (
                      <tr key={`${gi}-${ri}`} className="hover:bg-surface/60 transition-colors">
                        {group.label && ri === 0 && (
                          <td className={groupLabelClass} rowSpan={group.rows.length}>
                            {group.label}
                          </td>
                        )}
                        <td className={itemLabelClass} colSpan={group.label ? 1 : 2}>
                          {row.label}
                        </td>
                        {groupRuns(row.values).map((run, i) => (
                          <td key={i} className={valueClass} colSpan={run.span}>
                            {run.value}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </Fragment>
              ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
