import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Position = ({ position }) => {
  return (
    <Link
      to="/students/candidates"
      className="flex items-center gap-4 border-b-2 py-4"
    >
      <div className="flex items-center border-2 border-blue-700 justify-center px-3 py-2 rounded-lg">
        <VscDebugBreakpointLogUnverified size={23} className="text-blue-700" />
      </div>

      <div className="flex flex-col">
        <h2 className="text-lg ">{position}</h2>
        <h2 className="text-sm text-gray-400 ">Information Technology</h2>
      </div>
    </Link>
  );
};

export default Position;
