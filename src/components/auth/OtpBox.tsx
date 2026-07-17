import { forwardRef } from "react";

interface OTPBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const OTPBox = forwardRef<HTMLInputElement, OTPBoxProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      inputMode="numeric"
      autoComplete="one-time-code"
      maxLength={1}
      className="
                    h-14
                    w-14
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    text-center
                    text-xl
                    font-bold
                    text-white
                    outline-none
                    transition-all
                    duration-200
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/20
                    disabled:opacity-50
                "
    />
  );
});

OTPBox.displayName = "OTPBox";

export default OTPBox;
