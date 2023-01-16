import { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";
import getRandonNumber from "../utils/getRandomIndex";

import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";

import LoadingScreen from "../components/LoadingScreen";
import HeroSection from "../components/HeroSection";
import MoviesSlider from "../components/MoviesSlider";

const Home: NextPage = () => {
  const [randomMovie, setRandomMovie] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();
  const { getUserData, updateData, message } = useData();

  const popularMovies = api.movie.getPopularMovies.useQuery().data;
  const upcomingMovies = api.movie.getUpcomingMovies.useQuery().data;
  const topRatedMovies = api.movie.getTopRatedMovies.useQuery().data;

  useEffect(() => {
    const getRandomMovie = () => {
      const randomIndex = getRandonNumber(0, 20);

      setRandomMovie(popularMovies.results[randomIndex]);
    };

    if (popularMovies?.results) {
      getRandomMovie();
    }
  }, [popularMovies?.results]);

  useEffect(() => {
    const getUser = async () => {
      await getUserData(user.email);
    };

    if (user) {
      getUser();
    }
  }, [user, updateData]);

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

      {/* Content */}
      <main>
        {/* Loading screen */}
        {isLoading ? <LoadingScreen /> : null}

        {/* Message card */}
        {message ? (
          <div className="fixed left-1/2 top-4 z-20 -translate-x-1/2 rounded-md bg-green-400 px-2 py-1 font-medium text-black">
            {message}
          </div>
        ) : null}

        {/* Hero section */}
        <HeroSection
          movie={randomMovie}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />

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
