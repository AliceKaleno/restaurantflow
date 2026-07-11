"use client";

import Layout from "@/components/layout/Layout";

import MenuHeader from "@/features/menu/components/MenuHeader";
import MenuGrid from "@/features/menu/components/MenuGrid";

import { useMenuFilter } from "@/features/menu/hooks/useMenuFilter";

export default function MenuPage() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    filteredItems,
  } = useMenuFilter();

  return (
    <Layout>
      <div className="space-y-8">

        <MenuHeader
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
        />

        <p className="text-sm text-slate-500">
          {filteredItems.length} prato(s) encontrado(s)
        </p>

        <MenuGrid
          items={filteredItems}
        />

      </div>
    </Layout>
  );
}