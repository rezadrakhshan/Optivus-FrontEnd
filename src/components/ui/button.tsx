import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Spinner from "./spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "flex h-12 w-full items-center justify-center rounded-xl",
        "bg-blue-600 text-white font-medium",
        "transition-all duration-200",
        "hover:bg-blue-700",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}