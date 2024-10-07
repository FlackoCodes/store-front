import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export interface cartState {
  total: number;
  cart: CartItem[];
}

const initialState: cartState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
      state.total += 1;
      console.log("trying cart, 1 2 ");
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
