import UserCard from "./UserCard";
import SidebarItem from "./SidebarItem";

import {
  logoutNavigation,
  mainNavigation,
  secondaryNavigation,
} from "../../navigation/navigation.config";

interface Props {
  onClose: () => void;
}

export default function SidebarContent({ onClose }: Props) {
  return (
    <div className="flex h-full flex-col">

      <div className="min-h-0 flex-1 overflow-y-auto p-4">

        <UserCard />

        <div className="mt-6 space-y-2">
          {mainNavigation.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              onClick={onClose}
            />
          ))}
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-4 space-y-2">
          {secondaryNavigation.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              onClick={onClose}
            />
          ))}
        </div>

      </div>


      <div className="border-t border-zinc-800 p-4">
        <SidebarItem
          {...logoutNavigation}
          onClick={onClose}
        />
      </div>

    </div>
  );
}