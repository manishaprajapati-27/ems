import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  //   console.log(authData.employees);
  //   const [userData, setUserData] = useState(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 mb-5">
      <div className="border border-red-400 bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h3 className="text-white font-medium text-lg w-1/5">Employee Name</h3>
        <h3 className="text-white font-medium text-lg w-1/5">New Task</h3>
        <h3 className="text-white font-medium text-lg w-1/5">Active Task</h3>
        <h3 className="text-white font-medium text-lg w-1/5">Completed Task</h3>
        <h3 className="text-white font-medium text-lg w-1/5">Failed Task</h3>
      </div>
      <div className="">
        {userData.map((data, idx) => {
          return (
            <div
              key={idx}
              className="border border-emerald-200 py-2 px-4 mb-2 flex justify-between rounded"
            >
              <h3 className="text-blue-400 font-medium text-lg w-1/5">
                {data.firstName}
              </h3>
              <h3 className="text-green-400 font-medium text-lg w-1/5">
                {data.taskNumbers.newTask}
              </h3>
              <h3 className="text-yellow-500 font-medium text-lg w-1/5">
                {data.taskNumbers.active}
              </h3>
              <h3 className="text-orange-400 font-medium text-lg w-1/5">
                {data.taskNumbers.completed}
              </h3>
              <h3 className="text-red-500 font-medium text-lg w-1/5">
                {data.taskNumbers.failed}
              </h3>
            </div>
          );
        })}
      </div>
      {/* <div className="bg-orange-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div> */}
      {/* <div className="bg-lime-600 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-green-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-blue-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-yellow-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div> */}
    </div>
  );
};

export default AllTask;
