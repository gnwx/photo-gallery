import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setLogin = (data) => {
    setUser(data.user);
    sessionStorage.setItem("JWT", data.token);
    sessionStorage.setItem("user_name", data.user.name);
  };

  const logOut = () => {
    setUser(null);
    sessionStorage.clear();
  };
  useEffect(() => {
    if (!user) {
      const session = sessionStorage.getItem("JWT");
      const name = sessionStorage.getItem("user_name");

      if (session && name) {
        setUser({ name, token: session });
      }
    }
  }, []);
  const values = { setLogin, user, logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
