"use client";

import { useMemo, useState } from "react";

import ReservationHeader from "../components/ReservationHeader";
import ReservationToolbar from "../components/ReservationToolbar";
import ReservationTable from "../components/ReservationTable";
import NewReservationSheet from "../components/NewReservationSheet";

import { useReservationStore } from "@/store/reservationStore";

import { Reservation } from "@/types/reservation";

export default function ReservationsPage() {
  const reservations = useReservationStore(
    (state) => state.reservations
  );

  const removeReservation = useReservationStore(
    (state) => state.removeReservation
  );

  const [search, setSearch] = useState("");

  const [sheetOpen, setSheetOpen] =
    useState(false);

  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) =>
      reservation.customerName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [reservations, search]);

  function handleView(
    reservation: Reservation
  ) {
    console.log("Visualizar", reservation);
  }

  function handleEdit(
    reservation: Reservation
  ) {
    console.log("Editar", reservation);
  }

  function handleDelete(
    reservation: Reservation
  ) {
    const confirmed = window.confirm(
      `Deseja excluir a reserva de ${reservation.customerName}?`
    );

    if (!confirmed) return;

    removeReservation(reservation.id);
  }

  return (
    <div className="space-y-8">

      <ReservationHeader />

      <ReservationToolbar
        search={search}
        onSearchChange={setSearch}
        onNewReservation={() =>
          setSheetOpen(true)
        }
      />

      <ReservationTable
        reservations={filteredReservations}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <NewReservationSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />

    </div>
  );
}