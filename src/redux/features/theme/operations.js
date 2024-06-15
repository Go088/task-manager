import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import toast from "react-hot-toast";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

export const fetchTheme = createAsyncThunk(
  "users/theme",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/theme");
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const changeTheme = createAsyncThunk(
    "users/theme",
) 