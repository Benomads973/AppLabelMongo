// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import productReducer from './features/productSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
  },
});
