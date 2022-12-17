import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { appendErrors } from 'react-hook-form';

export const loginUser = createAsyncThunk(
    `${import.meta.env.VITE_URL_BACK}/auth/login`,

    async ({ email, password }, { rejectWithValue }) => {
        try {
          // configure header's Content-Type as JSON
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
    
          const { data } = await axios.post(
            `${import.meta.env.VITE_URL_BACK}/auth/login`,
            { email, password },
            config
          )
    
          // store user's token in local storage
          localStorage.setItem('token', data.token)
    
          return data
        } catch (errors) {
          // return custom error message from API if any
          if (errors.response && errors.response.data.message) {
            return rejectWithValue(errors.response.data.message)
          } else {
            return rejectWithValue(errors.message)
          }
        }
      }
);
export const registerUser = createAsyncThunk(
    `${import.meta.env.VITE_URL_BACK}/auth/signup`,
    async ({email, password, pseudo, lastName, firstName, grade }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
  
        await axios.post(
            `${import.meta.env.VITE_URL_BACK}/auth/signup`,
          { email, password, pseudo, lastName, firstName, grade },
          config
        )
    } catch (errors) {
        // return custom error message from API if any
        if (errors.response && errors.response.data.message) {
          return rejectWithValue(errors.response.data.message)
        } else {
          return rejectWithValue(errors.message)
        }
      }
    }
);
  
  export const getUserDetails = createAsyncThunk(
    `${import.meta.env.VITE_URL_BACK}/auth/login`,
    async (arg, { getState, rejectWithValue }) => {
      try {
        // get user data from store
        const { user } = getState()
  
        // configure authorization header with user's token
        const config = {
          headers: {
            Authorization: `Bearer ${user.userToken}`,
          },
        }
  
        const { data } = await axios.get(`${import.meta.env.VITE_URL_BACK}/api/user/profile`, config)
        return data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )