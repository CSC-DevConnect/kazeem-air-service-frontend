import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenContextProps, UserData } from "./context-types";

export const UserContext = createContext({
  currentUser: {} as UserData | null,
});

export const UserProvider = ({ children }: ChildrenContextProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
