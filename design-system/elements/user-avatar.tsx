"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "..";

export const UserAvatar = async () => {
  const supabase = createClientComponentClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/logo.png" />
      <AvatarFallback>{user?.email}</AvatarFallback>
    </Avatar>
  );
};
