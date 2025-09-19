import { NextResponse } from "next/server";
import Cart from "@/models/Cart";
import { v4 as uuidv4 } from "uuid";
import { dbConnect } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { productId, quantity = 1, size, image } = await req.json();

    if (!productId || quantity < 1) {
      return NextResponse.json(
        { error: "ProductId and quantity are required" },
        { status: 400 }
      );
    }

    // Prepare cart item
    const cartItem: any = { productId, quantity, size };
    if (image) cartItem.images = [image];

    // Get cartId and userId from cookies
    const cookies = (req as any).cookies;
    let cartId = cookies?.get?.("cartId")?.value;
    let userId = cookies?.get?.("userId")?.value;

    // Generate userId if it doesn’t exist
    if (!userId) userId = uuidv4();

    let cart;

    if (cartId) {
      // Find existing cart
      cart = await Cart.findOne({ cartId });
      if (!cart) {
        // Invalid cartId → create new cart
        cartId = uuidv4();
        cart = await Cart.create({ cartId, userId, items: [cartItem] });
      } else {
        // Add or update item
        const existingItem = cart.items.find(
          (item: any) => item.productId === productId && item.size === size
        );
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          cart.items.push(cartItem);
        }
        await cart.save();
      }
    } else {
      // No cartId → create new cart
      cartId = uuidv4();
      cart = await Cart.create({ cartId, userId, items: [cartItem] });
    }

    // Set cookies to persist cart and user
    const response = NextResponse.json(cart, { status: 200 });
    response.cookies.set("cartId", cartId, { path: "/", httpOnly: true, sameSite: "lax" });
    response.cookies.set("userId", userId, { path: "/", httpOnly: true, sameSite: "lax" });

    return response;
  } catch (error: any) {
    console.error("❌ Error in /cart/add:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
