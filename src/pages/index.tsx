import { type NextPage } from "next";
import Head from "next/head";

import { useEffect, useState } from "react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const movieList = trpc.movies.popularMovies.useQuery().data?.results;

  useEffect(() => {
    if (movieList) {
      const min = 0;
      const max = 20;
      const randomId = Math.floor(Math.random() * (max - min) + min);

      movieList.map((movie: any, index: number) => {
        if (index === randomId) {
          setMovie(movie);
          setIsLoading(false);
        }
      });
    }
  }, [movieList]);

  console.log(movie);

  return (
    <>
      <Head>
        <title>The Cinephile House</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h1>Working</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
