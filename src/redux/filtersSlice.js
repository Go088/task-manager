import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = slice.actions;

export default slice.reducer;
