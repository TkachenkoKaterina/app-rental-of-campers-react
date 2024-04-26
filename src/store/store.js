import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalogsSlice";
import { modalReducer } from "./modalSlice";

const rootReducer = combineReducers({
  catalogs: catalogsReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
