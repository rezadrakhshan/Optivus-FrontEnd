import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";

import SidebarContent from "./SidebarContent";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 duration-300 data-[closed]:opacity-0"
      />

      <div className="fixed inset-0">
        <DialogPanel
          transition
          className="
            absolute
            right-0
            top-0
            flex
            h-screen
            w-80
            flex-col
            overflow-hidden
            border-l
            border-zinc-800
            bg-zinc-950
            shadow-2xl
            transition-transform
            duration-300
            data-[closed]:translate-x-full
          "
        >
          <div className="flex items-center justify-between border-b border-zinc-800 p-5">

            <button
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <SidebarContent onClose={onClose} />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
