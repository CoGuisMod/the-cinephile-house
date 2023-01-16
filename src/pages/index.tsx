import { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";
import getRandonNumber from "../utils/getRandomIndex";

import LoadingScreen from "../components/LoadingScreen";
import HeroSection from "../components/HeroSection";
import MoviesSlider from "../components/MoviesSlider";

const Home: NextPage = () => {
  const [randomMovie, setRandomMovie] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

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
