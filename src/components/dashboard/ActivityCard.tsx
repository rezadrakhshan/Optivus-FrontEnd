import { Clock3 } from "lucide-react";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  time: string;
  icon: React.ReactNode;
}

export default function ActivityCard({
  title,
  subtitle,
  time,
  icon,
}: ActivityCardProps) {
  return (
    <div className="flex gap-4 py-4">
      <div className="mt-1">{icon}</div>

      <div className="flex-1">
        <h4 className="font-medium text-white">{title}</h4>

        <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>

        <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
          <Clock3 size={14} />

          {time}
        </div>
      </div>
    </div>
  );
}
