import React, { useEffect } from "react";
import { ImUsers } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { useAppContext } from "../../context/AppContext";
import { TailSpin } from "react-loader-spinner";
import { FaGraduationCap } from "react-icons/fa";
import Card from "./Card";

const Cards = () => {
  const { allCandidates, allPositions, allStudents } = useAppContext();
  const cardStats = [];
  // useEffect(() => {
  //   const getData = async () => {
  //     await getStats();
  //   };
  //   getData();
  // }, []);

  return (
    <section className="grid md:grid-cols-4 xl:grid-cols-3 gap-4 mb-12">
      <>
        <div className="flex flex-col h-32 justify-center px-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full">
              <ImUsers size={24} />
            </div>
            {cardStats ? (
              <span className="block text-2xl font-bold">10</span>
            ) : (
              <TailSpin width={30} height={40} />
            )}
          </div>

          <span className="flex text-gray-500">Candidates</span>
        </div>

        <div className="flex flex-col h-32 justify-center px-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-pink-400 bg-pink-50 rounded-full">
              <HiUsers size={24} />
            </div>
            {cardStats ? (
              <span className="block text-2xl font-bold">8</span>
            ) : (
              <TailSpin width={30} height={40} />
            )}
          </div>

          <span className="block text-gray-500">Positions</span>
        </div>

        <div className="flex flex-col h-32 justify-center px-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full">
              <FaGraduationCap size={24} />
            </div>
            {cardStats ? (
              <span className="block text-2xl font-bold">200</span>
            ) : (
              <TailSpin width={30} height={40} />
            )}
          </div>

          <span className="block text-gray-500">Students</span>
        </div>
        <Card />
      </>
    </section>
  );
};

export default Cards;
