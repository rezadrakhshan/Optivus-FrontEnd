export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
        O
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Optivus
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          CRM for Modern Teams
        </p>
      </div>
    </div>
  );
}