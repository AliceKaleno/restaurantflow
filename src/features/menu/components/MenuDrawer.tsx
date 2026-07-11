"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import MenuForm from "./MenuForm";

interface MenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MenuDrawer({
  open,
  onOpenChange,
}: MenuDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-xl">

        <SheetHeader>
          <SheetTitle>
            Novo Prato
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">

          <MenuForm />

        </div>

      </SheetContent>
    </Sheet>
  );
}