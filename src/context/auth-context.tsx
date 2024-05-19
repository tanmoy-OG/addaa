"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    setIsMounted(true);
    setAuthUser(JSON.parse(localStorage.getItem("chat-user") || "null"));
  }, []);
  if (!isMounted) return null;

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
