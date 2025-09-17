"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { clearCart, removeFromCart } from "@/store/slices/cartSlice";

export default function CartPage() {
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-2">
        🛒 Your Cart
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {items.map((item:any) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded object-cover"
                    />
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-gray-500 text-sm">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-gray-700 font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Items:</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Total:</span>
              <span className="font-bold">${totalAmount}</span>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
