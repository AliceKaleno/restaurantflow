"use client";

import { createContext, useContext, useState } from "react";

import { MenuItem } from "@/types/menu";
import { initialMenu } from "@/data/menu";

interface MenuContextData {
  items: MenuItem[];
  addItem: (item: MenuItem) => void;
}

const MenuContext = createContext({} as MenuContextData);

export function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState(initialMenu);

  function addItem(item: MenuItem) {
    setItems((old) => [item, ...old]);
  }

  return (
    <MenuContext.Provider
      value={{
        items,
        addItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}