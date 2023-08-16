import Navbar from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dasboard Layout",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id && user?.user_metadata.role !== "client") {
    //if user is not a client redirect to landing this is for protected by role
    redirect("/");
  }

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10  wrapper-mobile">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
