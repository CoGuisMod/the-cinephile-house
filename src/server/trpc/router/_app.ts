import { router } from "../trpc";
import { moviesRouter } from "./movies";

export const appRouter = router({
  movies: moviesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
