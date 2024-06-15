import { createSlice } from "@reduxjs/toolkit";
// import { logOut } from "../author/operations";
import { fetchBoardById, fetchAllCards } from "./operations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: {},
    cards: [],
    isLoading: false,
    error: null,
    toast: "",
  },
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    setContactError: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardById.pending, handlePending)
      .addCase(fetchBoardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board = action.payload;
      })
      .addCase(fetchBoardById.rejected, handleRejected)
      .addCase(fetchAllCards.pending, handlePending)
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(fetchAllCards.rejected, handleRejected);
  },
});
export const { setToast, setContactError } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
