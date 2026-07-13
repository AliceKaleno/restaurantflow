import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Pizza Margherita",
    description: "Molho artesanal, mussarela e manjericão.",
    category: "Pizza",
    price: 48.9,
    image: "/menu/pizza.png",
    available: true,
  },
  {
    id: "2",
    name: "Smash Burger",
    description: "Pão brioche, cheddar e bacon.",
    category: "Hambúrguer",
    price: 36.9,
    image: "/menu/burger.png",
    available: false,
  },
    {
    id: "3",
    name: "Delicius Salada",
    description: "Salada bem preparada com diversos legumes.",
    category: "Salada",
    price: 36.9,
    image: "/menu/salada.png",
    available: false,
  },
];