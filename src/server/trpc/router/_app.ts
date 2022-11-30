import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { jobsRouter } from "./jobs";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  jobs: jobsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
