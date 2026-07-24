import type { Activity } from "../types/activity";
import { ActivityType } from "../types/activity";

export const activities: Activity[] = [
  {
    _id: "1",
    leadID: "1",
    type: ActivityType.LEAD_CREATED,
    description: "لید جدید با موفقیت ایجاد شد.",
    metadata: {},
    createdBy: "1",
    createdAt: "2026-07-24T10:30:00Z",
    updatedAt: "2026-07-24T10:30:00Z",
  },

  {
    _id: "2",
    leadID: "1",
    type: ActivityType.STATUS_CHANGED,
    description: "وضعیت لید به «برنده» تغییر یافت.",
    metadata: {},
    createdBy: "1",
    createdAt: "2026-07-24T12:10:00Z",
    updatedAt: "2026-07-24T12:10:00Z",
  },

  {
    _id: "3",
    leadID: "1",
    type: ActivityType.FOLLOWUP_CREATED,
    description: "برای فردا ساعت ۱۰:۰۰ پیگیری ثبت شد.",
    metadata: {},
    createdBy: "1",
    createdAt: "2026-07-24T14:45:00Z",
    updatedAt: "2026-07-24T14:45:00Z",
  },
];
