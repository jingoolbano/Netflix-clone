import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full h-full text-white">
        <img
          className="w-full h-[450px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/42ea8793-7b9b-4ac5-9676-5042e39c0029/US-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-[550px] "></div>
        <div className="absolute top-[20%] p-4 md:p-8 left-[40%]">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
