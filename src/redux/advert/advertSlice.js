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
      reducer: {
        updateFavorites(state, action) {
          state.favorites = action.payload;
        },
        addFavorites(state, action) {
          state.favorites.push(action.payload);
        },

        removeFavorites(state, action) {
          state.favorites = state.favorites.filter(
            (camper) => camper.id !== action.payload.id
          );
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
      addToFavorite,
      removeFromFavorite
    } = advertsSlice.actions

    export const advertsReducer = advertsSlice.reducer;
