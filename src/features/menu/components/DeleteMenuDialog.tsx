"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";

interface DeleteMenuDialogProps {
  onConfirm: () => void;
}

export default function DeleteMenuDialog({
  onConfirm,
}: DeleteMenuDialogProps) {
  function handleDelete() {
    onConfirm();

    toast.success("Prato removido com sucesso!");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <button
            className="
              rounded-lg
              bg-red-500
              px-3
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-red-600
            "
          >
            Excluir
          </button>
        }
      />

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Excluir prato?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Essa ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}