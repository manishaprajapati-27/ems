import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashbaord/EmployeeDashboard";
import AdminDashborad from "./components/Dashbaord/AdminDashborad";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    console.log(email, password);
  };
  handleLogin();

  return (
    <>
      {!user ? <Login /> : ""}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashborad /> */}
    </>
  );
}

export default App;
