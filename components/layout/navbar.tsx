"use client";

import { Button, ThemeDropDown } from "@/design-system";
import { MobileSidebar } from "./navbar-mobile";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Navbar = () => {
  const router = useRouter();

  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="flex items-center py-4">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-x-4">
        <ThemeDropDown />
        <Button variant={"outline"} onClick={signOut}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
