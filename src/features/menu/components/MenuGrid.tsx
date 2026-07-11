import { menuItems } from "@/mocks/menu";

import MenuCard from "./MenuCard";

export default function MenuGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {menuItems.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
}