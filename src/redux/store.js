import {
  configureStore
} from "@reduxjs/toolkit";

import {
  combineReducers
} from 'redux';
import advertsReducer from './advertsSlice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
  // Додайте інші редуктори, якщо вони є
});

export default rootReducer;