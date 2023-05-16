import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { systemSlice } from "./systemSlice";

export const redux = configureStore({
  reducer: {
    auth: authSlice.reducer,
    system: systemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof redux.getState>;
