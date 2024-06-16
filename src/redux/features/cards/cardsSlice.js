import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name : 'cards',
    initialState: {
        items:[],
        loading: false,
        error: null,

    }, 
    // extraReducers: builder => builder.addCase()
})


export default cardSlice.reducer;