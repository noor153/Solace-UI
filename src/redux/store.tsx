import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";

const store = () =>
  configureStore({
    reducer: {
      user: userSlice,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
