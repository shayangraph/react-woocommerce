import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({});
  const [cookies, setCookies,remove] = useCookies(["token"]);

  useEffect(() => {
    if (window.localStorage.getItem("username") && cookies.token) {
      setAuthState({
        token: cookies.token,
        username: window.localStorage.getItem("username"),
        email: window.localStorage.getItem("email"),
      });
    }
  }, [setAuthState, cookies]);

  const isAuthenticated = () => {
    if (authState.token) {
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    remove('token');
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("email");
    setAuthState({});
  };

  return (
    <Provider
      value={{
        authState,
        isAuthenticated,
        setAuthNewState: (value) => setAuthState(value),
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
