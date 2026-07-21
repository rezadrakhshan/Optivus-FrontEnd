import { CircleUserRound } from "lucide-react";
import PlanBadge from "./PlanBadge";

export default function UserCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="flex items-center gap-3">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800">
          <CircleUserRound
            size={34}
            className="text-zinc-300"
          />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            سیدرضا درخشان
          </h3>

          <div className="mt-2">
            <PlanBadge plan="FREE" />
          </div>
        </div>

      </div>
    </div>
  );
}