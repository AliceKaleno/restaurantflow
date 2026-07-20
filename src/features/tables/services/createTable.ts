import { RestaurantTable } from "@/types/table";

interface CreateTableData {
  number: number;

  seats: number;
}

export function createTable({
  number,
  seats,
}: CreateTableData): RestaurantTable {
  return {
    id: crypto.randomUUID(),

    number,

    seats,

    status: "Livre",
  };
}