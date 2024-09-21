// src/features/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    createProduct: (state, action) => {
      const newProduct = {
        id: uuidv4(),
        username: action.payload.username,
        appname: action.payload.appname,
        org: action.payload.org,
        logo: action.payload.logo, // Assurez-vous que le logo est bien un chemin vers le fichier uploadé
        userId: action.payload.userId,
      };
      state.push(newProduct);
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    },
    editProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload.updatedProduct,
        };
      }
    },
  },
});

export const { createProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;

