interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-500">{title}</p>

      <h3 className="mt-2 text-2xl font-bold text-white">{value}</h3>
    </div>
  );
}
