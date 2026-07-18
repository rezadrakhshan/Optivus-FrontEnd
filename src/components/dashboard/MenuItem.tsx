import { Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

interface MenuItemProps {
  to: string;
  icon: LucideIcon;
  title: string;
}

export default function MenuItem({ to, icon: Icon, title }: MenuItemProps) {
  return (
    <Link
      to={to}
      className="
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                text-zinc-300
                transition-colors
                hover:bg-zinc-800
                hover:text-white
            "
    >
      <Icon size={18} />
      <span>{title}</span>
    </Link>
  );
}
