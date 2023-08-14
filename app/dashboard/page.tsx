import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id && user?.user_metadata.role == "client") {
    redirect("/dashboard/conversation");
  } else {
    redirect("/");
  }
}
