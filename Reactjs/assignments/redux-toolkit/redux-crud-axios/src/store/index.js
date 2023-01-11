
import {configureStore} from '@reduxjs/toolkit'
import bookSlice from './slice/bookSlice'

export const store = configureStore({
  reducer:{
    books :bookSlice
  }
})