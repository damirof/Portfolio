import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice'; 
import wishlistSlice from '../features/wishlistSlice'; 

export const store = configureStore({
    reducer: {
        products: productSlice,  
        wishlist: wishlistSlice
    },
});
