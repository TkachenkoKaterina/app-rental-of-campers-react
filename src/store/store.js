import { configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalogsSlice";

export const store = configureStore({
  reducer: catalogsReducer,
});
