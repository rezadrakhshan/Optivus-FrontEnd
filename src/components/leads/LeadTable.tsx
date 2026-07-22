import { EllipsisVertical } from "lucide-react";

import LeadBadge from "./LeadBadge";

import { leads } from "../../mock/leads";

import { leadStatusMap, leadTagMap, leadTypeMap } from "../../constants/lead";

export default function LeadsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <table className="w-full">
        <thead className="bg-zinc-950">
          <tr className="text-sm text-zinc-400">
            <th className="px-6 py-4 text-right">کد رهگیری</th>
            <th className="px-6 py-4 text-right">دسته‌بندی</th>
            <th className="px-6 py-4 text-right">نوع</th>
            <th className="px-6 py-4 text-right">وضعیت</th>
            <th className="px-6 py-4 text-right">تگ</th>
            <th className="px-6 py-4 text-right">پیگیری بعدی</th>
            <th className="w-16"></th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => {
            const type = leadTypeMap[lead.type];
            const status = leadStatusMap[lead.status];
            const tag = leadTagMap[lead.tag];

            return (
              <tr
                key={lead.id}
                className="border-t border-zinc-800 transition hover:bg-zinc-800/40"
              >
                <td className="px-6 py-5 font-medium text-white">
                  #{lead.trackingCode}
                </td>

                <td className="px-6 py-5 text-zinc-300">{lead.category}</td>

                <td className="px-6 py-5">
                  <LeadBadge color={type.color}>{type.label}</LeadBadge>
                </td>

                <td className="px-6 py-5">
                  <LeadBadge color={status.color}>{status.label}</LeadBadge>
                </td>

                <td className="px-6 py-5">
                  <LeadBadge color={tag.color}>{tag.label}</LeadBadge>
                </td>

                <td className="px-6 py-5 text-zinc-300">
                  {lead.nextFollowUp ?? "-"}
                </td>

                <td className="px-6 py-5">
                  <button className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-700 hover:text-white">
                    <EllipsisVertical size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
