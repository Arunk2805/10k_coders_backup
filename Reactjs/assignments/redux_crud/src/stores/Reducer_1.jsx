import { combineReducers} from "redux";
import { ADD_CREATOR, DELETE_CREATOR } from "./Action_Types";


const defaultstate = {
  creators: [
    { fname: "Murali", lname: "Krishna", email: "vmurali@gmail.com" },
    { fname: "Ravi", lname: "Kumar", email: "ravi@gmail.com" },
    { fname: "Sam", lname: "Krishna", email: "sam@gmail.com" },
  ],
};

export const creatorsReducer = (state = defaultstate, action) => {
  switch (action.type) {
    case ADD_CREATOR:
      let newcreator = [...state] ;
      newcreator.push(action.payload);
      return newcreator;
    case DELETE_CREATOR:
      return state.filter((creator) => creator.email !== action.payload.email);

    default:
      return state.creators;
  }
}
 export const rootReducer= combineReducers({
    creators:creatorsReducer
 })
