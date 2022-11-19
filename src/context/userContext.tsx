import { createContext, useContext, useState } from "react";
import { UserData } from "./context-types";

type UserContextProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({
  currentUser: {} as UserData | null,
  setCurrentUser: (user: UserData | null) => {},
});

export const UserProvider = ({ children }: UserContextProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
