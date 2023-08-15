"use client";

import { Button } from "@/design-system";
import { MobileSidebar } from "./navbar-mobile";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Navbar = async () => {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <Button variant={"outline"} onClick={signOut}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;