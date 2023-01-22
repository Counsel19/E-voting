import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../../context/AppContext";

const AllStudents = () => {
  const {} = useAppContext();

  // useEffect(() => {
  //   const getData = async () => {
  //     await getBooks();
  //   };

  //   getData();
  // }, [searchBook]);

  const allStudents = [
    {
      _id: 23,
      firstname: "James",
      lastname: "Jenny",
      level: "300",
    },
    {
      _id: 24,
      firstname: "James",
      lastname: "Jenny",
      level: "300",
    },
    {
      _id: 2,
      firstname: "James",
      lastname: "Jenny",
      level: "300",
    },
  ];

  return (
    <div className="sm:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">All Students</h1>
        <h2 className="text-gray-600 ml-0.5">List of all students</h2>
      </div>

      <div className="mt-0 py-4 overflow-x-auto relative shadow-md sm:rounded-lg bg-white  flex-1">
        <div className="w-1/2 px-6"></div>
        {allStudents ? (
          <div className="my-0  px-2 py-4">
            <div className="flex items-center justify-between mb-5"></div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-sm text-blue-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="py-5 px-3">
                    S/N
                  </th>

                  <th scope="col" className="py-5 px-3">
                    First Name
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Last name
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {allStudents.length === 0 ? (
                  <tr className="text-center font-bold text-xl py-4 px-3">
                    <td colSpan={5} className="py-4 px-3">
                      No Student Yet
                    </td>
                  </tr>
                ) : (
                  allStudents.map((item, index) => (
                    <tr key={item._id} className="bg-white border-b">
                      <td className="py-4 px-3">{index + 1}</td>

                      <td className="py-4 px-3">{item.firstname}</td>

                      <td className="py-4 px-3">{item.lastname}</td>

                      <td className="py-4 px-3">{item.level}</td>
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

export default AllStudents;
