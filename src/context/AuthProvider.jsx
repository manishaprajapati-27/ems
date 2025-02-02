import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
// import local

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   localStorage.clear();
  const [userData, setUserData] = useState(null);
  const setdata = setLocalStorage();
  const data = getLocalStorage();
  //   console.log(data.employees);
  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  return (
    <>
      <div>
        <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
      </div>
    </>
  );
};

export default AuthProvider;
