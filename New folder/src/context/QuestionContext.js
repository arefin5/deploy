import axios from "axios";
import React, { useContext, useEffect, useReducer, } from "react";
import questionReducer from "../reducers/QuestionsReducer";
import { questions_url as url } from "../utils/constant";
import {
  QUESTIONS_FETCHING_START,QUESTIONS_FETCHING_SUCCESS,QUESTIONS_FETCHING_FAIL
} from "../actions/actionTypes";

const initialState = {
  questions_loading: true,
  questions_error: false,
  questions: [],
};

const QuestionContext = React.createContext();
export const QuestionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  
  const fetchQuestions = async () => {
    dispatch({ type: QUESTIONS_FETCHING_START });

    try {
      const response = await axios.get(url);
      const allQuestion = response.data;
      dispatch({ type: QUESTIONS_FETCHING_SUCCESS, payload: allQuestion });
    } catch {
      dispatch({ type: QUESTIONS_FETCHING_FAIL });
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  
  /* single_question data fetching end*/
  return (
    <QuestionContext.Provider
      value={{ ...state,}}
    >
      {children}
    </QuestionContext.Provider>
  );
};
// make sure use
export const useQuestionContext = () => {
  return useContext(QuestionContext);
};
