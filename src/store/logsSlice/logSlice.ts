import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  isActive: boolean;
  showSignIn: boolean;
}

const initialState: AppState = {
  isActive: false,
  showSignIn: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActive: (state) => {
      state.isActive = true;
    },
    toggleBack: (state) => {
      state.isActive = false;
    },
    closeSignIn: (state) => {
      state.showSignIn = false;
    },
    toggleSignIn: (state) => {
      state.showSignIn = !state.showSignIn;
    },
  },
});

export const { setActive, toggleBack, closeSignIn, toggleSignIn } =
  appSlice.actions;

export default appSlice.reducer;
