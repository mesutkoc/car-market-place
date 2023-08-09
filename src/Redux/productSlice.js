import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { filterProducts } from '../Helper';
import { PROJECT_CONSTANTS } from '../constants';


export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
    return axios.get(`${PROJECT_CONSTANTS.productAPI}`).then((response) => response.data);
})

const initialState = {
    loading: false,
    products: [],
    filteredProducts: []
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setFilteredProducts: (state, action) => {
            state.filteredProducts = filterProducts(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload
            localStorage.setItem("products", JSON.stringify(state.products));
            state.error = '';
        })
    }
});

export const { setFilteredProducts } = productSlice.actions;

export default productSlice.reducer;