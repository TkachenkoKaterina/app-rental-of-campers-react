import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalogs } from "./operations";

const initialState = {
  catalogs: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
  page: 1,
  isModalOpen: false,
  selectedItemId: null,
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
    incrementPage: (state) => {
      state.page += 1;
    },
    // selectCatalogItem: (state, action) => {
    //   state.selectedItemId = action.payload;
    // },
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedItemId = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedItemId = null;
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

export const {
  selectCatalogItem,
  updateFilter,
  incrementPage,
  openModal,
  closeModal,
} = catalogsSlice.actions;
export const catalogsReducer = catalogsSlice.reducer;
