import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    basket: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    totalPrice: 0,
    reducers: {
        addItemToBasket: (state, action) => {
            state.basket = action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    }
});

export const { addItemToBasket, setTotalPrice } = basketSlice.actions;

export default basketSlice.reducer;