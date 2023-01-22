import React from "react";
import CustomHeader from "../../components/CustomHeader";
import PositionList from "../../components/student/PositionList";

const Home = () => {
  return (
    <div>
      <CustomHeader title="Positions" />
      <div className="my-12">
        <PositionList />
      </div>
    </div>
  );
};

export default Home;
