import { Users, CircleCheck, CalendarClock, BadgePlus } from "lucide-react";

const stats = [
  {
    title: "کل لیدها",
    value: 182,
    icon: Users,
  },
  {
    title: "لیدهای امروز",
    value: 12,
    icon: BadgePlus,
  },
  {
    title: "برنده",
    value: 68,
    icon: CircleCheck,
  },
  {
    title: "نیازمند پیگیری",
    value: 15,
    icon: CalendarClock,
  },
];

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
                            rounded-2xl
                            border
                            border-zinc-800
                            bg-zinc-900
                            p-6
                        "
          >
            <Icon size={26} className="text-blue-400" />

            <h3 className="mt-5 text-sm text-zinc-400">{item.title}</h3>

            <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
          </div>
        );
      })}
    </section>
  );
}
