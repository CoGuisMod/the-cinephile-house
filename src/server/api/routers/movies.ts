import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const movieRouter = createTRPCRouter({
  getMovie: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const movie = await fetch("");
      return movie;
    }),
});
