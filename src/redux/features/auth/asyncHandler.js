export const asyncHandler = (asyncFunction) => {
    return async (args, thunkAPI) => {
      try {
        return await asyncFunction(args, thunkAPI);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    };
  };