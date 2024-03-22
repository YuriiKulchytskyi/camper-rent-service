// https: //dda90f8246ba4dd880e783a7fa64b647.api.mockbin.io/

import {
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios, {
} from "axios";

axios.defaults.baseURL = 'https://dda90f8246ba4dd880e783a7fa64b647.api.mockbin.io/'


export const fetchAdverts = createAsyncThunk(
  '/adverts/getAllA',
  async (_, thunkAPI) => {
    try {
      const response = axios.get('/adverts');
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }

)
