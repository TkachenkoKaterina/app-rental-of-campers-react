import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalogs } from "./operations";

const initialState = {
  catalogs: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const handlePending = (state) => {
  state.catalogs.isLoading = true;
};

const handleRejected = (state, action) => {
  state.catalogs.isLoading = false;
  state.catalogs.error = action.payload;
};

export const catalogsSlice = createSlice({
  name: "catalogs",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogs.pending, handlePending)
      .addCase(fetchCatalogs.fulfilled, (state, action) => {
        state.catalogs.isLoading = false;
        state.catalogs.error = null;
        state.catalogs.items = action.payload;
      })
      .addCase(fetchCatalogs.rejected, handleRejected);
  },
});

export const { updateFilter } = catalogsSlice.actions;
export const catalogsReducer = catalogsSlice.reducer;
