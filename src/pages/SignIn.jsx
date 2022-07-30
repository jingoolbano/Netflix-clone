import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="w-full h-full hidden sm:block absolute object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/42ea8793-7b9b-4ac5-9676-5042e39c0029/US-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="absolute top-0 left-0  w-full h-full  bg-black/60"></div>
      <div className="w-full px-4 py-24 fixed z-[100]">
        <div className="max-w-[450px] h-[500px] bg-black/75 text-white mx-auto mb-4">
          <div className="max-w-[320px] mx-auto py-12">
            <h1 className="text-2xl font-bold">Sign In</h1>
            {error ? (
              <p className="text-sm text-red-600 pt-2">{error}</p>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="p-3 my-2 bg-gray-700 rounded opacity-80"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="current-passwoed"
                className="p-3 my-2 bg-gray-700 rounded opacity-80"
                autoComplete="password"
              />
              <button className="bg-red-600 rounded py-3 my-5 font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>
                  <input className="mr-2" type={"checkbox"} /> Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-sm py-8">
                <span className="mr-1 text-gray-500">New to Netflix?</span>
                <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
