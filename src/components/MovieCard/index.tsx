import { useState } from "react";
import Image from "next/image";

import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const MovieCard = ({ movie }: { movie: any }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const { userData, addToFavorites, addToWatchLater, setMessage } = useData();

  const { user } = useAuth();

  const handleAddToFavorites = async () => {
    if (!user) {
      console.log("Log in first");
      return;
    }

    await addToFavorites(user.email, [...userData.favorites, movie.id]);
    setMessage("Added to favorites");
  };

  const handleAddToWatchLater = async () => {
    if (!user) {
      console.log("Log in first");
      return;
    }

    await addToWatchLater(user.email, [...userData.watchLater, movie.id]);
    setMessage("Added to watch later");
  };

  return (
    <div className="relative inline-block w-40 cursor-pointer overflow-hidden rounded md:w-48">
      {/* Poster image */}
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
        height="600"
        className="h-full w-full object-cover object-center"
      />

      {/* Poster options */}
      <div className="absolute right-2 top-2">
        <div className="relative z-10 flex justify-center rounded-full border border-slate-50 bg-slate-900 p-1 text-slate-50">
          <div
            className={`${showMoreOptions ? "flex" : "hidden"} z-10 mr-2 gap-2`}
          >
            <button onClick={() => handleAddToFavorites()}>
              <FaRegHeart />
            </button>

            <button onClick={() => handleAddToWatchLater()}>
              <FaRegClock />
            </button>
          </div>

          <button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className=""
          >
            <HiDotsHorizontal />
          </button>
        </div>
      </div>

      {/* Poster title */}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900/50 px-4 text-center text-xl font-bold opacity-0 transition-opacity duration-200 ease-in-out hover:opacity-100">
        <h3 className="whitespace-normal text-slate-50">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
