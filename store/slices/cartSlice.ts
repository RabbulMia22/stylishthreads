
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
};
interface CartState {
    items: CartItem[];
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

        const cartSlice = createSlice({
            name: "cart",
            initialState,
            reducers: {
                addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
        const item = action.payload;
        const existing = state.items.find(i => i.id === item.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            state.items.push({
            ...item,
            quantity: 1,
            price: Number(item.price) 
            });
        }

        state.totalAmount += Number(item.price);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                const item = state.items[index];
                state.totalAmount -= item.price * item.quantity;
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;