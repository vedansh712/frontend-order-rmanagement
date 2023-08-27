import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: { auth: authReducer, order: orderReducer },
});
