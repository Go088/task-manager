import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Autorization"] = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (newUser, thunAPI) => {
    try {
      const response = await axios.post("/users/register", newUser);
      setAuthHeader(response.data.token);
      toast.success(
        `${response.data.name}, your account successfully created!`
      );
      return response.data;
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again");
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
      toast.success(`Your account successfully logged in!`);
      return response.data;
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    clearAuthHeader();
    toast.success(`Your account successfully logged out!`);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Oops! Something went wrong. Please try again");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);
    const response = await axios.get("/users/info");

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
