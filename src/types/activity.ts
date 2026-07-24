export enum ActivityType {
  LEAD_CREATED = 0,
  LEAD_UPDATED = 1,
  LEAD_DELETED = 2,
  STATUS_CHANGED = 3,
  CATEGORY_CHANGED = 4,
  FOLLOWUP_CREATED = 5,
  FOLLOWUP_COMPLETED = 6,
}

export interface Activity {
  _id: string;

  leadID: string;

  type: ActivityType;

  description: string;

  metadata?: Record<string, unknown>;

  createdBy: string;

  createdAt: string;

  updatedAt: string;
}