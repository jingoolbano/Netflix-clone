import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 z-[500] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="rounded text-white pr-4 ">Account</button>
          </Link>
          <button
            onClick={handleLogOut}
            className="rounded  bg-red-600 cursor-pointer px-6 py-2 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="rounded text-white pr-4 ">SIGN IN</button>
          </Link>
          <Link to="/signup">
            <button className="rounded  bg-red-600 cursor-pointer px-6 py-2 text-white">
              SIGN UP
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
