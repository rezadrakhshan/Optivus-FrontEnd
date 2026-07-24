import { LeadType, LeadStatus, LeadTag } from "../types/lead";

export interface Lead {
  id: string;
  trackingCode: number;
  category: string;
  type: LeadType;
  status: LeadStatus;
  tag: LeadTag;
  nextFollowUp?: string;
}

export const leads: Lead[] = [
  {
    id: "1",
    trackingCode: 1223456,
    category: "بیمه بدنه",
    type: "CARBODY",
    status: "WON",
    tag: "RENEWED",
  },
  {
    id: "2",
    trackingCode: 2121212,
    category: "شخص ثالث",
    type: "THIRDPARTY",
    status: "LOST",
    tag: "FOLLOWUP",
  },
];
