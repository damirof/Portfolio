import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'products',
    initialState: {
        wishlist: []
    },
    reducers: {
        updateWishlist: (state, action) => {
        let existProduct =state.wishlist.find((product)=> product.id == action.payload.id )    
        
        {
            existProduct ? state.wishlist = state.wishlist.filter((product)=>product.id != action.payload.id ) : state.wishlist.push(action.payload)
        }
        
        }
    },
});

export default wishlistSlice.reducer;
export const { updateWishlist } = wishlistSlice.actions;
