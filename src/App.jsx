import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashbaord/EmployeeDashboard";
import AdminDashborad from "./components/Dashbaord/AdminDashborad";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  //   useEffect(() => {
  //     setLocalStorage();
  //     if (authData) {
  //       const loggedInUser = localStorage.getItem("loggedInUser");
  //       if (loggedInUser) {
  //         setUser(loggedInUser.role);
  //       }
  //     }
  //   }, [authData]);

  useEffect(() => {
    // setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(loggedInUser);
    if (loggedInUser) {
      const userData = JSON.parse("loggedInUser");
      setUser(userData.role);
      setLoggedInUserData(userData.data);
      //   console.log("User logged in hai");
    }
  }, []);

  const handleLogin = (email, password) => {
    console.log(email, password);
    if (email == "admin@gmail.com" && password == "123") {
      //   console.log("This is Admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      //   console.log("This is User");
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employees");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees" })
        );
      }
    } else {
      alert("Invalid");
    }
  };
  //   handleLogin("admin@gmail.com", "123");

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashborad /> : ""}
      {user == "employees" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashborad /> */}
    </>
  );
}

export default App;
