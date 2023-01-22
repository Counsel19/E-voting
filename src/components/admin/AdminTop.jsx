import React from "react";
import AddTaskImg from "../../assets/images/add-task.svg";

// 3b2fbd
const AdminTop = () => {
  return (
    <div className="flex rounded-lg flex-col h-24 mb-12 px-12 space-y-6 md:space-y-0 md:flex-row justify-between bg-[#fcd5b4] text-white">
      <div className="mr-6 py-4">
        <h1 className="text-3xl font-semibold mb-2">Welcome John Doe</h1>
        <h2 className="text-gray-600 ml-0.5">Monitor and manage your E-voting system</h2>
      </div>

      <img src={AddTaskImg} alt="dashboard "  className="h-full w-24" />
    </div>
  );
};

export default AdminTop;
