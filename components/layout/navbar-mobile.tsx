"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react/dist/esm/lucide-react";

import { Button, Sheet, SheetContent, SheetTrigger } from "@/design-system";
import { Sidebar } from "./sidebar";

export const MobileSidebar = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
