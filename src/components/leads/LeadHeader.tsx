import { Plus } from "lucide-react";

export default function LeadsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">لیدها</h1>

        <p className="mt-1 text-sm text-zinc-400">
          مدیریت و پیگیری تمام لیدهای ثبت‌شده
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
        <Plus size={18} />
        ایجاد لید جدید
      </button>
    </div>
  );
}
