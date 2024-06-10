import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (newUser, thunAPI) => {
    try {
      const response = await axios.post("/users/register", newUser);
      //   setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userData);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);
    const response = await axios.get("/users/info");
    console.log(response.data);
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      return token !== null;
    },
  }
);
