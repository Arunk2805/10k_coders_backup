import {createSlice} from '@reduxjs/toolkit'
import { defaultState } from './defaultState'

export const userSlice = createSlice({
  name:"users",
  initialState:defaultState,
  reducers:{
    addUserAction: (state,action)=>{
      state.users.push(action.payload)
    },
    deleteUserAction : (state,action)=>{
     
     console.log(action)
    state.users = state.users.filter((user)=> user.id !== action.payload.id)
     
    },
    updateUserAction : (state,action)=>{
      state.users.forEach((user,i)=>{
        if(user.id === action.payload.id){
          state.users[i] = action.payload
        }
      })
    }
  }
})
console.log(userSlice.actions)
export default userSlice.reducer
export  const {addUserAction,deleteUserAction,updateUserAction} = userSlice.actions