import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import axiosSecure from "@/hook/useAxios";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  images: string[];
  selectedSize: string | number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
 
  const res = await axiosSecure.get("/cart/get");
  return res.data.items || [];
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = action.payload;
      const existing = state.items.find(
        (i) => i.id === item.id && i.selectedSize === item.selectedSize
      );

      if (existing) existing.quantity += 1;
      else state.items.push({ ...item, quantity: 1 });

      state.totalAmount = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    },

    removeFromCart: (state, action: PayloadAction<{ id: string; selectedSize: string | number }>) => {
      state.items = state.items.filter(
        (i) => !(i.id === action.payload.id && i.selectedSize === action.payload.selectedSize)
      );
      state.totalAmount = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.totalAmount = action.payload.reduce((acc, i) => acc + i.price * i.quantity, 0);
    });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
