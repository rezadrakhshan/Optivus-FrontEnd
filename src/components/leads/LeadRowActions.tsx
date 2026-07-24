import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisVertical,
  Eye,
  Pencil,
  CalendarClock,
  Trash2,
} from "lucide-react";

interface Props {
  onView?: () => void;
  onEdit?: () => void;
  onFollowUp?: () => void;
  onDelete?: () => void;
}

export default function LeadRowActions({
  onView,
  onEdit,
  onFollowUp,
  onDelete,
}: Props) {
  return (
    <Menu as="div" className="relative inline-block text-right">
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

      <MenuItems
        anchor="bottom end"
        className="
          z-50
          mt-2
          w-56
          origin-top-right
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          p-2
          shadow-xl
          outline-none
        "
      >
        <MenuItem>
          {({ focus }) => (
            <button
              onClick={onView}
              className={`${
                focus ? "bg-zinc-800" : ""
              } flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white`}
            >
              <Eye size={16} />
              مشاهده
            </button>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <button
              onClick={onEdit}
              className={`${
                focus ? "bg-zinc-800" : ""
              } flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white`}
            >
              <Pencil size={16} />
              ویرایش
            </button>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <button
              onClick={onFollowUp}
              className={`${
                focus ? "bg-zinc-800" : ""
              } flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white`}
            >
              <CalendarClock size={16} />
              ثبت پیگیری
            </button>
          )}
        </MenuItem>

        <div className="my-2 border-t border-zinc-800" />

        <MenuItem>
          {({ focus }) => (
            <button
              onClick={onDelete}
              className={`${
                focus ? "bg-red-500/10" : ""
              } flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400`}
            >
              <Trash2 size={16} />
              حذف
            </button>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
