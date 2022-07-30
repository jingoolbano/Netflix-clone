import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white p-4 font-bold md:text-xl">{title}</h2>
      <div className="flex items-center relative">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full cursor-pointer opacity-60 hover:opacity-100 absolute z-10 left-0 "
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
        >
          {movies.map((movie, id) => (
            <Movie item={movie} key={id} />
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

export default Row;
