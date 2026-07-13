export type Category =
  | "Pizza"
  | "Hambúrguer"
  | "Bebida"
  | "Salada";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  image: string;
  available: boolean;
}