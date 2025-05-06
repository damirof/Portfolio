import { createSlice, } from '@reduxjs/toolkit';

const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        detail: {}
    },
    reducers: {
        setDetail: (state, action) => {
            state.detail = action.payload;
        },
    },
});

export default detailSlice.reducer;
export const { setDetail ,addBasket} = detailSlice.actions;
