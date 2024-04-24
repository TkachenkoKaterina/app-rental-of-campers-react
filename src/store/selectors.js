import { createSelector } from "@reduxjs/toolkit";

export const selectCatalogs = (state) => state.catalogs.items;

export const selectIsLoading = (state) => state.catalogs.isLoading;

export const selectError = (state) => state.catalogs.error;

export const selectFilter = (state) => state.filter;

export const selectFilteredCatalogs = createSelector(
  [selectCatalogs, selectFilter],
  (catalogs, filter) => {
    return catalogs.filter((card) =>
      card.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
