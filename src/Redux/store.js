import { configureStore } from '@reduxjs/toolkit';
import products from './productSlice';
import filters from './filterSlice';
import basket from './basketSlice';

export const store = configureStore({
    reducer: {
        products, filters, basket
    },
});