import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@/types/user";

interface UsersStore {
  users: User[];

  addUser: (user: User) => void;

  getUserByEmail: (email: string) => User | undefined;

  emailExists: (email: string) => boolean;
}

export const useUsersStore = create<UsersStore>()(
  persist(
    (set, get) => ({
      users: [
        {
          id: crypto.randomUUID(),

          name: "Administrador",

          email: "admin@restaurantflow.com",

          password: "123456",

          role: "Administrador",
        },

        {
          id: crypto.randomUUID(),

          name: "Funcionário",

          email: "funcionario@restaurantflow.com",

          password: "123456",

          role: "Funcionário",
        },
      ],

      addUser: (user) =>
        set((state) => ({
          users: [...state.users, user],
        })),

      getUserByEmail: (email) =>
        get().users.find(
          (user) => user.email.toLowerCase() === email.toLowerCase(),
        ),

      emailExists: (email) =>
        get().users.some(
          (user) => user.email.toLowerCase() === email.toLowerCase(),
        ),
    }),

    {
      name: "restaurantflow-users",
    },
  ),
);
