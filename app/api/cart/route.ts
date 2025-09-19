import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import Cart from "@/models/Cart";
import { dbConnect } from "@/lib/db";


export async function POST() {
  await dbConnect();

  const cartId = uuidv4();
  await Cart.create({ cartId, items: [] });

  const res = NextResponse.json({ cartId });
  res.cookies.set("cartId", cartId, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return res;
}
