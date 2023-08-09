import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PROJECT_CONSTANTS } from '../constants';
import { getFilters } from '../Helper';


export const fetchFilters = createAsyncThunk('filter/fetchFilters', () => {
    return axios.get(`${PROJECT_CONSTANTS.productAPI}`).then((response) => response.data);
})


const initialState = {
    loading: false,
    brandFilters: [],
    modelFilters: [],
    selectedFilters: { Brand: [], Model: [], Sort: [] },
    searchTerm: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.selectedFilters = action.payload;
        },
        setModelFilter: (state, action) => {
            state.modelFilters = getFilters(action.payload, 'model')
        },
        setBrandFilter: (state, action) => {
            state.brandFilters = getFilters(action.payload, 'brand')
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
});

export const { setFilters, setModelFilter, setBrandFilter, setSearchTerm } = filterSlice.actions;

export default filterSlice.reducer;