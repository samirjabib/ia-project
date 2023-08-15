import { User } from "@supabase/supabase-js";
import { LandingContent } from "./landing-content";
import { LandingHero } from "./landing-hero";
import { LandingNavbar } from "./landing-navbar";

export default function LandingPage({ user }: { user: User | null }) {
  return (
    <div className="h-full ">
      <LandingNavbar user={user} />
      <LandingHero user={user} />
      <LandingContent />
    </div>
  );
}
