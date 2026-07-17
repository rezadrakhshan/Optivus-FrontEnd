interface ActivityItemProps {
  color: string;
  title: string;
  status: string;
}

export default function ActivityItem({
  color,
  title,
  status,
}: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-none">
      <div className="flex items-center gap-3">
        <div className={`h-2.5 w-2.5 rounded-full ${color}`} />

        <span className="text-zinc-200">{title}</span>
      </div>

      <span className="text-xs text-zinc-500">{status}</span>
    </div>
  );
}
