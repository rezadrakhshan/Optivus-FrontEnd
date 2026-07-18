import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { hour: "08", leads: 1 },
  { hour: "09", leads: 4 },
  { hour: "10", leads: 8 },
  { hour: "11", leads: 6 },
  { hour: "12", leads: 9 },
  { hour: "13", leads: 3 },
  { hour: "14", leads: 5 },
  { hour: "15", leads: 7 },
];

export default function LeadsChart() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        میانگین ثبت لید در ساعات روز
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid stroke="#27272a" />

            <XAxis dataKey="hour" />

            <YAxis />

            <Tooltip />

            <Area dataKey="leads" stroke="#3b82f6" fill="#3b82f655" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
