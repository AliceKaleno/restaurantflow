"use client";

import { Reservation } from "@/types/reservation";

import ReservationStatus from "./ReservationStatus";
import ReservationActions from "./ReservationActions";

interface ReservationRowProps {
  reservation: Reservation;

  onView: () => void;

  onEdit: () => void;

  onDelete: () => void;
}

export default function ReservationRow({
  reservation,
  onView,
  onEdit,
  onDelete,
}: ReservationRowProps) {
  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50">

      <td className="px-6 py-4">

        <div>

          <p className="font-semibold">
            {reservation.customerName}
          </p>

          <p className="text-sm text-slate-500">
            Cliente
          </p>

        </div>

      </td>

      <td className="px-6 py-4 text-center">
        Mesa {reservation.tableNumber}
      </td>

      <td className="px-6 py-4 text-center">
        {reservation.people}
      </td>

      <td className="px-6 py-4 text-center">
        {new Date(
          reservation.date
        ).toLocaleDateString("pt-BR")}
      </td>

      <td className="px-6 py-4 text-center">
        {reservation.time}
      </td>

      <td className="px-6 py-4 text-center">

        <ReservationStatus
          status={reservation.status}
        />

      </td>

      <td className="px-6 py-4 text-center">

        <ReservationActions
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      </td>

    </tr>
  );
}
