import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

import { env } from "../../../env/server.mjs";

export const movieRouter = createTRPCRouter({
  getMovie: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const movie = await fetch(
        `https://api.themoviedb.org/3/movie/${input.id}?api_key=${env.TMDB_API_KEY}&language=en-US`
      );

      return movie.json();
    }),

  getPopularMovies: publicProcedure.query(async ({}) => {
    const movies = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${env.TMDB_API_KEY}&language=en-US&page=1`
    );

    return movies.json();
  }),

  getUpcomingMovies: publicProcedure.query(async ({}) => {
    const movies = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${env.TMDB_API_KEY}&language=en-US&page=1`
    );

    return movies.json();
  }),

  getTopRatedMovies: publicProcedure.query(async ({}) => {
    const movies = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${env.TMDB_API_KEY}&language=en-US&page=1`
    );

    return movies.json();
  }),
});
