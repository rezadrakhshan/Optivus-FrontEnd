export const LeadType = {
  THIRDPARTY: "THIRDPARTY",
  CARBODY: "CARBODY",
} as const;

export type LeadType = (typeof LeadType)[keyof typeof LeadType];

export const LeadStatus = {
  WON: "WON",
  LOST: "LOST",
} as const;
export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];

export const LeadTag = {
  RENEWED: "RENEWED",
  FOLLOWUP: "FOLLOWUP",
} as const;

export type LeadTag = (typeof LeadTag)[keyof typeof LeadTag];

export interface Lead {
  id: string;
  trackingCode: number;
  category: string;
  type: LeadType;
  status: LeadStatus;
  tag: LeadTag;
  nextFollowUp?: string;
}
