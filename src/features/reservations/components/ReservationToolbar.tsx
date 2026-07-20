"use client";

import { Search } from "lucide-react";

interface Props {
  search: string;

  onSearchChange: (value: string) => void;

  onNewReservation: () => void;
}

export default function ReservationToolbar({
  search,
  onSearchChange,
  onNewReservation,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div className="relative w-full max-w-md">

        <Search
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
          size={18}
        />

        <input
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder="Buscar reserva..."
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            py-3
            pl-10
            pr-4
            outline-none
            focus:border-orange-500
          "
        />

      </div>

      <button
        onClick={onNewReservation}
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
        + Nova Reserva
      </button>
    </div>
  );
}