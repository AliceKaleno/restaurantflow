import MenuCard from "./MenuCard";
import { MenuItem } from "@/types/menu";

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({
  items,
}: MenuGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <MenuCard
          key={item.id}
          item={item}
          priority={index < 3}
        />
      ))}
    </section>
  );
}