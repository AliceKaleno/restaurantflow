"use client";

import { createContext, useContext } from "react";

import { MenuItem } from "@/types/menu";
import { initialMenu } from "@/data/menu";

import { useLocalStorage } from "@/hooks/useLocalStorage";

interface MenuContextData {
  items: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  isLoaded: boolean;
}

const STORAGE_KEY = "restaurantflow-menu";

const MenuContext = createContext({} as MenuContextData);

export function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    value: items,
    setValue: setItems,
    isLoaded,
  } = useLocalStorage<MenuItem[]>(
    STORAGE_KEY,
    initialMenu
  );

  function addItem(item: MenuItem) {
    setItems((old) => [item, ...old]);
  }

  function removeItem(id: string) {
    setItems((old) =>
      old.filter((item) => item.id !== id)
    );
  }

  return (
    <MenuContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        isLoaded,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}