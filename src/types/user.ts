export type UserRole =
  | "Administrador"
  | "Funcionário";

export interface User {
  id: string;

  name: string;

  email: string;

  role: UserRole;
}