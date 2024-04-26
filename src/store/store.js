import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalogsSlice";
import { favoritesReducer } from "./favoritesSlice";
import { modalReducer } from "./modalSlice";

const rootReducer = combineReducers({
  catalogs: catalogsReducer,
  modal: modalReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
