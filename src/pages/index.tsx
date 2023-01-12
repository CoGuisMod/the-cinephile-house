import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { api } from "../utils/api";

import { FaClock, FaRegClock, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [movie, setMovie] = useState({});

  const movies = api.movie.getPopularMovies.useQuery().data;

  useEffect(() => {
    const getRandomMovie = () => {
      const min = 0;
      const max = 20;
      const randomIndex = Math.floor(Math.random() * (max - min) + min);

      setMovie(movies.results[randomIndex]);
    };

    if (movies?.results) {
      getRandomMovie();
    }
  }, [movies?.results]);

  console.log(movies?.results);

  return (
    <>
      <Head>
        <title>The Cinephile House</title>
        <meta
          name="description"
          content="Discover new movies and shows, makes lists, rate them and share your favorite films."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="relative h-screen w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute left-0 top-0 mx-auto flex h-full w-full max-w-7xl items-center justify-start bg-gradient-to-r from-black/75 px-4 md:px-20">
            <div className="max-w-md text-neutral-50">
              <h1 className="text-5xl font-bold">{movie?.title} </h1>

              <div className="py-2" />

              <p className="font-medium">
                TMDB Rating:{" "}
                <span className="rounded-md bg-neutral-50 px-2 py-1 text-sm text-black">
                  {movie?.vote_average}&#47;10
                </span>
              </p>

              <div className="py-4" />

              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded bg-slate-50 px-2 py-1 text-xl font-medium text-black">
                  <FaRegHeart className="text-lg" />
                  Favorites
                </button>

                <button className="flex items-center gap-2 rounded bg-slate-50/50 px-2 py-1 text-xl font-medium text-black">
                  <FaRegClock className="text-lg" />
                  Watch Later
                </button>
              </div>

              <div className="py-2" />

              <p className="max-h-40 overflow-scroll">{movie?.overview}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
