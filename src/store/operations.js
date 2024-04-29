import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ADVERTS_URL = "https://65f1db4f034bdbecc763dfe4.mockapi.io/adverts";

export const fetchCatalogs = createAsyncThunk("catalog/adverts", async () => {
  const { data } = await axios.get(`${ADVERTS_URL}`);
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
    const { data } = await axios.get(`${ADVERTS_URL}?location=${searchValue}`);
    return data;
  }
);

// export const fetchSearchValue = createAsyncThunk(
//   "catalog/adverts",
//   async (searchValue, checkboxValues, radioValue) => {
//     const queryParams = checkboxValues
//       .map((value) => `details[${value}]=true`)
//       .join("&");
//     console.log("queryParams :>> ", queryParams);
//     const url = `${ADVERTS_URL}?location=${searchValue}&form=${radioValue}${queryParams}`;
//     const { data } = await axios.get(url);
//     return data;
//   }
// );
