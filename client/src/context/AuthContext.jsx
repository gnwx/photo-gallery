import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const setLogin = (data) => {
    setUser(data.user);
    sessionStorage.setItem("JWT", data.token);
  };
  const values = { setLogin, user };

  useEffect(() => {
    if (!user) {
      const session = sessionStorage.getItem("JWT");
      if (session) {
        setUser(session);
      }
    }
  }, []);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
