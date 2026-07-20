"use client";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

interface Props {
  onView: () => void;

  onEdit: () => void;

  onDelete: () => void;
}

export default function ReservationActions({
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex justify-center gap-2">

      <button
        onClick={onView}
        className="
          rounded-lg
          p-2
          text-slate-500
          hover:bg-slate-100
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
          hover:bg-red-100
        "
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}