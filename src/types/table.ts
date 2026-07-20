export type TableStatus =
  | "Livre"
  | "Ocupada"
  | "Reservada";

export interface RestaurantTable {
  id: string;
  number: number;
  seats: number;
  status: TableStatus;
  orderId?: string;
  reservationTime?: string;
}