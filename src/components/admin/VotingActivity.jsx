import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import Vote from "./Vote";

const votersList = [
  {
    _id: 12,
    candidate: "Mark James",
    position: "President",
    student: "James Fred",
  },
  {
    _id: 13,
    candidate: "Mark James",
    position: "President",
    student: "James Fred",
  },
  {
    _id: 14,
    candidate: "Mark James",
    position: "President",
    student: "James Fred",
  },
];

const VotingActivity = () => {
  const { getVotersList, user } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      if (user && user.role === "admin") {
        await getVotersList();
      }
    };

    getData();
  }, [user]);

  return (
    <div className="bg-white px-1 py-4 font-normal mb-12">
      <h2 className="mb-3 text-sm font-semibold text-gray-600">
        Recent Voting Activity
      </h2>
      {votersList ? (
        votersList.length > 0 ? (
          votersList.map((voter) => <Vote key={voter._id} voter={voter} />)
        ) : (
          <h3>No Voting Activity Yet</h3>
        )
      ) : (
        <TailSpin />
      )}
    </div>
  );
};

export default VotingActivity;
