import { BadgePlus, CircleCheck, CalendarClock } from "lucide-react";

import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "لید جدید ایجاد شد",
    subtitle: "Tracking #1223456",
    time: "۲ دقیقه پیش",
    icon: <BadgePlus className="text-blue-400" />,
  },
  {
    title: "وضعیت به WON تغییر کرد",
    subtitle: "Tracking #1223452",
    time: "۱۵ دقیقه پیش",
    icon: <CircleCheck className="text-green-400" />,
  },
  {
    title: "پیگیری جدید ثبت شد",
    subtitle: "Tracking #1223449",
    time: "۱ ساعت پیش",
    icon: <CalendarClock className="text-yellow-400" />,
  },
];

export default function RecentActivities() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">فعالیت‌های اخیر</h2>

      <div className="divide-y divide-zinc-800">
        {activities.map((activity) => (
          <ActivityCard key={activity.subtitle} {...activity} />
        ))}
      </div>
    </section>
  );
}
