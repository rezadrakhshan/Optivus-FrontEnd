interface Props {
  notes?: string;
}

export default function NotesCard({ notes }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-lg font-semibold text-white">
        یادداشت‌ها
      </h2>

      <div className="min-h-40 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
        {notes ? (
          <p className="leading-8 text-zinc-300">
            {notes}
          </p>
        ) : (
          <p className="text-zinc-500">
            هنوز یادداشتی ثبت نشده است.
          </p>
        )}
      </div>
    </div>
  );
}