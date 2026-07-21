import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStore {
  restaurantName: string;
  phone: string;
  email: string;
  address: string;

  openingTime: string;
  closingTime: string;

  workingDays: string[];

  acceptReservations: boolean;
  showUnavailableDishes: boolean;
  soundNotifications: boolean;
  autoRefresh: boolean;

  setRestaurantInfo: (
    data: Partial<
      Pick<
        SettingsStore,
        | "restaurantName"
        | "phone"
        | "email"
        | "address"
      >
    >
  ) => void;

  setBusinessHours: (
    data: Partial<
      Pick<
        SettingsStore,
        | "openingTime"
        | "closingTime"
        | "workingDays"
      >
    >
  ) => void;

  setSystemSettings: (
    data: Partial<
      Pick<
        SettingsStore,
        | "acceptReservations"
        | "showUnavailableDishes"
        | "soundNotifications"
        | "autoRefresh"
      >
    >
  ) => void;
}

export const useSettingsStore =
  create<SettingsStore>()(
    persist(
      (set) => ({
        restaurantName: "RestaurantFlow",

        phone: "(81) 99999-9999",

        email: "contato@restaurantflow.com",

        address: "Recife - PE",

        openingTime: "08:00",

        closingTime: "22:00",

        workingDays: [
          "Seg",
          "Ter",
          "Qua",
          "Qui",
          "Sex",
        ],

        acceptReservations: true,

        showUnavailableDishes: true,

        soundNotifications: true,

        autoRefresh: true,

        setRestaurantInfo: (data) =>
          set((state) => ({
            ...state,
            ...data,
          })),

        setBusinessHours: (data) =>
          set((state) => ({
            ...state,
            ...data,
          })),

        setSystemSettings: (data) =>
          set((state) => ({
            ...state,
            ...data,
          })),
      }),

      {
        name: "restaurantflow-settings",
      }
    )
  );