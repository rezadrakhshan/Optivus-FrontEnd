import { Hand } from "lucide-react";

export default function WelcomeCard() {
  return (
    <section
      className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
            "
    >
      <div className="flex items-center gap-3">
        <Hand className="text-yellow-400" />

        <h1 className="text-3xl font-bold text-white">سلام، سیدرضا</h1>
      </div>

      <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
        خوش اومدی به Optivus. امروز می‌تونی وضعیت لیدها، فعالیت‌های اخیر و
        عملکرد تیمت رو بررسی کنی.
      </p>
    </section>
  );
}
