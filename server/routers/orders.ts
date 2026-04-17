import { router, protectedProcedure } from "../_core/trpc";
import { z } from "zod";
import { createOrder, getUserOrders, getOrderById } from "../db";
import { nanoid } from "nanoid";

export const ordersRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        subtotal: z.number(),
        tax: z.number(),
        shipping: z.number(),
        total: z.number(),
        paymentMethod: z.string(),
        shippingAddress: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const orderNumber = `ORD-${nanoid(8).toUpperCase()}`;
      return createOrder(
        ctx.user.id,
        orderNumber,
        input.subtotal,
        input.tax,
        input.shipping,
        input.total,
        input.paymentMethod,
        input.shippingAddress
      );
    }),

  getMyOrders: protectedProcedure.query(async ({ ctx }) => {
    return getUserOrders(ctx.user.id);
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const order = await getOrderById(input.id);
      if (order && order.userId !== ctx.user.id) {
        throw new Error("Unauthorized");
      }
      return order;
    }),
});
