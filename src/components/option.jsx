import { useState } from "react";
import { decode } from "html-entities";

export default function Option({
  option,
  handleSelection,
  selectedAnswer,
  checkAnswers,
  correct,
}) {
  //define background color styles
  let styles = { backgroundColor: "transparent" };
  if (!checkAnswers && option == selectedAnswer) {
    styles.backgroundColor = "#D6DBF5";
  }
  //correct answer selected
  if (checkAnswers && selectedAnswer == correct && option == correct) {
    styles.backgroundColor = "#94D7A2";
  }
  //wrong answer selected
  else if (checkAnswers && selectedAnswer !== correct && option !== correct) {
    styles.backgroundColor = "#F8BCBC";
  } else if (checkAnswers && option !== selectedAnswer) {
    styles.backgroundColor = "transparent";
  }

  return (
    <div
      className="quiz-button"
      style={styles}
      // style={`backgroundColor: ${styles}`}
      onClick={handleSelection}
    >
      {decode(option)}
    </div>
  );
}
