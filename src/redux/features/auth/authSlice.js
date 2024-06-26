import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logIn, logOut, refreshUser } from "./operations";
import { ThemeTypes } from "../../../themeConstants";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      photo: null,
    },
    token: null,
    loading: false,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.theme = ThemeTypes.DARK;
      })
      .addCase(registerUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })

      .addCase(logIn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.theme = action.payload.theme;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.theme = action.payload.theme;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        if (action.payload?.message === "Not authorized!") {
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
        }
        state.isRefreshing = false;
        state.error = true;
        state.loading = false;
      }),
});

export default authSlice.reducer;
export const { setToken } = authSlice.actions;
