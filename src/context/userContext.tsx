import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenContextProps, UserData } from "./context-types";

export const UserContext = createContext({
  currentUser: {} as UserData | null,
  setCurrentUser: (user: UserData | null) => {},
});

export const UserProvider = ({ children }: ChildrenContextProps) => {
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
