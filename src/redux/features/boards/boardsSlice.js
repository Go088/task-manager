import { createSlice } from "@reduxjs/toolkit";

import {addBoard,deleteBoard,fetchBoard} from "./operations.js"




const boardSlice= createSlice({
    name:"boards",
    initialState:{
        items:[],
        isLoading:false,
        error:null
    },

extraReducers:(builder)=>{
    builder

    .addCase(fetchBoard.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(fetchBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })

    .addCase(addBoard.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
    })
    .addCase(addBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })

    .addCase(deleteBoard.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
        (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
    })
    .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
}});





export default boardSlice.reducer;