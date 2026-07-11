export type TableStatus =
  | "Livre"
  | "Ocupada"
  | "Reservada";

export interface RestaurantTable {
  id: number;
  number: number;
  status: TableStatus;
  people: number;
  total: number;
}