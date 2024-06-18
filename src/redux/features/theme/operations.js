import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

export const getTheme = createAsyncThunk(
  "theme/getTheme",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/getTheme");
      const theme = response.data.theme;
      toast.success(`Actual theme is ${theme}`, { duration: 1500 });

      return { theme };
    } catch (error) {
      toast.error("Failed to change theme", { duration: 1500 });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  "theme/changeTheme",
  async (newTheme, thunkAPI) => {
    try {
      const response = await axios.patch("/users/theme", { theme: newTheme });
      const data = response.data;
      toast.success(`Theme changed to ${newTheme}`, { duration: 1500 });
      console.log(newTheme, data);
      return { theme: response.data.theme };
    } catch (error) {
      toast.error("Failed to change theme", { duration: 1500 });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
