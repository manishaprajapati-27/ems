import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 h-48 overflow-auto">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-orange-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Manisha</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-lime-600 py-2 px-4 mb-2 flex justify-between rounded">
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
      </div>
    </div>
  );
};

export default AllTask;
