import React from "react";
import Header from "../Structure/Header";
import CreateTask from "../Structure/CreateTask";
import AllTask from "../Structure/AllTask";

const AdminDashborad = ({ changeUser }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashborad;
