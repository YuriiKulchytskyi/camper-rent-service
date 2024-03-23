import {
  createSlice
} from "@reduxjs/toolkit";
import {
  fetchAdverts,
  getAdvertById
} from "./advertOperations";

const advertsSlice = createSlice({
      name: 'adverts',
      initialState: {
        adverts: [],
        isLoading: false,
        error: null,
        favorites: [],
      },
      reducers: {
        addToFavorite(state, action) {
          state.favorites.push(action.payload)
        },
        removeFromFavorite(state, action) {
          const index = state.favorites.findIndex((item) => item.id === action.payload)
          state.favorites.splice(index, 1)
        }
      },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAdvertById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites.push(action.payload);
      })
      .addCase(getAdvertById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })


  }
});

export const {
  addToFavorite, removeFromFavorite
} = advertsSlice.actions

export const advertsReducer = advertsSlice.reducer;
