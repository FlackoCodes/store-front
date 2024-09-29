import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface LogState {
  isActive: boolean;
}

export interface signState {
  showSignIn: boolean;
}

const initialState: LogState = {
  isActive: false,
};

export const activeSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    setActive: (state) => {
      state.isActive = true;
    },
    toggleBack: (state) => {
      state.isActive = false;
    },
  },
});

export const { setActive, toggleBack } = activeSlice.actions;

export default activeSlice.reducer;
