import type { Activity } from "../../../types/activity";

import ActivityItem from "./ActivityItem";

interface Props {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
      "
    >
      <h2 className="mb-6 text-lg font-semibold text-white">فعالیت‌ها</h2>

      {activities.length === 0 ? (
        <div className="py-10 text-center text-zinc-500">
          فعالیتی ثبت نشده است.
        </div>
      ) : (
        activities.map((activity) => (
          <ActivityItem key={activity._id} activity={activity} />
        ))
      )}
    </div>
  );
}
