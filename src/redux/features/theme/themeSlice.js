import { createSlice } from "@reduxjs/toolkit";
import { changeTheme, getTheme } from "./operations";
import { ThemeTypes } from "../../../themeConstants";

const initialState = {
  theme: ThemeTypes.DARK,
  loading: false,
  error: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  // reducers: {
  //   setTheme(state, action){
  //     state.theme = action.payload;
  //   }
  // },
  extraReducers: (builder) =>
    builder
      .addCase(changeTheme.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.theme = action.payload.theme;
        state.loading = false;
      })
      .addCase(changeTheme.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getTheme.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getTheme.fulfilled, (state, action) => {
        state.theme = action.payload.theme;
        state.loading = false;
      })
      .addCase(getTheme.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
