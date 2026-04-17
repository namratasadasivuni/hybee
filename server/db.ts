import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

import { products, cartItems, orders, orderItems, reviews } from "../drizzle/schema";

// Product queries
export async function getProducts(category?: string, limit?: number) {
  const db = await getDb();
  if (!db) return [];

  let query: any = db.select().from(products);
  if (category) {
    query = query.where(eq(products.category, category));
  }
  if (limit) {
    query = query.limit(limit);
  }
  return await query;
}

export async function getProductById(id: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(products)
    .where(eq(products.id, id))
    .limit(1);
  return result.length > 0 ? result[0] : null;
}

// Cart queries
export async function getCartItems(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(cartItems).where(eq(cartItems.userId, userId));
}

export async function addCartItem(
  userId: number,
  productId: number,
  quantity: number,
  size?: string,
  color?: string
) {
  const db = await getDb();
  if (!db) return null;

  return db.insert(cartItems).values({
    userId,
    productId,
    quantity,
    size,
    color,
  });
}

export async function removeCartItem(id: number) {
  const db = await getDb();
  if (!db) return null;

  return db.delete(cartItems).where(eq(cartItems.id, id));
}

// Order queries
export async function createOrder(
  userId: number,
  orderNumber: string,
  subtotal: number,
  tax: number,
  shipping: number,
  total: number,
  paymentMethod: string,
  shippingAddress: string
) {
  const db = await getDb();
  if (!db) return null;

  return db.insert(orders).values({
    userId,
    orderNumber,
    subtotal,
    tax,
    shipping,
    total,
    paymentMethod,
    shippingAddress,
  });
}

export async function getUserOrders(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(orders).where(eq(orders.userId, userId));
}

export async function getOrderById(id: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(orders)
    .where(eq(orders.id, id))
    .limit(1);
  return result.length > 0 ? result[0] : null;
}

// Review queries
export async function getProductReviews(productId: number) {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(reviews).where(eq(reviews.productId, productId));
}

export async function addReview(
  productId: number,
  userId: number,
  rating: number,
  title: string,
  comment?: string
) {
  const db = await getDb();
  if (!db) return null;

  return db.insert(reviews).values({
    productId,
    userId,
    rating,
    title,
    comment,
  });
}
