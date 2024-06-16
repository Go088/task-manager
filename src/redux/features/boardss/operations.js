import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBoardById = createAsyncThunk(
  "board/fetchboard",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/getBoard/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCards = createAsyncThunk(
  "board/fetchCards",
  async (text, thunkAPI) => {
    try {
      const response = await axios.get("/getCards");

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "board/addColumn",
  async (data, thunkAPI) => {
    try {
      console.log({ data });
      const response = await axios.post(`/board/${data.id}/column`, data.data);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
