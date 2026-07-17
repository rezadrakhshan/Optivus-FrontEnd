import { Boxes } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
        <Boxes color="white" size={28} />
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Optivus</h1>

        <p className="mt-2 text-sm text-zinc-400">
          مدیریت هوشمند ارتباط با مشتریان
        </p>
      </div>
    </div>
  );
}
