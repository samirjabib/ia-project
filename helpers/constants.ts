import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/dashboard/conversation",
    color: "text-foreground/60",
    bgColor: "",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/dashboard/music",
    color: "text-foreground/60",
    bgColor: "",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-foreground/60",
    bgColor: "",
    href: "/dashboard/picture",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-foreground/60",
    bgColor: "",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-foreground/60",
    bgColor: "",
    href: "/dashboard/code",
  },
];
