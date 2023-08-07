import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PROJECT_CONSTANTS from '../constants';


export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
    return axios.get(`${PROJECT_CONSTANTS.productAPI}`).then((response) => response.data);
})



const initialState = {
    loading: false,
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload
            state.error = '';
        })
    }
});

export const { } = productSlice.actions;

export default productSlice.reducer;