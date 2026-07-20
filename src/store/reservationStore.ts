import { create } from "zustand";

import { Reservation } from "@/types/reservation";

interface ReservationStore {
  reservations: Reservation[];

  addReservation: (
    reservation: Reservation
  ) => void;

  updateReservation: (
    id: string,
    data: Partial<Reservation>
  ) => void;

  removeReservation: (
    id: string
  ) => void;
}

export const useReservationStore =
  create<ReservationStore>((set) => ({
    reservations: [],

    addReservation: (reservation) =>
      set((state) => ({
        reservations: [
          ...state.reservations,
          reservation,
        ],
      })),

    updateReservation: (
      id,
      data
    ) =>
      set((state) => ({
        reservations:
          state.reservations.map((reservation) =>
            reservation.id === id
              ? {
                  ...reservation,
                  ...data,
                }
              : reservation
          ),
      })),

    removeReservation: (id) =>
      set((state) => ({
        reservations:
          state.reservations.filter(
            (reservation) =>
              reservation.id !== id
          ),
      })),
  }));