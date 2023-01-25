import { useEffect, useState } from "react";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import Question from "./question";
// REACT QUERY
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../data";
// REACT ROUTER
import { Link } from "react-router-dom";

export default function Quiz() {
  // React Query for API data
  const { status, error, data, isFetching } = useQuery(["data"], fetchData);
  //State to store if Check Answers clicked
  const [checkAnswers, setCheckAnswers] = useState(false);
  //State to store total correct
  const [correctCounter, setCorrectCounter] = useState(0);

  let quizElements = [];

  if (status === "success") {
    quizElements = createQuizElements();
  }

  function createQuizElements() {
    return data.map((x, index) => {
      return (
        <Question
          key={index}
          correct={x.correct_answer}
          incorrect={x.incorrect_answers}
          thequestion={x.question}
          allOptions={x.options}
          checkAnswers={checkAnswers}
          setCorrectCounter={setCorrectCounter}
        />
      );
    });
  }

  //update state of Check Answer when button is selected
  function handleCheckAnswers() {
    console.log("checking answers");
    setCheckAnswers((prev) => !prev);
  }
  //reset all state to play again
  function handlePlayAgain() {
    setCheckAnswers((prev) => !prev);
    setCorrectCounter(0);
    quizElements = createQuizElements();
    console.log(quizElements);
  }

  return (
    <>
      <div className="quiz-container">
        {quizElements}
      </div>
      <div className="quiz-check-answer-section">
        {!checkAnswers ? (
          <div className="quiz-submit-container">
            <button className="quiz-button-check-answer" onClick={handleCheckAnswers}>Check Answer</button>
          </div>
        ) : (
          <h3 className="quiz-score">
            You Scored {correctCounter}/5 correct answers{" "}
            <Link to="/">
              <button className="quiz-play-again" onClick={handlePlayAgain}>Play Again</button>
            </Link>
          </h3>
        )}
      </div>
      <img className="blob-top" src={blob_top} alt="blob graphic at top" />
      <img className="blob-bot" src={blob_bot} alt="blob graphic at bot" />
    </>
  );
}
