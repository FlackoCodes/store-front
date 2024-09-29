import { configureStore } from "@reduxjs/toolkit";
import logReducer from "../store/logsSlice/logSlice";
import cartReducer from "../store/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    log: logReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
