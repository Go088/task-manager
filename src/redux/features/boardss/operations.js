import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBoardById = createAsyncThunk(
  "board/fetcboard",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/getBoard/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", text);

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contact[0]}`, contact[1]);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
