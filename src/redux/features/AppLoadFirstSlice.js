import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const SetAppFirstLoad = createAsyncThunk('SetAppLoadFirst', params => {
  console.log('apploadfirst async thunk:', params);
  return params;
});

const AppLoadFirstSlice = createSlice({
  name: 'AppLoadFirst',
  initialState: {AppLoadFirstTime: true},
  extraReducers: builder => {
    builder.addCase(SetAppFirstLoad.fulfilled, (state, action) => {
      console.log('Extra reducer 13:', action.payload);
      state.AppLoadFirstTime = action.payload;
    });
  },
});

export default AppLoadFirstSlice.reducer;
