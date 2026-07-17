import OTPBox from "./OtpBox";
import { useOTP } from "./useOtp";

interface OTPInputProps {
  length?: number;
  disabled?: boolean;

  onChange?(code: string): void;
  onComplete?(code: string): void;
}

export default function OTPInput({
  length = 6,
  disabled,
  onChange,
  onComplete,
}: OTPInputProps) {
  const { otp, inputsRef, handleChange, handleKeyDown, handlePaste } = useOTP({
    length,
    onChange,
    onComplete,
  });

  return (
    <div className="flex justify-center gap-3">
      {otp.map((digit, index) => (
        <OTPBox
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          value={digit}
          disabled={disabled}
          onPaste={handlePaste}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onChange={(e) => handleChange(e.target.value, index)}
        />
      ))}
    </div>
  );
}
