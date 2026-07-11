export type Category =
  | "Pizza"
  | "Hambúrguer"
  | "Bebida"
  | "Sobremesa";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  image: string;
  available: boolean;
}