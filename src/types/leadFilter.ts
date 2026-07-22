import type { LeadStatus, LeadTag, LeadType } from "./lead";

export type DateFilterType = "TODAY" | "YESTERDAY" | "LAST_7_DAYS" | "CUSTOM";

export interface LeadFilters {
  search?: string;

  type?: LeadType;

  status?: LeadStatus;

  tag?: LeadTag;

  dateFilter?: DateFilterType;

  from?: string;

  to?: string;
}
