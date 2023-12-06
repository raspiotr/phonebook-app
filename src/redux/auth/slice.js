import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import Notiflix from 'notiflix';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success(
          'Hooray! You have successfully registered and logged in.',
          {
            position: 'center-top',
            timeout: 5000,
          }
        );
      })
      .addCase(register.rejected, () => {
        Notiflix.Notify.failure(
          'Something went wrong... Registration failed.',
          {
            position: 'center-top',
            timeout: 5000,
          }
        );
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success('Hooray! You are logged in.', {
          position: 'center-top',
          timeout: 5000,
        });
      })
      .addCase(logIn.rejected, () => {
        Notiflix.Notify.failure('Login failed! Wrong email or password.', {
          position: 'center-top',
          timeout: 5000,
        });
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        Notiflix.Notify.info('You have logged out.', {
          position: 'center-top',
          timeout: 5000,
        });
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addDefaultCase(state => {
        state.error = 'State error';
      });
  },
});

export const authReducer = authSlice.reducer;
