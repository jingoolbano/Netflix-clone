import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white p-4 font-bold md:text-xl">My Shows</h2>
      <div className="flex items-center relative">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full cursor-pointer opacity-60 hover:opacity-100 absolute z-10 left-0 "
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.img}`}
                alt={item?.title}
                className="w-full h-auto block"
              />
              <div className="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100   text-white hover:bg-black/80">
                <h1 className="font-bold flex justify-center items-center h-full ">
                  {item?.title}
                </h1>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute top-4 left-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
              ;
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white rounded-full cursor-pointer opacity-60 hover:opacity-100 absolute z-10 right-0 "
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default SavedShows;
