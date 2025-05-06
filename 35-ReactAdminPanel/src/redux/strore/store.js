import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';
import wishlistSlice from '../features/wishlistSlice';
import basketSlice from '../features/basketSlice';
import detailSlice from '../features/detailSlice';

export const store = configureStore({
    reducer: {
        products: productSlice,
        wishlist: wishlistSlice,
        basket: basketSlice,
        detail: detailSlice,
    },
});
