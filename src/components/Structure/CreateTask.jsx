import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        action=""
        className="flex items-start w-full flex-wrap justify-between"
      >
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="date"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Asign to</h3>
            <input
              className="text-sm  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 px-3 py-2"
              type="text"
              placeholder="Design, dev, etc."
            />
          </div>
        </div>
        <div className="flex w-2/5 flex-col items-center">
          <div className="mb-4 w-full">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              className="text-sm  w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
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
