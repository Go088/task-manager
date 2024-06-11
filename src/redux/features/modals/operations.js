import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const helpComment = createAsyncThunk(
  "modals/needHelp",
  async (newComment, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://task-manager-r8dz.onrender.com/api/dashboard/need-help",
        newComment
      );
      console.log(response.message);
      return response.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
