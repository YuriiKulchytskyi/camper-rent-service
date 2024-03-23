import {
  configureStore
} from "@reduxjs/toolkit";
import { advertsReducer } from "./advert/advertSlice";
import { filterReducer } from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
  }
})


export default store;