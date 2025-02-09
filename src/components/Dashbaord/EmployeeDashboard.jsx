import React from "react";
import Header from "../Structure/Header";
import TaskListNumber from "../Structure/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <>
      <Header data={data} changeUser={changeUser} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </>
  );
};

export default EmployeeDashboard;
