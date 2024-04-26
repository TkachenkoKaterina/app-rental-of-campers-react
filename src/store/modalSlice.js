import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalogById } from "./operations";

const initialState = {
  isOpen: false,
  selectedItemId: null,
  selectedCard: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedItemId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedItemId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogById.pending, handlePending)
      .addCase(fetchCatalogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedCard = action.payload;
      })
      .addCase(fetchCatalogById.rejected, handleRejected);
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
