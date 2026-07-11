"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

interface MenuHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

export default function MenuHeader({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: MenuHeaderProps) {

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Cardápio</h1>

          <p className="text-slate-500">
            Gerencie todos os pratos do restaurante.
          </p>
        </div>

        <Button>
          <Plus size={18} />
          Novo Prato
        </Button>
      </div>

      <SearchBar value={search} onChange={onSearchChange} />

      <CategoryFilter selected={category} onSelect={onCategoryChange} />
    
    </div>
  );
}
