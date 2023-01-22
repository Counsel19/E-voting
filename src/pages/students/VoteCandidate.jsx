import React from "react";
import CustomHeader from "../../components/CustomHeader";
import userImg from "../../assets/images/user.png";
import { useAppContext } from "../../context/AppContext";

const VoteCandidate = () => {
  const [loading, setLoading] = useState(false);
  const { addVote } = useAppContext();
  const vote = async () => {
    setLoading(true);
    await addVote();
    setLoading(false);
  };
  return (
    <div>
      <CustomHeader title="Vote" />
      <div className="flex flex-col items-center my-12 justify-center gap-8">
        <img src={userImg} alt="Profile" className="h-32 w-32 rounded-full" />

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="px-1 w-4/5">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold">First Name</span>
                JOhn
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold">Last Name</span>
                James
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold">Department</span>
              Information Technology
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold">Manifesto</span>
            <p className="text-gray-400 text-center">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              officiis repudiandae aut necessitatibus culpa perferendis adipisci
              reprehenderit cumque eligendi omnis?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-4">Number of Votes</h3>

            <div
              onClick={vote}
              className="w-28 h-28 flex items-center justify-center cursor-pointer bg-blue-500 rounded-full"
            >
              <h2 className="text-2xl text-white">90</h2>
            </div>
            <span>Tap to vote</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteCandidate;
