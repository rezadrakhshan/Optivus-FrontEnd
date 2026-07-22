import type { LeadStatus, LeadTag, LeadType } from "../types/lead";

export const leadTypeMap: Record<
  LeadType,
  {
    label: string;
    color: string;
  }
> = {
  THIRDPARTY: {
    label: "شخص ثالث",
    color: "bg-blue-500/15 text-blue-400",
  },

  CARBODY: {
    label: "بدنه",
    color: "bg-violet-500/15 text-violet-400",
  },
};

export const leadStatusMap: Record<
  LeadStatus,
  {
    label: string;
    color: string;
  }
> = {
  WON: {
    label: "برنده",
    color: "bg-emerald-500/15 text-emerald-400",
  },

  LOST: {
    label: "از دست رفته",
    color: "bg-red-500/15 text-red-400",
  },
};

export const leadTagMap: Record<
  LeadTag,
  {
    label: string;
    color: string;
  }
> = {
  RENEWED: {
    label: "تمدید",
    color: "bg-purple-500/15 text-purple-400",
  },

  FOLLOWUP: {
    label: "پیگیری",
    color: "bg-yellow-500/15 text-yellow-400",
  },
};
