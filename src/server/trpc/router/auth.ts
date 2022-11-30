import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message because you are authorised!";
  }),
  getNotSecretMessage: publicProcedure.query(() => {
    return "you can see this message without being authorised!";
  }),
});
