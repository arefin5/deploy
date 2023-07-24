
import { createContext,useContext, useReducer } from "react";
import { STUDENT_SETUP, USER_SIGNIN, USER_SIGNOUT, USER_SIGNUP } from "../actions/actionTypes";

const UserContext = createContext();
const initialState = {
    user: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")): null,
    token: "",
    student:{},
}


const userReducer = (state,action)=>{
  switch (action.type) {
    case USER_SIGNIN:
      return{
        ...state,
        user:action.payload.user,
        token:action.payload.token
      }
    case USER_SIGNUP:
      return{
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case STUDENT_SETUP:
      return{
        ...state,
        student:action.payload
      }

    case USER_SIGNOUT:
      return{
        ...state,
        user: null,
        token:null,
        student:null
      }
    default:
      return state
  }
}



export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer,initialState);
  // const value = {state,dispatch}
  return (
    <UserContext.Provider value={{...state,dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
