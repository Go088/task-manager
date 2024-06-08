/*import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const helpComment = createAsyncThunk(
  "modals/needHelp",
  async (newComment, thunkAPI) => {
    try {
      const response = await axios.post("/needHelp", newComment);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);*/
