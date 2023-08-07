import { configureStore } from '@reduxjs/toolkit';
import products from './productSlice';
import filters from './filterSlice';

export const store = configureStore({
    reducer: {
        products, filters
    },
});