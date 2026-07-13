"use client";

import { useMemo, useState } from "react";

import { useMenuStore } from "@/store/menuStore";

export function useMenuFilter() {
  const items = useMenuStore((state) => state.items);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "Todos" ||
        item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [items, search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredItems,
  };
}