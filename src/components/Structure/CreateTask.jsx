import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Task created");
    setNewTask({
      taskTitle,
      date,
      assign,
      category,
      description,
      active: false,
      newTask: false,
      completed: false,
      failed: false,
    });
    // console.log(task);
    setTaskTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDescription("");

    // const data = JSON.parse(localStorage.getItem("employees"));
    const data = userData;
    // console.log(data);
    data.forEach((item) => {
      if (assign === item.firstName) {
        console.log(item);
        item.tasks.push(newTask);
        item.taskNumbers.newTask = item.taskNumbers.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        action=""
        onSubmit={(e) => submitHandler(e)}
        className="flex items-start w-full flex-wrap justify-between"
      >
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI Design"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Asign to</h3>
            <input
              className="text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="text"
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
              placeholder="Employee Name"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design, dev, etc."
            />
          </div>
        </div>
        <div className="flex w-2/5 flex-col items-center">
          <div className="mb-4 w-full">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              className="text-sm  w-full rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              name=""
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
