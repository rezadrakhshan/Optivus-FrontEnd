import { Search } from "lucide-react";
import { useState } from "react";

export default function LeadsFilters() {
  const [dateFilter, setDateFilter] = useState("");

  return (
    <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-72">
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="جستجو با کد رهگیری..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pr-10 pl-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <select className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white">
          <option>همه وضعیت‌ها</option>
          <option>برنده</option>
          <option>از دست رفته</option>
        </select>

        <select className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white">
          <option>همه نوع‌ها</option>
          <option>شخص ثالث</option>
          <option>بدنه</option>
        </select>

        <select className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white">
          <option>همه تگ‌ها</option>
          <option>تمدید</option>
          <option>پیگیری</option>
        </select>
        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="
            rounded-xl
            border
            border-zinc-700
            bg-zinc-950
            px-4
            py-3
            text-white
            outline-none
          "
        >
          <option value="">همه زمان‌ها</option>

          <option value="TODAY">امروز</option>

          <option value="YESTERDAY">دیروز</option>

          <option value="LAST_7_DAYS">۷ روز اخیر</option>

          <option value="CUSTOM">بازه سفارشی</option>
        </select>
      </div>

      {dateFilter === "CUSTOM" && (
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">از تاریخ</label>

            <input
              type="datetime-local"
              className="
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900
                px-3
                py-2
                text-white
              "
            />
          </div>

          <span className="mt-6 text-zinc-500">تا</span>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">تا تاریخ</label>

            <input
              type="datetime-local"
              className="
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900
                px-3
                py-2
                text-white
              "
            />
          </div>
        </div>
      )}
    </div>
  );
}
