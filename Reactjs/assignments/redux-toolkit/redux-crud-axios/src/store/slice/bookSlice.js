import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios";

export const getDataFromServer = createAsyncThunk(
  "books/getDataFromServer",
  async () => {
    let response = await axios.get("http://localhost:3002/book/");
    return response.data;
  }
);

export const deleteDataInServer = createAsyncThunk("book/deleteDataInServer", async(book)=>{
  let resp = await axios.delete("http://localhost:3002/book/"+book.id)
  let response = await axios.get("http://localhost:3002/book/")
  return response.data
})

export const updateDataInServer = createAsyncThunk("books/updateDataInServer",async(book)=>{
  let resp = await axios.put("http://localhost:3002/book/"+book.id,book)
  let response = await axios.get("http://localhost:3002/book/")
  return response.data
})

export const addDataToServer = createAsyncThunk("books/addDataToServer",async(book)=>{
  let res = await axios.post("http://localhost:3002/book/",book)
  let response = await axios.get("http://localhost:3002/book/")
  return response.data
})
export const bookSlice = createSlice({
  name: "books",
  initialState: defaultState,
  reducers: {
    addBookAction: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBookAction: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
    updateBookAction: (state, action) => {
      state.books.forEach((book, i) => {
        if (book.id === action.payload.id) {
          state.books[i] = action.payload;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataFromServer.fulfilled, (state, action) => {
      // console.log(action)
      state.books = action.payload;
    });
    builder.addCase(deleteDataInServer.fulfilled,(state,action)=>{
      state.books = action.payload
    })
    builder.addCase(updateDataInServer.fulfilled,(state,action)=>{
      state.books = action.payload
    })
    builder.addCase(addDataToServer.fulfilled,(state,action)=>{
      state.books = action.payload
    })
  },
});

export default bookSlice.reducer;
export const { addBookAction, deleteBookAction, updateBookAction } =
  bookSlice.actions;
