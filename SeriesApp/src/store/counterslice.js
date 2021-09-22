import { createSlice } from '@reduxjs/toolkit';

export const reducersPayload = createSlice({
    name: 'reducers',
    initialState: {
      username: "",
      password:"",
      confirm_password:"",
      email:"",
      token:null
    },
    reducers: {
      OnchangeUsername: (state, action) => {
        state.username = action.payload;
      },
      OnchangePassword: (state, action) => {
        state.password = action.payload;
      },
      OnchangeConfirmPassword: (state, action) => {
        state.confirm_password = action.payload;
      },
      OnchangeEmail: (state, action) => {
        state.email = action.payload;
      },
      TokenSet: (state, action) => {
        state.token = action.payload;
      }
    },
})


// Action creators are generated for each case reducer function
export const { OnchangeUsername, OnchangePassword, OnchangeConfirmPassword, OnchangeEmail, TokenSet } = reducersPayload.actions;

export default reducersPayload.reducer;