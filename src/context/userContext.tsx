import { createContext, useContext, useEffect, useState } from "react";
import { UserContextProps, UserData } from "./context-types";

export const UserContext = createContext({
  currentUser: {} as UserData | null,
});

export const UserProvider = ({ children }: UserContextProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  let user;

  useEffect(() => {
    user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, [user]);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
