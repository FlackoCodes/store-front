import { configureStore } from "@reduxjs/toolkit";
import logReducer from "../store/logsSlice/logSlice";

export const store = configureStore({
  reducer: {
    log: logReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
