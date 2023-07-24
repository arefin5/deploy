import {
    QUESTIONS_FETCHING_START,QUESTIONS_FETCHING_SUCCESS,QUESTIONS_FETCHING_FAIL
  } from "../actions/actionTypes";
const questionReducer = (state, action) => {
    
    if (action.type === QUESTIONS_FETCHING_START) {
      return {
        ...state,
        questions_loading: true,
      };
    }
    if (action.type === QUESTIONS_FETCHING_SUCCESS) {
      
      return {
        ...state,
        questions_loading: false,
        allQuestion: action.payload,
        
      };
    }
    if (action.type === QUESTIONS_FETCHING_FAIL) {
      return {
        ...state,
        products_loading: false,
        products_error: true,
      };
    }
    
    return state;
   
  };
  
  export default questionReducer;
  