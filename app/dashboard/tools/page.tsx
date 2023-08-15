import DashboardPage from "@/components/dashboard/dashboard-page";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const access = user?.id && user?.user_metadata.role == "client";

  if (!access) {
    redirect("/");
  }

  return (
    <div>
      <DashboardPage />
    </div>
  );
}
