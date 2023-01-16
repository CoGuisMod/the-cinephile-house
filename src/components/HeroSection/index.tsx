import Image from "next/image";

import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { FaRegClock, FaRegHeart } from "react-icons/fa";

const HeroSection = ({
  movie,
  isLoading,
  setIsLoading,
}: {
  movie: any;
  isLoading: boolean;
  setIsLoading: any;
}) => {
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
    <section className="relative h-screen w-full">
      {/* Hero background image */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=""
        width="1920"
        height="1080"
        onLoadingComplete={() => setIsLoading(false)}
        className="h-full w-full object-cover object-center"
      />

      {/* Hero text */}
      <div className="absolute left-0 top-0 mx-auto flex h-full w-full max-w-7xl items-center justify-start bg-gradient-to-r from-black/75 px-4 md:px-20">
        <div className="max-w-md text-neutral-50">
          <h1 className="text-4xl font-bold md:text-5xl">{movie?.title} </h1>

          <div className="py-2" />

          <p className="font-medium">
            TMDB Rating:{" "}
            <span className="rounded-md bg-neutral-50 px-2 py-1 text-sm text-black">
              {movie?.vote_average}&#47;10
            </span>
          </p>

          <div className="py-4" />

          <div className="flex gap-2">
            <button
              onClick={() => handleAddToFavorites()}
              className="flex items-center gap-2 rounded bg-slate-50 px-2 py-1 text-xl font-medium text-black"
            >
              <FaRegHeart className="text-lg" />
              Favorites
            </button>

            <button
              onClick={() => handleAddToWatchLater()}
              className="flex items-center gap-2 rounded bg-slate-50/50 px-2 py-1 text-xl font-medium text-black"
            >
              <FaRegClock className="text-lg" />
              Watch Later
            </button>
          </div>

          <div className="py-2" />

          <p className="max-h-40 overflow-scroll scrollbar-hide">
            {movie?.overview}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
