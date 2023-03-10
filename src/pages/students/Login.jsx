import React from "react";
import { useState } from "react";
import FUTOLogo from "../../assets/images/FUTO_logo.png";
import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { login } = useAppContext();

  const handleLogin = async () => {
    e.preventDefault();
    setLoading(true);
    const user = await login({ regNum: input });

    if (user && user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/students");
    }
    setLoading(false);
  };

  return (
    <div className="w-full lg:max-w-lg mx-auto h-screen flex flex-col gap-10 items-center justify-center">
      <img src={FUTOLogo} alt="FUTO Logo" className="h-20 w-20" />
      <form onSubmit={handleLogin} className="flex flex-col gap-6 ">
        <div className="flex flex-col border-b-2">
          <label className="text-xs">Reg No.</label>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="outline-none  h-8"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="flex gap-3 mt-6 w-full disabled:bg-blue-300  justify-center py-2 rounded-md border border-transparent bg-blue-600 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
          {loading && <TailSpin width={20} height={20} />}
        </button>

        <p>
          Are you an admin?{" "}
          <Link to="/login-admin" className="text-blue-500">
            Admin Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
