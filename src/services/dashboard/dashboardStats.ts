import { MenuItem } from "@/types/menu";

export interface DashboardStats {
  totalPratos: number;
  disponiveis: number;
  indisponiveis: number;
  precoMedio: number;
  pratoMaisCaro: MenuItem | null;
  pratoMaisBarato: MenuItem | null;
  categoriaMaisPopular: {
    nome: string;
    quantidade: number;
} | null;

  categoryData: {
    category: string;
    total: number;
  }[];
}

export function getDashboardStats(items: MenuItem[]): DashboardStats {
  const totalPratos = items.length;

  const disponiveis = items.filter((item) => item.available).length;

  const indisponiveis = totalPratos - disponiveis;

  const precoMedio =
    totalPratos === 0
      ? 0
      : items.reduce((acc, item) => acc + item.price, 0) / totalPratos;

  const pratoMaisCaro =
    totalPratos > 0
      ? items.reduce((a, b) => (a.price > b.price ? a : b))
      : null;

  const pratoMaisBarato =
    totalPratos > 0
      ? items.reduce((a, b) => (a.price < b.price ? a : b))
      : null;

  const categorias = items.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const categoriaMaisPopularEntry = Object.entries(categorias).sort(
  (a, b) => b[1] - a[1],
)[0];

const categoriaMaisPopular = categoriaMaisPopularEntry
  ? {
      nome: categoriaMaisPopularEntry[0],
      quantidade: categoriaMaisPopularEntry[1],
    }
  : null;

  const categoryData = Object.entries(categorias).map(([category, total]) => ({
    category,
    total,
  }));

  return {
    totalPratos,
    disponiveis,
    indisponiveis,
    precoMedio,
    pratoMaisCaro,
    pratoMaisBarato,
    categoriaMaisPopular,
    categoryData,
  };
}
