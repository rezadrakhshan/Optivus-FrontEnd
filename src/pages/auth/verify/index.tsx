import { useState } from "react";

import AuthCard from "../../../components/auth/AuthCard";
import OTPInput from "../../../components/auth/OtpInput";
import Button from "../../../components/ui/button";
import Logo from "../../../components/common/Logo";
import ResendTimer from "../../../components/auth/ResendTimer";

export default function Verify() {
  const [code, setCode] = useState("");

  const handleVerify = (otp: string) => {
    console.log(otp);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center p-6">
        <AuthCard>
          <Logo />

          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-white">
              تأیید شماره موبایل
            </h1>

            <p className="mt-3 leading-7 text-zinc-400">
              کد ارسال شده به شماره زیر را وارد کنید
            </p>

            <p dir="ltr" className="mt-2 font-medium text-blue-400">۰۹۱۲ *** **۸۹</p>
          </div>

          <div className="mt-8 sm:mt-10">
            <OTPInput length={6} onChange={setCode} onComplete={handleVerify} />
          </div>

          <ResendTimer
            duration={120}
            onResend={() => {
              console.log("Resend OTP");
            }}
          />

          <Button className="mt-8 w-full" disabled={code.length !== 6}>
            تأیید
          </Button>

          <button
            className="
                            mt-5
                            w-full
                            text-sm
                            text-zinc-400
                            transition-colors
                            hover:text-white
                        "
          >
            تغییر شماره موبایل
          </button>
        </AuthCard>
      </div>
    </main>
  );
}
