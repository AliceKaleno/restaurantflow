"use client";

import { Reservation } from "@/types/reservation";

import ReservationRow from "./ReservationRow";

interface ReservationTableProps {
  reservations: Reservation[];

  onView: (reservation: Reservation) => void;

  onEdit: (reservation: Reservation) => void;

  onDelete: (reservation: Reservation) => void;
}

export default function ReservationTable({
  reservations,
  onView,
  onEdit,
  onDelete,
}: ReservationTableProps) {
  if (reservations.length === 0) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-300
          bg-white
          py-20
          text-center
        "
      >
        <h3 className="text-lg font-semibold">
          Nenhuma reserva encontrada
        </h3>

        <p className="mt-2 text-slate-500">
          Clique em <strong>+ Nova Reserva</strong> para começar.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Cliente
              </th>

              <th className="px-6 py-4 text-center">
                Mesa
              </th>

              <th className="px-6 py-4 text-center">
                Pessoas
              </th>

              <th className="px-6 py-4 text-center">
                Data
              </th>

              <th className="px-6 py-4 text-center">
                Hora
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {reservations.map((reservation) => (

              <ReservationRow
                key={reservation.id}
                reservation={reservation}
                onView={() => onView(reservation)}
                onEdit={() => onEdit(reservation)}
                onDelete={() => onDelete(reservation)}
              />

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}