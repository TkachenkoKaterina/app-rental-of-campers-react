import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ADVERTS_URL = "https://65f1db4f034bdbecc763dfe4.mockapi.io/adverts";

export const fetchCatalogs = createAsyncThunk(
  "catalog/adverts",
  async (page) => {
    const { data } = await axios.get(`${ADVERTS_URL}?page=${page}&limit=4`);
    return data;
  }
);
