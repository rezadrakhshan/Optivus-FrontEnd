import { useEffect, useState } from "react";

interface ResendTimerProps {
  duration?: number;
  onResend?: () => void;
}

export default function ResendTimer({
  duration = 120,
  onResend,
}: ResendTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    if (timeLeft > 0) return;

    setTimeLeft(duration);

    onResend?.();
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  if (timeLeft > 0) {
    return (
      <p className="text-center text-sm text-zinc-500 mt-5">
        ارسال مجدد تا{" "}
        <span className="font-medium text-white">
          {minutes}:{seconds}
        </span>
      </p>
    );
  }

  return (
    <button
      type="button"
      onClick={handleResend}
      className="
                mx-auto
                block
                text-sm
                font-medium
                text-blue-500
                transition-colors
                hover:text-blue-400
            "
    >
      ارسال مجدد کد
    </button>
  );
}
