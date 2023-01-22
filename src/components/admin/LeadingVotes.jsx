import React from "react";
import { format } from "date-fns";

const leadingVotes = [
  {
    _id: 12,
    position: "President",
    candidate: "Mark Joe",
    numOfVotes: 12
  },
  {
    _id: 2,
    position: "President",
    candidate: "Mark Joe",
    numOfVotes: 12
  },
  {
    _id: 1,
    position: "President",
    candidate: "Mark Joe",
    numOfVotes: 12
  },
]

const LeadingVotes = ({  }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="mx-5 my-2">
        <div className="flex items-center justify-between mb-5 ">
          <h2 className="text-xl text-gray-600">Leading Vote</h2>
          <button className="bg-blue-800 ml-2  text-white py-2 px-4 rounded">
            As at of {format(new Date(), "do MMM, yyy HH:mm:ss")}
          </button>
        </div>
      </div>

      <table className="w-full text-base text-left text-gray-500  ">
        <thead className="text-base text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="py-5 px-6">
              Position
            </th>
            <th scope="col" className="py-5 px-6">
              Candidates
            </th>

            <th scope="col" className="py-5 px-6 text-center">
              Number of Votes
            </th>
          </tr>
        </thead>
        <tbody>
          {leadingVotes?.map((item) => (
            <tr
              key={item._id}
              className="bg-white border-b "
            >
              <th
                scope="row"
                className="py-2 flex gap-2 text-lg items-center px-6 font-medium text-gray-800 whitespace-nowrap"
              >
                {item.position}
              </th>
              <td className="py-2 px-6">{item.candidate}</td>

              <td className="py-2 px-6 flex items-center justify-center">
                {item.numOfVotes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadingVotes;
