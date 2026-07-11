import { MenuItem } from "@/types/menu";

export const initialMenu: MenuItem[] = [
  {
    id: "1",
    name: "Pizza Calabresa",
    description: "Molho artesanal, queijo e calabresa.",
    category: "pizza",
    price: 42.9,
    available: true,
    image: "/menu/pizza.png",
  },
  {
    id: "2",
    name: "Hambúrguer Artesanal",
    description: "180g de carne, cheddar e bacon.",
    category: "burger",
    price: 32.5,
    available: true,
    image: "/menu/burger.png",
  },
];