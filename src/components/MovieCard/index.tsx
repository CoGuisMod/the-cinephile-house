import { useState } from "react";
import { FaRegBookmark, FaRegClock, FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

type movieType = {
  title: string;
  poster_path: string;
};

const MovieCard = ({ movie }: { movie: movieType }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <div className="relative inline-block w-40 cursor-pointer overflow-hidden rounded md:w-48">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute right-2 top-2">
        <div className="relative flex justify-center rounded-full border border-slate-50 bg-slate-900 p-1 text-slate-50">
          <div className={`${showMoreOptions ? "flex" : "hidden"} mr-2 gap-2`}>
            <FaRegBookmark />
            <FaRegClock />
            <FaRegHeart />
          </div>
          <button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className="z-10"
          >
            <HiDotsHorizontal />
          </button>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900/50 px-4 text-center text-xl font-bold opacity-0 transition-opacity duration-200 ease-in-out hover:opacity-100">
        <h3 className="whitespace-normal text-slate-50">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
