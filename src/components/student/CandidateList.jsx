import React from "react";
import Candidate from "./Candidate";

const CandidateList = () => {
  const candidates = [
    {
      _id: 2,
      firstname: "James",
      lastname: "Joe",
      position: "President",
      level: "100",
    },
  ];
  return (
    <div>
      {candidates.map((item) => (
        <Candidate {...item} key={item._id} />
      ))}
    </div>
  );
};

export default CandidateList;
