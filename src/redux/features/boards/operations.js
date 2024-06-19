import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

export const fetchBoard = createAsyncThunk(
  "board/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/getBoards");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  "board/addBoard",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/board", data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "board/deleteBoard",
  async (Id, thunkAPI) => {
    try {
      await axios.delete(`/deleteBoard/${Id}`);
      return Id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  "board/editBoard",
  async ({ _id, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/editBoard/${_id}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
