import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      filters: filterReducer,
    },
  });
