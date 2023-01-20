import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import Question from "./question";

export default function Quiz(props) {
  //State to store if Check Answers clicked
  const [checkAnswers, setCheckAnswers] = useState(false);
  //State to store total correct
  const [correctCounter, setCorrectCounter] = useState(0);

  const quizData = props.data;
  console.log(quizData);
  const answerElements = quizData.map((x, index) => {
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

  function handleCheckAnswers() {
    setCheckAnswers((prev) => !prev);
  }
  function handlePlayAgain() {
    setCheckAnswers((prev) => !prev);
  }

  useEffect(() => {
    console.log(correctCounter);
  }, [correctCounter]);

  return (
    <div className="quiz-container">
      {answerElements}
      <div className="quiz-check-answer-section">
        {!checkAnswers ? (
          <div>
            <button onClick={handleCheckAnswers}>Check Answer</button>
          </div>
        ) : (
          <h3>
            You Scored {correctCounter}/5 correct answers{" "}
            <button onClick={handlePlayAgain}>Play Again</button>
          </h3>
        )}
      </div>
    </div>
  );
}
