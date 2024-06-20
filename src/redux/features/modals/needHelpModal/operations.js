import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

export const helpComment = createAsyncThunk(
  "help/helpComment",
  async (newComment, thunkAPI) => {
    try {
      const response = await axios.post("/need-help", newComment);
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
