import { MenuItem } from "@/types/menu";

export interface DashboardStats {
  totalItems: number;

  availableItems: number;

  unavailableItems: number;

  totalCategories: number;

  averagePrice: number;

  highestPriceItem?: MenuItem;

  lowestPriceItem?: MenuItem;

  categoryData: {
    category: string;
    total: number;
  }[];
}

export function getDashboardStats(
  items: MenuItem[]
): DashboardStats {
  const totalItems = items.length;

  const availableItems = items.filter(
    (item) => item.available
  ).length;

  const unavailableItems =
    totalItems - availableItems;

  const totalCategories = new Set(
    items.map((item) => item.category)
  ).size;

  const averagePrice =
    totalItems === 0
      ? 0
      : items.reduce(
          (acc, item) => acc + item.price,
          0
        ) / totalItems;

  const highestPriceItem = [...items].sort(
    (a, b) => b.price - a.price
  )[0];

  const lowestPriceItem = [...items].sort(
    (a, b) => a.price - b.price
  )[0];

  const categoryData = Array.from(
    new Set(items.map((item) => item.category))
  ).map((category) => ({
    category,
    total: items.filter(
      (item) => item.category === category
    ).length,
  }));

  return {
    totalItems,
    availableItems,
    unavailableItems,
    totalCategories,
    averagePrice,
    highestPriceItem,
    lowestPriceItem,
    categoryData,
  };
}