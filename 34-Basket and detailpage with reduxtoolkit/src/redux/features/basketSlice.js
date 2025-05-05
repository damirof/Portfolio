import { createSlice, } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: []
    },
    reducers: {
        addBasket: (state, action) => {
            let existProduct = state.basket.find((item) => item.id === action.payload.id)
            if (!existProduct) {
                state.basket.push({ ...action.payload, count: 1 });
            }
            else {
                existProduct.count += 1 
            }
        },
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter((item) => item.id !== action.payload);
          }

    },
});

export default basketSlice.reducer;
export const { addBasket ,removeFromBasket} = basketSlice.actions;
