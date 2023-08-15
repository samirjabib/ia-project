"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, ThemeDropDown } from "@/design-system";
import { User } from "@supabase/supabase-js";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = ({ user }: { user: User | null }) => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Robot
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <ThemeDropDown />
        <Link href={user?.id ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
