"use client";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

interface CustomerActionsProps {
  onView: () => void;

  onEdit: () => void;

  onDelete: () => void;
}

export default function CustomerActions({
  onView,
  onEdit,
  onDelete,
}: CustomerActionsProps) {
  return (
    <div className="flex justify-center gap-2">

      <button
        onClick={onView}
        className="
          rounded-lg
          p-2
          text-slate-500
          transition
          hover:bg-slate-100
          hover:text-slate-900
        "
      >
        <Eye size={18} />
      </button>

      <button
        onClick={onEdit}
        className="
          rounded-lg
          p-2
          text-orange-500
          transition
          hover:bg-orange-100
        "
      >
        <Pencil size={18} />
      </button>

      <button
        onClick={onDelete}
        className="
          rounded-lg
          p-2
          text-red-500
          transition
          hover:bg-red-100
        "
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}