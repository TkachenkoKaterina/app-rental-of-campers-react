import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ADVERTS_URL = "https://65f1db4f034bdbecc763dfe4.mockapi.io/adverts";

export const fetchCatalogs = createAsyncThunk("catalog/adverts", async () => {
  const { data } = await axios.get(`${ADVERTS_URL}?limit=4`);
  return data;
});

export const fetchCatalogById = createAsyncThunk(
  "catalog/advertsById",
  async (_id) => {
    const { data } = await axios.get(`${ADVERTS_URL}/${_id}`);
    return data;
  }
);

export const fetchSearchValue = createAsyncThunk(
  "catalog/adverts",
  async (searchValue) => {
    if (searchValue) {
      const { data } = await axios.get(
        `${ADVERTS_URL}?location=${searchValue}`
      );
      return data;
    }
    const { data } = await axios.get(`${ADVERTS_URL}`);
    return data;
  }
);
