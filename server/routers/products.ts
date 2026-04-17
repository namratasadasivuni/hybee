import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";
import { getProducts, getProductById } from "../db";

export const productsRouter = router({
  list: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        limit: z.number().optional(),
      })
    )
    .query(async ({ input }) => {
      return getProducts(input.category, input.limit);
    }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return getProductById(input.id);
    }),
});
