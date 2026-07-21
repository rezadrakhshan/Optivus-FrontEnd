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
    <div className="flex h-full flex-col justify-between p-4">
      <div className="space-y-2">
        {mainNavigation.map((item) => (
          <div key={item.href} onClick={onClose}>
            <SidebarItem {...item} />
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t border-zinc-800 pt-4">
        {secondaryNavigation.map((item) => (
          <div key={item.href} onClick={onClose}>
            <SidebarItem {...item} />
          </div>
        ))}

        <div onClick={onClose}>
          <SidebarItem {...logoutNavigation} />
        </div>
      </div>
    </div>
  );
}
