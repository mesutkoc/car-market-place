import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    basket: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            state.basket = action.payload
        }
    }
});

export const { addItemToBasket } = basketSlice.actions;

export default basketSlice.reducer;