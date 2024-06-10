
import  axios  from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";




export const logOut = createAsyncThunk("auth/logout", async (thunkAPI) => {
    try {
        console.log("#");
        await axios.post("#") 
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
} )