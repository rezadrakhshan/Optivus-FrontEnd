import {
  LayoutDashboard,
  Users,
  FolderTree,
  User,
  Gem,
  Newspaper,
  Phone,
  LogOut,
} from "lucide-react";

export const mainNavigation = [
  {
    title: "داشبورد",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "لیدها",
    href: "/leads",
    icon: Users,
  },
  {
    title: "دسته‌بندی‌ها",
    href: "/categories",
    icon: FolderTree,
  },
];

export const secondaryNavigation = [
  {
    title: "پروفایل",
    href: "/profile",
    icon: User,
  },
  {
    title: "پلن من",
    href: "/plan",
    icon: Gem,
  },
  {
    title: "بلاگ",
    href: "/blogs",
    icon: Newspaper,
  },
  {
    title: "تماس با ما",
    href: "/contact",
    icon: Phone,
  },
];

export const logoutNavigation = {
  title: "خروج",
  href: "/logout",
  icon: LogOut,
};
