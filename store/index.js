// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import wishlistReducer from './slices/wishlistSlice';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(makeStore);
