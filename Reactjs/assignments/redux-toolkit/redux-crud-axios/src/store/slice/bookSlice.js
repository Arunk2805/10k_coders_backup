import {createSlice} from '@reduxjs/toolkit'
import { defaultState } from './defaultState'

export const bookSlice = createSlice({
  name:"books",
  initialState:defaultState,
  reducers:{
    addBookAction: (state,action)=>{
      state.books.push(action.payload)
    },
    deleteBookAction: (state,action)=>{
      state.books = state.books.filter((book)=> book.id !== action.payload.id)
    },
    updateBookAction:(state,action)=>{
      state.books.forEach((book,i)=>{
        if(book.id === action.payload.id){
          state.books[i] = action.payload
        }
      })
    }
  }
})

export default bookSlice.reducer
export const {addBookAction,deleteBookAction,updateBookAction}= bookSlice.actions