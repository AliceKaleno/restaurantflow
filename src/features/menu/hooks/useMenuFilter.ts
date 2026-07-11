import { useMemo, useState } from "react";

import { menuItems } from "@/mocks/menu";

export function useMenuFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "Todos" ||
        item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredItems,
  };
}