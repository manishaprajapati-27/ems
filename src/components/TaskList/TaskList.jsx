import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">Heigh</h3>
          <h4 className="text-sm">25 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          iusto beatae delectus nesciunt. Officia, tempore!
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">Heigh</h3>
          <h4 className="text-sm">25 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          iusto beatae delectus nesciunt. Officia, tempore!
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">Heigh</h3>
          <h4 className="text-sm">25 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          iusto beatae delectus nesciunt. Officia, tempore!
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">Heigh</h3>
          <h4 className="text-sm">25 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          iusto beatae delectus nesciunt. Officia, tempore!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
