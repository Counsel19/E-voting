import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center  justify-center p-8 bg-blue-900 shadow rounded-lg">
      <h2 className="text-xl text-gray-100 font-light mb-3">
        <span className="text-violet-500 font-bold">220</span> out of{" "}
        <span className="text-white font-bold">500</span>
      </h2>
      <span className="text-gray-100">Have voted</span>
    </div>
  );
};

export default Card;
