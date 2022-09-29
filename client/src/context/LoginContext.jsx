import React, { Children, createContext } from "react";
import { useState } from "react";

export const LoginData = createContext(null);

const LoginContext = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <LoginData.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </LoginData.Provider>
  );
};

export default LoginContext;
