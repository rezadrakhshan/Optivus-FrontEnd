import { type ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl",
        "border border-zinc-800",
        "bg-zinc-900/70",
        "backdrop-blur-xl",
        "shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}