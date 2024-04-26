import { createSelector } from "@reduxjs/toolkit";

export const selectCatalogs = (state) => state.catalogs.catalogs.items;

export const selectIsLoading = (state) => state.catalogs.catalogs.isLoading;

export const selectError = (state) => state.catalogs.catalogs.error;

export const selectFilter = (state) => state.catalogs.filter;

export const selectPage = (state) => state.catalogs.page;

export const selectIsOpen = (state) => state.modal.isOpen;

export const selectSelectedCatalogItemId = (state) =>
  state.modal.selectedItemId;

export const selectselectedCard = (state) => state.modal.selectedCard;

export const selectFavorites = (state) => state.favorites.favorites;

export const selectFilteredCatalogs = createSelector(
  [selectCatalogs, selectFilter],
  (catalogs, filter) => {
    return catalogs.filter((card) =>
      card.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
