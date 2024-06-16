import { createSlice } from "@reduxjs/toolkit";
// import { logOut } from "../author/operations";
import {
  fetchBoardById,
  fetchAllCards,
  addColumn,
  deleteColumn,
  editColumn,
} from "./operations.js";

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
      .addCase(fetchAllCards.rejected, handleRejected)
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns.push(action.payload);
      })
      .addCase(addColumn.rejected, handleRejected)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns = state.board.columns.filter(
          (column) => column._id !== action.payload
        );
      })
      .addCase(deleteColumn.rejected, handleRejected)
      .addCase(editColumn.pending, handlePending)
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        const index = state.board.columns.findIndex(
          (column) => column._id === action.payload._id
        );
        console.log(index);
        state.board.columns[index] = action.payload;
      })
      .addCase(editColumn.rejected, handleRejected);
  },
});
export const { setToast, setContactError } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
