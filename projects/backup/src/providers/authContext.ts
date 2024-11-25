import { User } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext<{
    isAuthenticated: boolean;
    user: User | null;
    login: () => Promise<void>;
    logout: () => Promise<void>;
  }>({
    isAuthenticated: false,
    user: null,
    login: async () => {},
    logout: async () => {},
  });