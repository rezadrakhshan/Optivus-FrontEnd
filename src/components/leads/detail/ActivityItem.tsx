import { activityTypeMap } from "../../../constants/activity";
import type { Activity } from "../../../types/activity";

interface Props {
  activity: Activity;
}

export default function ActivityItem({ activity }: Props) {
  const config = activityTypeMap[activity.type];
  const Icon = config.icon;

  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-zinc-800
            bg-zinc-900
          "
        >
          <Icon size={18} className={config.color} />
        </div>

        <div className="mt-2 h-full w-px bg-zinc-800" />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-white">{config.title}</h3>

          <span className="text-xs text-zinc-500">
            {new Date(activity.createdAt).toLocaleString("fa-IR")}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {activity.description}
        </p>
      </div>
    </div>
  );
}
