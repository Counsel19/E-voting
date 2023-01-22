import React from "react";
import CustomHeader from "../../components/CustomHeader";
import CandidateList from "../../components/student/CandidateList";

const List = () => {
  return (
    <div>
      <CustomHeader title="Candidates" />
      <div className="my-12">
        <CandidateList />
      </div>
    </div>
  );
};

export default List;
