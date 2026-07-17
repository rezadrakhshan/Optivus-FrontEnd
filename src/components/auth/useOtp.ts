import { useEffect, useRef, useState } from "react";

interface UseOTPProps {
  length: number;
  onChange?(code: string): void;
  onComplete?(code: string): void;
}

export function useOTP({ length, onChange, onComplete }: UseOTPProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    const code = otp.join("");

    onChange?.(code);

    if (!otp.includes("") && code.length === length) {
      onComplete?.(code);
    }
  }, [otp, length, onChange, onComplete]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const next = [...otp];
    next[index] = value;

    setOtp(next);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key !== "Backspace") return;

    if (otp[index]) {
      const next = [...otp];
      next[index] = "";
      setOtp(next);
      return;
    }

    if (index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    const next = Array(length).fill("");

    pasted.split("").forEach((digit, index) => {
      next[index] = digit;
    });

    setOtp(next);

    const focus = Math.min(pasted.length, length) - 1;

    inputsRef.current[focus]?.focus();
  };

  return {
    otp,
    inputsRef,
    handleChange,
    handleKeyDown,
    handlePaste,
  };
}
