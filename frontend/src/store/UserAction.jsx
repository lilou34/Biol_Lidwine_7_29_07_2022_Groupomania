import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { appendErrors } from 'react-hook-form';

export const loginUser = createAsyncThunk(
    `${import.meta.env.VITE_URL_BACK}/auth/login`,
    async ({ email, password }, { rejectWithValue }) => {
        try {
          ///configurer le type de contenu de l’en-tête comme JSON///
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
          /// stocker le jeton de l’utilisateur dans le stockage local///
          localStorage.setItem('token', data.token)
          return data
        } catch (errors) {
          /// retourner un message d’erreur personnalisé de l’API, le cas échéant///
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
        localStorage.setItem('token', data.token)
          
    } catch (errors) {
        
        if (errors.response && errors.response.data.message) {
          return rejectWithValue(errors.response.data.message)
        } else {
          return rejectWithValue(errors.message)
        }
      }
    }
);
  
  export const getUser = createAsyncThunk(
    `${import.meta.env.VITE_URL_BACK}/auth/user`,
    async (arg, { getState, rejectWithValue }) => {
      try {
        // get user data from store
        const { user } = getState()
        // configure authorization header with user's token
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
        const { data } = await axios.get(`${import.meta.env.VITE_URL_BACK}/api/user`, config)
        console.log(data);
        return data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  );

  export const getUsers = createAsyncThunk(
    `${import.meta.env.VITE_URL_BACK}/auth/users`,
    async (arg, { getState, rejectWithValue }) => {
      try {
        // get user data from store
        const { users } = getState()
        // configure authorization header with user's token
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
        const { data } = await axios.get(`${import.meta.env.VITE_URL_BACK}/api/users`, config)
        console.log(data);
        return data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  );