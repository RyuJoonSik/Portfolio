import React, { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebaseApp from "../firebase/initFirebase";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = React.createContext<UserContextValue>(
  {} as UserContextValue
);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isCheckedLoginedUser = useRef(false);

  useEffect(() => {
    const authentication = getAuth(firebaseApp);

    const unsubscribe = onAuthStateChanged(authentication, (loginedUser) => {
      if (!isCheckedLoginedUser.current) {
        isCheckedLoginedUser.current = true;

        setUser(loginedUser);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
