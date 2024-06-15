"use client";
import { LoginInButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Butcherman, Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className={cn("space-y-6 text-center", font)}>
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg">
          A simple NextJS Authentication System
        </p>
        <div>
          <LoginInButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginInButton>
        </div>
      </div>
    </main>
  );
}
