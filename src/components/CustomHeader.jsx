import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const CustomHeader = ({ title }) => {
  const navigate = useNavigate();
  const { logout } = useAppContext();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center pb-2 py-8 px-6 text-white bg-blue-500">
      <span className="bg-white rounded-full p-2">
        <IoIosArrowBack
          onClick={() => navigate(-1)}
          size={25}
          className="text-gray-500 cursor-pointer"
        />
      </span>

      <h3 className="font-semibold">{title}</h3>
      <span
        onClick={handleLogout}
        className="p-2 text-rose-600 cursor-pointer"
      >
        Log out
      </span>
    </div>
  );
};

export default CustomHeader;
