import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export interface cartState {
  cart: CartItem[]; // Specify that cart is an array of CartItem
}

const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Specify the payload type
      state.cart.push(action.payload); // Now TypeScript knows what to expect
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
