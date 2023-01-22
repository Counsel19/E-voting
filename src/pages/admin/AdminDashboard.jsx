import React from "react";
import AdminTop from "../../components/admin/AdminTop";
import Buttons from "../../components/admin/Buttons";
import Cards from "../../components/admin/Cards";
import Card from "../../components/admin/Card";
import LeadingVotes from "../../components/admin/LeadingVotes";
import VotingActivity from "../../components/admin/VotingActivity";

const AdminDashboard = () => {
  return (
    <div className="flex-grow text-gray-800">
      <main className="sm:p-6  gap-4">
        <div className="col-span-3 ">
          <AdminTop />
          <Cards />
          <div className="flex flex-col gap-6 ">
            <Buttons />
            <LeadingVotes />
          </div>
        </div>
       
      </main>
    </div>
  );
};

export default AdminDashboard;
