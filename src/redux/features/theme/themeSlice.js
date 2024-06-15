import { createSlice } from "@reduxjs/toolkit";
import { fetchTheme } from "./operations";

const initialState = {
  theme: "dark",
  loading: false,
  error: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchTheme.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTheme.fulfilled, (state, action) => {
        state.theme = action.payload;
        state.loading = false;
      })
      .addCase(fetchTheme.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

// changeTheme(state, action) {
//   state.theme = action.payload;
// },

