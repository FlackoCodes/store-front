import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export interface cartState {
  total: number;
  cart: CartItem[];
  quantity: number;
}

const initialState: cartState = {
  cart: [],
  total: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total += 1;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.total--;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
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