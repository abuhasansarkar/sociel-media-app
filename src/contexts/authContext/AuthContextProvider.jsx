import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const sinIn = () => {
     
  }

  const authInfo = {
    currentUser,
    sinIn
  };
  return (
    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
