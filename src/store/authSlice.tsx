import { createSlice } from "@reduxjs/toolkit";

interface InitialDataType {
  token: { access: string; refresh: string } | undefined;
  profileData:
    | {
        full_name: string;
        email: string;
        last_login: string;
        is_staff: string;
        is_superuser: string;
      }
    | undefined;
}

const initialState: InitialDataType = {
  token: localStorage.getItem("ecom_token")
    ? JSON.parse(localStorage.getItem("ecom_token")!)
    : undefined,
  profileData: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("ecom_token", JSON.stringify(action.payload));
    },

    deleteToken(state) {
      state.token = undefined;
      localStorage.removeItem("ecom_token");
    },

    updateProfileData(state, action) {
      state.profileData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
