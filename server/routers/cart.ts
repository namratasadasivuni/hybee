import { router, protectedProcedure } from "../_core/trpc";
import { z } from "zod";
import { getCartItems, addCartItem, removeCartItem } from "../db";

export const cartRouter = router({
  getItems: protectedProcedure.query(async ({ ctx }) => {
    return getCartItems(ctx.user.id);
  }),

  addItem: protectedProcedure
    .input(
      z.object({
        productId: z.number(),
        quantity: z.number(),
        size: z.string().optional(),
        color: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return addCartItem(
        ctx.user.id,
        input.productId,
        input.quantity,
        input.size,
        input.color
      );
    }),

  removeItem: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return removeCartItem(input.id);
    }),
});
