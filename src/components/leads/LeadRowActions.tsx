import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  EllipsisVertical,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

interface Props {
  leadId: string;
}

export default function RowActions({ leadId }: Props) {
  return (
    <Menu as="div" className="relative">
      <MenuButton
        className="
          rounded-lg
          p-2
          text-zinc-400
          transition
          hover:bg-zinc-800
          hover:text-white
        "
      >
        <EllipsisVertical size={18} />
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition duration-150"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-100"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <MenuItems
          anchor="bottom end"
          className="
            z-50
            mt-2
            w-52
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            p-2
            shadow-xl
            focus:outline-none
          "
        >
          <MenuItem>
            {({ focus }) => (
              <Link
                to={`/leads/${leadId}`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white ${
                  focus ? "bg-zinc-800" : ""
                }`}
              >
                <Eye size={16} />
                مشاهده
              </Link>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <Link
                to={`/leads/${leadId}/edit`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white ${
                  focus ? "bg-zinc-800" : ""
                }`}
              >
                <Pencil size={16} />
                ویرایش
              </Link>
            )}
          </MenuItem>

          <div className="my-2 border-t border-zinc-800" />

          <MenuItem>
            {({ focus }) => (
              <button
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 ${
                  focus ? "bg-red-500/10" : ""
                }`}
              >
                <Trash2 size={16} />
                حذف
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}