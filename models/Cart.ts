import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    cartId: { type: String, required: true, unique: true },
    userId: { type: String, default: null },
    items: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        size: { type: String },
        images: { type: [String], default: [] },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
