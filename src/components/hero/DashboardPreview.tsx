import StatCard from "./StatCard";
import ActivityItem from "./ActivityItem";

export default function DashboardPreview() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
        <div>
          <h3 className="font-semibold text-white">داشبورد</h3>

          <p className="text-sm text-zinc-500">نمای کلی امروز</p>
        </div>

        <div className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          امروز
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 p-6">
        <StatCard title="لیدهای جدید" value="۱۲۴" />

        <StatCard title="نرخ تبدیل" value="۳۴٪" />
      </div>

      {/* Activities */}

      <div className="border-t border-zinc-800 px-6 py-5">
        <h4 className="mb-4 text-sm font-semibold text-zinc-400">
          آخرین فعالیت‌ها
        </h4>

        <ActivityItem
          color="bg-green-500"
          title="شرکت آلفا"
          status="تماس برقرار شد"
        />

        <ActivityItem
          color="bg-yellow-500"
          title="سارا محمدی"
          status="جلسه ثبت شد"
        />

        <ActivityItem color="bg-blue-500" title="شرکت بتا" status="لید جدید" />
      </div>
    </div>
  );
}
