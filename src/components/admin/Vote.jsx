import ProfileImg from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Vote = ({
  image,
  position,
  candidate,
  student,
  _id,
}) => {
  const { user } = useAppContext();

  return (
    <Link to={user?.role === "user" ? `/user/${_id}` : `/users/${_id}`}>
      <div className="flex gap-4  justify-between items-center bg-white shadow p-2 mb-2">
        <div className="flex gap-2 items-center justify-center">
          <img src={ProfileImg} className="h-10 w-10 rounded object-cover" />

          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-sm text-green-500">Mark James</h2>
            <p className="text-gray-500 text-sm flex gap-2">
              For: <span className="font-semibold">President</span>
            </p>
            <p className="text-gray-500 text-sm flex gap-2">
              By: <span className="font-semibold">James Dominic</span>
            </p>
          </div>
        </div>

        
      </div>
    </Link>
  );
};

export default Vote;
