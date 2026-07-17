import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthCard from "../../../components/auth/AuthCard";
import Logo from "../../../components/common/Logo";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/Input";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />
      </div>
          <AuthCard>
            <Logo />

            <div className="mt-10 space-y-6">
              <Input
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Button onClick={() => navigate("/verify")}>ادامه</Button>
            </div>

            <p className="mt-8 text-center text-sm text-zinc-500">
              با ادامه، کد تأیید برای شما ارسال خواهد شد.
            </p>
          </AuthCard>
    </main>
  );
}
