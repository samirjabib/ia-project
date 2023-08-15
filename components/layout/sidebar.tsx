"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react/dist/esm/lucide-react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Title } from "@/design-system";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-foreground/60",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-foreground/60",
  },
  {
    label: "Picture Generation",
    icon: ImageIcon,
    color: "text-foreground/60",
    href: "/picture",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-foreground/60",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-foreground/60",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-foreground/60",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const Sidebar = ({}: {}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary ">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-12 w-12 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <Title
            className={cn(
              "text-2xl font-bold text-foreground",
              poppins.className
            )}
          >
            Robot
          </Title>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-foreground/10 rounded-lg transition",
                pathname === route.href
                  ? "text-foreground bg-white/10"
                  : "text-foreground/80"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    pathname === route.href ? "text-primary/60 " : "route.color"
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
