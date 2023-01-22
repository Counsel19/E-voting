import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../../context/AppContext";

const AllPositions = () => {
  const {} = useAppContext();

  // useEffect(() => {
  //   const getData = async () => {
  //     await getBooks();
  //   };

  //   getData();
  // }, [searchBook]);

  const allPositions = [
    {
      _id: 23,
      position: "President",
    },
    {
      _id: 3,
      position: "Vice President",
    },
  ];
  return (
    <div className="sm:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">All Positions</h1>
        <h2 className="text-gray-600 ml-0.5">List of all Positions</h2>
      </div>

      <div className="mt-0 py-4 overflow-x-auto relative shadow-md sm:rounded-lg bg-white  flex-1">
        {allPositions ? (
          <div className="my-0  px-2 py-4">
            <div className="flex items-center justify-between mb-5"></div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-sm text-blue-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="py-5 px-3">
                    S/N
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody>
                {allPositions.length === 0 ? (
                  <tr className="text-center font-bold text-xl py-4 px-3">
                    <td colSpan={5} className="py-4 px-3">
                      No Position Added Yet
                    </td>
                  </tr>
                ) : (
                  allPositions.map((item, index) => (
                    <tr key={item._id} className="bg-white border-b">
                      <td className="py-4 px-3">{index + 1}</td>

                      <td className="py-4 px-3">{item.position}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <TailSpin />
        )}
      </div>
    </div>
  );
};

export default AllPositions;
