import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSave(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt={item?.title}
        className="w-full h-auto block"
      />
      <div className="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100   text-white hover:bg-black/80">
        <h1 className="font-bold flex justify-center items-center h-full ">
          {item?.title}
        </h1>
        <p className="absolute top-4 left-4" onClick={saveShow}>
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
      ;
    </div>
  );
};

export default Movie;
