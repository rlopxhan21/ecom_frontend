import { createSlice } from "@reduxjs/toolkit";

interface InitialStateDataType {
  cartDrawerState: boolean;
  accountDrawerState: boolean;
  wishlistDrawerState: boolean;
}

const initialState: InitialStateDataType = {
  cartDrawerState: false,
  accountDrawerState: false,
  wishlistDrawerState: false,
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    updateCartDrawerState(state, action) {
      state.cartDrawerState = action.payload;
    },

    updateAccountDrawerState(state, action) {
      state.accountDrawerState = action.payload;
    },

    updateWishlistDrawerState(state, action) {
      state.wishlistDrawerState = action.payload;
    },
  },
});

export const systemActions = systemSlice.actions;
