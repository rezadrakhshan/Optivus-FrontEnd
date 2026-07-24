import type { LucideIcon } from "lucide-react";

import {
  Plus,
  Pencil,
  Trash2,
  RefreshCcw,
  FolderSync,
  CalendarPlus,
  CalendarCheck,
} from "lucide-react";

import { ActivityType } from "../types/activity";

export const activityTypeMap: Record<
  ActivityType,
  {
    title: string;
    icon: LucideIcon;
    color: string;
  }
> = {
  [ActivityType.LEAD_CREATED]: {
    title: "ایجاد لید",
    icon: Plus,
    color: "text-emerald-400",
  },

  [ActivityType.LEAD_UPDATED]: {
    title: "ویرایش لید",
    icon: Pencil,
    color: "text-blue-400",
  },

  [ActivityType.LEAD_DELETED]: {
    title: "حذف لید",
    icon: Trash2,
    color: "text-red-400",
  },

  [ActivityType.STATUS_CHANGED]: {
    title: "تغییر وضعیت",
    icon: RefreshCcw,
    color: "text-yellow-400",
  },

  [ActivityType.CATEGORY_CHANGED]: {
    title: "تغییر دسته‌بندی",
    icon: FolderSync,
    color: "text-violet-400",
  },

  [ActivityType.FOLLOWUP_CREATED]: {
    title: "ایجاد پیگیری",
    icon: CalendarPlus,
    color: "text-cyan-400",
  },

  [ActivityType.FOLLOWUP_COMPLETED]: {
    title: "اتمام پیگیری",
    icon: CalendarCheck,
    color: "text-emerald-400",
  },
};
