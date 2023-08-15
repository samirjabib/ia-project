import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react/dist/esm/lucide-react";

export const routes = [
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
];
