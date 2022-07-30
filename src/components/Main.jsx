import axios from "axios";
import React, { useEffect, useState } from "react";
import requesets from "../requests";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requesets.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  //console.log(movies);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full  ">
        <div className="absolute w-full h-[550px] top-0 left-0 bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl  font-bold">{movie?.title}</h1>
          <div className="my-5">
            <button className="border bg-gray-300 border-gray-300 text-black py-2 px-8 mr-4 hover:bg-gray-400">
              Play
            </button>
            <button className="border border-gray-300 text-white py-2 px-5 hover:bg-gray-300 hover:text-black ">
              Wathch Later
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Release date: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-100 py-2">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
