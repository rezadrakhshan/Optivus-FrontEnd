import { Menu, CircleUserRound } from "lucide-react";

interface Props {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-800"
          >
            <Menu size={22} />
          </button>

          <h1 className="text-lg font-semibold text-white">Optivus</h1>
        </div>
      </div>
    </header>
  );
}
