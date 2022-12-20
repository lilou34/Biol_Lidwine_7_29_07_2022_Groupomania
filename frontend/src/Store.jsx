import { configureStore } from '@reduxjs/toolkit'
import userReducer from './store/UserSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store;