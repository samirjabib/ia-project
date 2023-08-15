import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //in this page make the protecion for all routes inside of dashboard
  if (user?.id && user?.user_metadata.role == "client") {
    redirect("/dashboard/tools");
  } else {
    redirect("/");
  }
}
