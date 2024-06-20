import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { ThemeTypes } from "../../../themeConstants";

axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
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
      // return { ...response.data, theme: ThemeTypes.DARK };
      return {
        user: response.data.user,
        token: response.data.token,
        theme: ThemeTypes.DARK,
      };
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

      console.log(response.data);
      // return response.data;
      return {
        user: response.data.user,
        token: response.data.token,
        theme: response.data.theme,
      };
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
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      const response = await axios.get("/users/info");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
    // const {
    //   auth: { token },
    // } = thunkAPI.getState();
    // setAuthHeader(token);
    // const response = await axios.get("/users/info");

    // return response.data;
    // return { user: response.data.user, theme: response.data.theme }; - пропонується
  }
  // {
  //   condition: (_, { getState }) => {
  //     const {
  //       auth: { token },
  //     } = getState();
  //     return token !== null;
  //   },
  // }
);
