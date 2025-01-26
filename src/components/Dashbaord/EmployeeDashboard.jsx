import React from "react";
import Header from "../Structure/Header";
import TaskListNumber from "../Structure/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <TaskListNumber />
      <TaskList />
    </>
  );
};

export default EmployeeDashboard;
