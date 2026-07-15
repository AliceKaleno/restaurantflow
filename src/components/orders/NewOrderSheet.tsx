"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NewOrderSheet() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            className="
              rounded-xl
              bg-orange-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-600
            "
          >
            + Novo Pedido
          </button>
        }
      />

      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Novo Pedido
          </SheetTitle>

          <SheetDescription>
            Cadastre um novo pedido para o restaurante.
          </SheetDescription>
        </SheetHeader>

        <div className="p-4">
          Em breve teremos o formulário aqui 🚀
        </div>
      </SheetContent>
    </Sheet>
  );
}