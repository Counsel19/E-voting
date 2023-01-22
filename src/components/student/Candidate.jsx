import React from "react";
import { Link } from "react-router-dom";

const Candidate = ({ photo, firstname, lastname, level }) => {
  return (
    <Link to="" className="flex items-center gap-4 border-b-2 py-4">
      <div className="flex items-center border-2 h-16 w-16 border-blue-700 justify-center px-3 py-3 rounded-full">
        <img src={photo} alt={firstname} />
      </div>

      <div className="flex flex-col ">
        <h2 className="text-lg ">
          {firstname} {lastname}
        </h2>
        <h2 className="text-sm text-gray-400 ">{level} level</h2>
      </div>
    </Link>
  );
};

export default Candidate;
