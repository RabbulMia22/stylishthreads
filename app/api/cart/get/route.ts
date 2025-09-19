import { NextResponse } from "next/server";
import Cart from "@/models/Cart";
import { dbConnect } from "@/lib/db";

export async function GET(req: Request) {
  await dbConnect();

  const cookies = (req as any).cookies;
  const cartId = cookies?.get?.("cartId")?.value;

  if (!cartId) {
    return NextResponse.json({ items: [] });
  }

  const cart = await Cart.findOne({ cartId });
  if (!cart) return NextResponse.json({ items: [] });

  return NextResponse.json(cart);
}
