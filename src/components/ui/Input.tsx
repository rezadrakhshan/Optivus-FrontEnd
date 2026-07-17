import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "h-12 w-full rounded-xl",
        "border border-zinc-700",
        "bg-zinc-900",
        "px-4",
        "text-white",
        "placeholder:text-zinc-500",
        "outline-none",
        "transition",
        "focus:border-blue-500",
        "focus:ring-2",
        "focus:ring-blue-500/20",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;