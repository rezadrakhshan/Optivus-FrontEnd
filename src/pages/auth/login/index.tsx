import { useState } from "react";

import AuthCard from "../../../components/auth/AuthCard";
import Logo from "../../../components/common/Logo";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/Input";

export default function Login() {
  const [phone, setPhone] = useState("");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <AuthCard>
        <Logo />

        <div className="mt-10 space-y-6">
          <Input
            placeholder="09123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Button>ادامه</Button>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          احراز هویت امن با استفاده از کد ورود
        </p>
      </AuthCard>
    </main>
  );
}
