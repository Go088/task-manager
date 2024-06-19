import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put("/users/edit", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserAvatar = createAsyncThunk(
  "user/getUserAvatar",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/avatar");
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editUserAvatar = createAsyncThunk(
  "user/editUserAvatar",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.put("/users/edit-avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
