import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../stores/store';
import { decode, getToken } from '../helpers/jwt';

const initialState: { signin: boolean } = {
  signin: decode(getToken()) ? true : false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state) => {
      state.signin = true;
    },
    signout: (state) => {
      state.signin = false;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export const selectSignin = (state: RootState) => state.auth.signin;
export default authSlice.reducer;
