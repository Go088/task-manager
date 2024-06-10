import { createSlice } from "@reduxjs/toolkit";
import { helpComment } from "./operations";

const helpSlice = createSlice({
  name: "help",
  initialState: {
    user: {
      email: null,
      comment: null,
    },
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(helpComment.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(helpComment.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.email = action.payload.user.email;
        state.user.comment = action.payload.user.comment;
      })
      .addCase(helpComment.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

const needHelpModalReducer = helpSlice.reducer;

export default needHelpModalReducer;
