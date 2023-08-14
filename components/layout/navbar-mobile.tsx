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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
