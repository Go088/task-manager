import { createSlice } from "@reduxjs/toolkit";

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
  /*extraReducers: (builder) =>
    builder
      .addCase(helpComment.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(helpComment.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(helpComment.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),*/
});

const needHelpModalReducer = helpSlice.reducer;

export default needHelpModalReducer;
