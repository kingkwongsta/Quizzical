import React from "react";

export default function Quiz(props) {
  // Variable to dynamically generate answer options
  const answerElements = props.options.map((x) => {
    return <button className="quiz-answer">{x}</button>;
  });
  console.log(answerElements);
  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{props.question}</h2>
      <div className="quiz-answer-options">{answerElements}</div>
    </div>
  );
}
