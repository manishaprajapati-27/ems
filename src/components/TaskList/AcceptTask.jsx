import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex gap-1 mt-3 justify-between">
        <button className="bg-red-500 px-2 py-1 text-sm rounded">
          Mark as Completed
        </button>
        <button className="bg-green-500 px-2 py-1 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
