"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/design-system";
import { User } from "@supabase/supabase-js";

export const LandingHero = ({ user }: { user: User | null }) => {
  return (
    <div className="text-foreground font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-foreground/80">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={user?.id ? "/dashboard" : "/sign-up"}>
          <Button
            variant="default"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-foreground/40 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
