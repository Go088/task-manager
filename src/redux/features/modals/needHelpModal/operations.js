import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

export const helpComment = createAsyncThunk(
  "help/helpComment",
  async (newComment, thunkAPI) => {
    try {
      console.log(newComment);
      const response = await axios.post("/dashboard/need-help", newComment);
      console.log(response.message);
      return response.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
