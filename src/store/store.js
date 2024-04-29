import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalogsSlice";
import { favoritesReducer } from "./favoritesSlice";
import { modalReducer } from "./modalSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["catalogs"],
};

const rootReducer = combineReducers({
  catalogs: catalogsReducer,
  modal: modalReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
