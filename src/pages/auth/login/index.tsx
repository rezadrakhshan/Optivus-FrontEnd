import { useState } from "react";

import Hero from "../../../components/hero/Hero";
import AuthCard from "../../../components/auth/AuthCard";
import Logo from "../../../components/common/Logo";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/Input";

export default function Login() {
  const [phone, setPhone] = useState("");

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />

      </div>

      {/* Content */}

      <div className="grid min-h-screen lg:grid-cols-5">

        {/* Hero */}

        <section className="hidden lg:col-span-3 lg:flex">

          <Hero />

        </section>

        {/* Login */}

        <section className="col-span-2 flex items-center justify-center">

          <AuthCard>

            <Logo />

            <div className="mt-10 space-y-5">

              <Input
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Button>

                ادامه

              </Button>

            </div>

            <p className="mt-8 text-center text-sm text-zinc-500">

              با ادامه، کد تأیید برای شما ارسال خواهد شد.

            </p>

          </AuthCard>

        </section>

      </div>

    </main>
  );
}