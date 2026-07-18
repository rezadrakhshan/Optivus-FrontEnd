import { Bell, CircleUserRound } from "lucide-react";

import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <HamburgerMenu />

        <div className="flex items-center gap-4">
          <button
            className="
                            rounded-xl
                            p-2
                            text-zinc-400
                            transition
                            hover:bg-zinc-800
                            hover:text-white
                        "
          >
            <Bell size={20} />
          </button>

          <button
            className="
                            rounded-full
                            bg-zinc-800
                            p-2
                            text-zinc-300
                            transition
                            hover:bg-zinc-700
                        "
          >
            <CircleUserRound size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
