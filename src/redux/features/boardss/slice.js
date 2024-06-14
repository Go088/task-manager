import { createSlice } from "@reduxjs/toolkit";
// import { logOut } from "../author/operations";
import {
  fetchBoardById,
  addContact,
  deleteContact,
  editContact,
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
    items: [],
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
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.toast = "add";
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.toast = "del";
      })
      .addCase(deleteContact.rejected, handleRejected)
      // .addCase(logOut.fulfilled, (state) => {
      //   state.items = [];
      //   state.error = null;
      //   state.isLoading = false;
      // })
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.toast = "edit";
        state.isLoading = false;
        state.items = state.items.map((contact) => {
          return contact.id === action.payload.id ? action.payload : contact;
        });
      })
      .addCase(editContact.rejected, handleRejected);
  },
});
export const { setToast, setContactError } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
