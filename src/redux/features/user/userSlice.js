import { createSlice } from "@reduxjs/toolkit";
import {
  updateUser,
  getUserAvatar,
  editUserAvatar,
  refreshUser,
} from "./operations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
      photo: null,
      theme: "dark",
    },
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setTheme(state, action) {
      state.user.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.photo = action.payload.photo;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.user.photo = action.payload.avatar;
      })
      .addCase(getUserAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUserAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUserAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.user.photo = action.payload.avatar;
      })
      .addCase(editUserAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, setTheme } = userSlice.actions;

export default userSlice.reducer;
