import { useState } from "react";
import { Smartphone } from "lucide-react";

import AuthCard from "../../../components/auth/AuthCard";
import Logo from "../../../components/common/Logo";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/Input";

export default function Login() {
  const [phone, setPhone] = useState("");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]" />
      </div>

      <AuthCard>
        <Logo />

        <div className="mt-10 space-y-6">
          <div className="relative">
            <Smartphone
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />

            <Input
              className="pr-12 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <Button
            className="hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            ادامه
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          برای ادامه شماره موبایل خود را وارد کنید.
        </p>
      </AuthCard>
    </main>
  );
}
