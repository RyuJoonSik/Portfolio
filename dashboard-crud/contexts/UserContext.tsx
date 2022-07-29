import React, { useState, useEffect, Dispatch } from "react";
import { User } from "firebase/auth";
import { setLoginedUser } from "../firebase/authentication";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextValue {
  user: User | null;
  setUser: Dispatch<User>;
}

export const UserContext = React.createContext<UserContextValue>(
  {} as UserContextValue
);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoginedUser(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
