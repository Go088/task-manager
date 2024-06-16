import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./operations";

const initialState = {
  user: null,
  theme: "dark",
  token: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setUser, setTheme } = userSlice.actions;

export default userSlice.reducer;
