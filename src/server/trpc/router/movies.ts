import { z } from "zod";

import { router, publicProcedure } from "../trpc";

import { env } from "../../../env/server.mjs";

export const moviesRouter = router({
  singleMovie: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const movie = await fetch(
        `https://api.themoviedb.org/3/movie/${input.id}?api_key=${env.TMDB_API_KEY}&language=en-US`
      );

      return movie.json();
    }),
  popularMovies: publicProcedure.query(async ({ input }) => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${env.TMDB_API_KEY}&language=en-US`
    );

    return movie.json();
  }),
});
