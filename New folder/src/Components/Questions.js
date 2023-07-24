import { tuple } from "antd/lib/_util/type";
import React, { useEffect, useRef, useState } from "react";
import Timer from "./timer/Timer";
import { BaseUrl } from "../utils/constant";
import axios from "axios";
import { useUserContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

const Questions = ({ questions }) => {
  const [seceond, setSeceond] = useState(0);
  const [min, setMin] = useState(0);
  const [index, setIndex] = useState(0);
  const [timeup, setTimeup] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [submiteans, setSubmite] = useState(false);
  var timer = useRef(null);
  const navigator = useNavigate();
  const { user, dispatch } = useUserContext();

  const {
    questionName,
    answer: correct_answer,
    incorrect_answer,
  } = questions[index];

  const stopTimer = () => {
    if (timer.current) clearInterval(timer.current);
  };


  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        setTimeup(true);
        stopTimer();
        setSubmite(true);
        console.log("last reload ");
        return 0;
      }
      clearInterval(timer.current);
      setSeceond(0);
      setMin(0);
      return index;
    });
  };
  const checkAnswer = (e) => {
    if (e.target.value === correct_answer) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
    if (index === questions.length - 1) {
      stopTimer();
      setSubmite(true);
      return;
    }
  };

  
  const answers = [...incorrect_answer, correct_answer];
  const ScoreSubmite = async (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem("students"));
    let _id = students._id;
    try {
      const { data } = await axios.put(BaseUrl + "/exam-result", {
        _id,
        correct,
      });
      if (data.error) {
        console.log("error");
      } else {
        // window.localStorage.removeItem("students");
        navigator("/reults");
        // save in local storage
      }
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    window.addEventListener("visibilitychange",()=>{
      // write your code here
      // console.log("visibility change k" );
      navigator("/")
      // localStorage.removeItem("students");
      })
  }, []);



  return (
    <div className="question">
      <div className="question_container">
        <Timer
          min={min}
          seceond={seceond}
          setMin={setMin}
          setSeceond={setSeceond}
          index={index}
          setIndex={setIndex}
          questions={questions}
        />
        {timeup ? (
          <h2>Time is up</h2>
        ) : (
          <form>
            <h2>
              Q:-({index + 1}) {questionName}
            </h2>
            <div className="d-flex flex-column ">
              {answers.map((answer, index) => {
                return (
                  <div className="d-flex flex-row" key={index}>
                    <input
                      type="button"
                      className="answer-btn"
                      onClick={checkAnswer}
                      value={answer}
                    />
                  </div>
                );
              })}
            </div>
            <p>Each Question skip automatically after 60s</p>
          </form>
        )}
        <button
          disabled={index === questions.length - 1}
          className="btn btn-primary"
          onClick={nextQuestion}
        >
          next
        </button>
        {submiteans === true ? (
          <>
            <form onSubmit={ScoreSubmite}>
              <h3>Upload a file:</h3>
              <input type="file" accept="images/*" />
              <button
                // type="submit"
                // onclick={ScoreSubmite}
                className="btn btn-success"
              >
                Submit Now
              </button>
            </form>
          </>
        ) : (
          <></>
        )}
        <h2>Score:{correct}/20</h2>
      </div>
    </div>
  );
};

export default Questions;
