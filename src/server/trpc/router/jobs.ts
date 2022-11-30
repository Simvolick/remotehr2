import { z } from "zod";

import { router, publicProcedure } from "../trpc";


export const jobsRouter = router({
  jobs: publicProcedure
    .input(z.object({ job: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        jobs: `{jobs: ${input?.job ?? "no jobs"}}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.jobPosting.findMany();
  }),
});

