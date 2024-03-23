// https: //dda90f8246ba4dd880e783a7fa64b647.api.mockbin.io/

import {
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios, {} from "axios";

axios.defaults.baseURL = 'https://dda90f8246ba4dd880e783a7fa64b647.api.mockbin.io/'


export const fetchAdverts = createAsyncThunk(
  'advert/fetchAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }

)


export const getAdvertById = createAsyncThunk(
  'adverts/getAdvertById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

