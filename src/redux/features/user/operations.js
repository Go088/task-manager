import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put("/users/edit", userData);

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

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editUserAvatar = createAsyncThunk(
  "user/editUserAvatar",
  async (photo, thunkAPI) => {
    try {
      const response = await axios.put("/users/edit-avatar", photo, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const refreshUser = createAsyncThunk(
  "user/refreshUser",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.get("/users/info");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
