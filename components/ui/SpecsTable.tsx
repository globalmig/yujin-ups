import { Fragment } from "react";
import type { ProductSpecTable } from "@/data/products/product-specs";

const headerCellClass = "px-4 md:px-5 py-3 text-xs font-semibold text-white uppercase tracking-wide text-center whitespace-nowrap border-x border-white/20";
const bandCellClass = "px-4 md:px-5 py-2.5 text-xs font-bold text-white uppercase tracking-widest text-center bg-blue border-x border-white/20";
const groupLabelClass = "px-4 md:px-5 py-3 text-sm font-bold text-navy text-center bg-surface border-x border-line align-middle";
const itemLabelClass = "px-4 md:px-5 py-3 text-sm text-ink text-center bg-white border-x border-line align-middle";
const valueClass = "px-4 md:px-5 py-3 text-sm text-muted text-center bg-white border-x border-line";

function isSameAcrossColumns(values: string[]) {
  return values.every((v) => v === values[0]);
}

export default function SpecsTable({ table }: { table: ProductSpecTable }) {
  const { labelHeader, columns } = table;
  const colCount = columns.length;

  return (
    <div className="overflow-x-auto rounded-md border border-line">
      <table className="w-full border-collapse min-w-160">
        <thead>
          <tr className="bg-navy border-b border-white/20">
            <th className={headerCellClass} colSpan={2}>
              {labelHeader}
            </th>
            {columns.map((col) => (
              <th key={col} className={headerCellClass}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {"rows" in table
            ? table.rows.map((row) => (
                <tr key={row.label} className="hover:bg-surface/60 transition-colors">
                  <td className={itemLabelClass} colSpan={2}>
                    {row.label}
                  </td>
                  {row.values.map((value, i) => (
                    <td key={i} className={valueClass}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))
            : table.groups.map((group, gi) => (
                <Fragment key={gi}>
                  {group.band && (
                    <tr className="border-y border-line">
                      <td className={bandCellClass} colSpan={2 + colCount}>
                        {group.band}
                      </td>
                    </tr>
                  )}
                  {group.rows.map((row, ri) => {
                    const merged = isSameAcrossColumns(row.values);
                    return (
                      <tr key={row.label} className="hover:bg-surface/60 transition-colors">
                        {group.label && ri === 0 && (
                          <td className={groupLabelClass} rowSpan={group.rows.length}>
                            {group.label}
                          </td>
                        )}
                        <td className={itemLabelClass} colSpan={group.label ? 1 : 2}>
                          {row.label}
                        </td>
                        {merged ? (
                          <td className={valueClass} colSpan={colCount}>
                            {row.values[0]}
                          </td>
                        ) : (
                          row.values.map((value, i) => (
                            <td key={i} className={valueClass}>
                              {value}
                            </td>
                          ))
                        )}
                      </tr>
                    );
                  })}
                </Fragment>
              ))}
        </tbody>
      </table>
    </div>
  );
}
