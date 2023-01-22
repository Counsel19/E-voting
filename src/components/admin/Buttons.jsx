import React from "react";
import { Link } from "react-router-dom";
import AddCandidatesImg from "../../assets/images/add-friends.svg";
import PeopleImg from "../../assets/images/people.svg"

const Buttons = () => {
  return (
    <div className="flex justify-between gap-6 mb-12">
      <div className="bg-gray-200 w-full rounded-xl flex items-center justify-between gap-4 px-6 py-2">
        <img src={PeopleImg} alt="Candidates" className="h-24 w-24" />
        <Link
          to="/admin/add-candidate"
          className="px-2 py-1 bg-white h-fit border-blue-900 border rounded"
        >
          Add Candidates
        </Link>
      </div>
      <div className="bg-gray-200 rounded-xl w-full flex items-center justify-between gap-4 px-6 py-2">
        <img src={AddCandidatesImg} alt="Add Task Image" className="h-24 w-24" />
        <Link
          to="/admin/add-position"
          className="px-2 py-1 bg-white border-blue-900 border rounded"
        >
          Add Position
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
