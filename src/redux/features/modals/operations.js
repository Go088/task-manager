import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
 
axios.defaults.baseURL= "https://task-manager-r8dz.onrender.com/api";

export const helpComment = createAsyncThunk(
  "modals/needHelp",
  async (newComment, thunkAPI) => {
    try {
      const response = await axios.post("/dashboard/need-help", newComment);
      return response.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
