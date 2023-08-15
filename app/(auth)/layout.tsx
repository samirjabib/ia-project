export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="">{children}</main>;
}
