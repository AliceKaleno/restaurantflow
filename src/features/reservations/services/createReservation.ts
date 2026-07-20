import { Reservation } from "@/types/reservation";

interface CreateReservationData {
  customerId: string;

  customerName: string;

  tableId: string;

  tableNumber: number;

  people: number;

  date: string;

  time: string;
}

export function createReservation({
  customerId,
  customerName,
  tableId,
  tableNumber,
  people,
  date,
  time,
}: CreateReservationData): Reservation {
  return {
    id: crypto.randomUUID(),

    customerId,

    customerName,

    tableId,

    tableNumber,

    people,

    date,

    time,

    status: "Agendada",

    createdAt: new Date().toISOString(),
  };
}