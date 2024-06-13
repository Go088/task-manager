import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBoard = createAsyncThunk(
    'board/fetchAll',
    async (_, thunkAPI) => {
    try {
        const res = await axios.get('/board');
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
console.log(data);
        // const response = await axios.post('/board', { data });
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
);

export const deleteBoard = createAsyncThunk(
    'board/deleteBoard',
    async (boardId, thunkAPI) => {
    try {
        const response = await axios.delete(`/board/${boardId}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editBoard = createAsyncThunk(
    'board/editBoard',
    async (boardId, thunkAPI) => {
    try {
        const response = await axios.put(`/board/${boardId}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);