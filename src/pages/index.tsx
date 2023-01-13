import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { api } from "../utils/api";

import { FaRegClock, FaRegHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import MoviesSlider from "../components/MoviesSlider";

const Home: NextPage = () => {
  const [randomMovie, setRandomMovie] = useState<any>({});

  const popularMovies = api.movie.getPopularMovies.useQuery().data;
  const upcomingMovies = api.movie.getUpcomingMovies.useQuery().data;
  const topRatedMovies = api.movie.getTopRatedMovies.useQuery().data;

  useEffect(() => {
    const getRandomMovie = () => {
      const min = 0;
      const max = 20;
      const randomIndex = Math.floor(Math.random() * (max - min) + min);

      setRandomMovie(popularMovies.results[randomIndex]);
    };

    if (popularMovies?.results) {
      getRandomMovie();
    }
  }, [popularMovies?.results]);

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
            src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute left-0 top-0 mx-auto flex h-full w-full max-w-7xl items-center justify-start bg-gradient-to-r from-black/75 px-4 md:px-20">
            <div className="max-w-md text-neutral-50">
              <h1 className="text-4xl font-bold md:text-5xl">
                {randomMovie?.title}{" "}
              </h1>

              <div className="py-2" />

              <p className="font-medium">
                TMDB Rating:{" "}
                <span className="rounded-md bg-neutral-50 px-2 py-1 text-sm text-black">
                  {randomMovie?.vote_average}&#47;10
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

              <p className="max-h-40 overflow-scroll scrollbar-hide">
                {randomMovie?.overview}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto min-h-screen w-full max-w-7xl px-4 pt-8">
          <MoviesSlider
            sliderId="popularMovies"
            sliderTitle="Popular movies"
            movies={popularMovies?.results}
          />

          <div className="py-4" />

          <MoviesSlider
            sliderId="upcomingMovies"
            sliderTitle="Upcoming movies"
            movies={upcomingMovies?.results}
          />

          <div className="py-4" />

          <MoviesSlider
            sliderId="topRatedMovies"
            sliderTitle="Top rated movies"
            movies={topRatedMovies?.results}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
