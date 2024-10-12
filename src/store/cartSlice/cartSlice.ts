import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export interface cartState {
  total: number;
  cart: CartItem[];
  quantity: number;
}

const initialState: cartState = {
  cart: [],
  total: 0,
  quantity: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
      state.total += 1;
      console.log("trying cart, 1 2 ");
      console.log(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state) => {
      state.quantity++;
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 0) {
        state.quantity--;
      } else {
        return;
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
