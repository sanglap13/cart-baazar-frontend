import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userApi";
import { userReducer } from "./reducer/userReducer";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    //     // [productAPI.reducerPath]: productAPI.reducer,
    //     // [orderApi.reducerPath]: orderApi.reducer,
    //     // [dashboardApi.reducerPath]: dashboardApi.reducer,
    [userReducer.name]: userReducer.reducer,
    //     // [cartReducer.name]: cartReducer.reducer,
  },

  middleware: (mid) => [...mid(), userAPI.middleware] as any,
});

export type RootState = ReturnType<typeof store.getState>;
