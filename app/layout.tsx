import RootProvider from "@/context/root-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robot",
  description: "Use ia tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // THIS IS FOR WARNING IN THEME PROVIDER SHADUI
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
