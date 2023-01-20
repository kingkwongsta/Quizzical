import { useState } from "react";
import { nanoid } from "nanoid";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import Question from "./question";

export default function Quiz(props) {
  //State to store if Check Answers clicked
  const [checkAnswers, setCheckAnswers] = useState(false);

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
      />
    );
  });

  function handleCheckAnswers() {
    setCheckAnswers((prev) => !prev);
    console.log(checkAnswers);
  }

  return (
    <div className="quiz-container">
      {answerElements}
      <div className="quiz-check-answer-button">
        <button onClick={handleCheckAnswers}>Check Answers</button>
      </div>
    </div>
  );
}
