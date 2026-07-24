import LeadBadge from "../LeadBadge";

import {
  leadStatusMap,
  leadTagMap,
  leadTypeMap,
} from "../../../constants/lead";

import type { Lead } from "../../../types/lead";

interface Props {
  lead: Lead;
}

export default function LeadInfoCard({ lead }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">اطلاعات لید</h2>

      <div className="space-y-5">
        <Row title="کد رهگیری">#{lead.trackingCode}</Row>

        <Row title="دسته‌بندی">{lead.category}</Row>

        <Row title="نوع">
          <LeadBadge color={leadTypeMap[lead.type].color}>
            {leadTypeMap[lead.type].label}
          </LeadBadge>
        </Row>

        <Row title="وضعیت">
          <LeadBadge color={leadStatusMap[lead.status].color}>
            {leadStatusMap[lead.status].label}
          </LeadBadge>
        </Row>

        <Row title="تگ">
          <LeadBadge color={leadTagMap[lead.tag].color}>
            {leadTagMap[lead.tag].label}
          </LeadBadge>
        </Row>

        <Row title="پیگیری بعدی">{lead.nextFollowUp ?? "-"}</Row>
      </div>
    </div>
  );
}

interface RowProps {
  title: string;
  children: React.ReactNode;
}

function Row({ title, children }: RowProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 pb-3 last:border-none">
      <span className="text-sm text-zinc-400">{title}</span>

      <div className="text-sm font-medium text-white">{children}</div>
    </div>
  );
}
