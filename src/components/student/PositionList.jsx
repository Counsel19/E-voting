import React from "react";
import Position from "./Position";

const PositionList = () => {
  const positions = [
    {
      position: "President",
      _id: 1,
    },
  ];
  return (
    <div>
      {positions.map((item) => (
        <Position {...item} key={item._id} />
      ))}
    </div>
  );
};

export default PositionList;
