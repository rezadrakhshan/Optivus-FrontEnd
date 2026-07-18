import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import {
  Menu as MenuIcon,
  User,
  Newspaper,
  Phone,
  Gem,
  LogOut,
} from "lucide-react";

import MenuItem from "./MenuItem";

export default function HamburgerMenu() {
  return (
    <div className="relative">
      <Menu>
        <MenuButton
          className="
                    rounded-xl
                    p-2
                    text-zinc-300
                    transition
                    hover:bg-zinc-800
                    hover:text-white
                "
        >
          <MenuIcon size={24} />
        </MenuButton>

        <MenuItems
          anchor="bottom start"
          className="
                    mt-2
                    w-60
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-2
                    shadow-2xl
                    focus:outline-none
                "
        >
          <MenuItem to="/profile" icon={User} title="پروفایل" />

          <MenuItem to="/plan" icon={Gem} title="پلن من" />

          <MenuItem to="/blogs" icon={Newspaper} title="بلاگ" />

          <MenuItem to="/contact" icon={Phone} title="تماس با ما" />

          <div className="my-2 border-t border-zinc-800" />

          <MenuItem to="/logout" icon={LogOut} title="خروج" />
        </MenuItems>
      </Menu>
    </div>
  );
}
