"use client";

import { useEffect } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import MenuForm from "./MenuForm";

import { useMenuStore } from "@/store/menuStore";

interface MenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MenuDrawer({
  open,
  onOpenChange,
}: MenuDrawerProps) {
  const editingItem = useMenuStore(
    (state) => state.editingItem
  );

  const setEditingItem = useMenuStore(
    (state) => state.setEditingItem
  );

  useEffect(() => {
    if (editingItem) {
      onOpenChange(true);
    }
  }, [editingItem, onOpenChange]);

  function handleOpenChange(value: boolean) {
    onOpenChange(value);

    if (!value) {
      setEditingItem(null);
    }
  }

  return (
    <Sheet
      open={open}
      onOpenChange={handleOpenChange}
    >
      <SheetContent className="flex h-full flex-col overflow-y-auto sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>
            {editingItem
              ? "Editar Prato"
              : "Novo Prato"}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          <MenuForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}