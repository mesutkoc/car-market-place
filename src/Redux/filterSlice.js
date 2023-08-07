import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PROJECT_CONSTANTS from '../constants';
import { getFilters } from '../Helper';


export const fetchFilters = createAsyncThunk('filter/fetchFilters', () => {
    return axios.get(`${PROJECT_CONSTANTS.productAPI}`).then((response) => response.data);
})



const initialState = {
    loading: false,
    brandFilters: [],
    modelFilters: []
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilters.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.loading = false;
            state.brandFilters = getFilters(action.payload, 'brand')
            state.modelFilters = getFilters(action.payload, 'model')
            state.error = '';
        })
    }
});

export const { } = filterSlice.actions;

export default filterSlice.reducer;