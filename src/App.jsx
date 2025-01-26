import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashbaord/EmployeeDashboard";
import AdminDashborad from "./components/Dashbaord/AdminDashborad";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

function App() {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  });

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashborad /> */}
    </>
  );
}

export default App;
