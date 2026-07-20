export type ReservationStatus =
  | "Agendada"
  | "Confirmada"
  | "Finalizada"
  | "Cancelada";

export interface Reservation {
  id: string;

  customerId: string;

  tableId: string;

  customerName: string;

  tableNumber: number;

  people: number;

  date: string;

  time: string;

  status: ReservationStatus;

  createdAt: string;
}