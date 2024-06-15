import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = "https://task-manager-r8dz.onrender.com/api";

// const setAuthHeader = (token) => {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   };
  
//   const clearAuthHeader = () => {
//     axios.defaults.headers.common["Autorization"] = "";
//   };

export const fetchBoard = createAsyncThunk(
    'board/fetchAll',
    async (_, thunkAPI) => {
    try {
        const res = await axios.get('/getBoards');
        console.log({res});
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    }
);

export const addBoard = createAsyncThunk(
    'board/addBoard',
    async (data, thunkAPI) => {
    try {
console.log({data});
        const response = await axios.post('/board',  data );
console.log({response});
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
);

export const deleteBoard = createAsyncThunk(
    'board/deleteBoard',
    async (Id, thunkAPI) => {
    try {
        const response = await axios.delete(`/deleteBoard/${Id}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editBoard = createAsyncThunk(
    'board/editBoard',
    async (_id, data,thunkAPI) => {
    try {
        console.log({_id});
        const response = await axios.put(`/board/${_id}`,{data});
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);