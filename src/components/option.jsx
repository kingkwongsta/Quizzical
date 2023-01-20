import { useState } from "react";
import { decode } from "html-entities";

export default function Option({
  option,
  selectedAnswer,
  checkAnswers,
  correct,
  handleSelection,
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
  else if (checkAnswers && selectedAnswer == option && option !== correct) {
    styles.backgroundColor = "#F8BCBC";
  }
  //correct answer not selected
  else if (checkAnswers && option === correct) {
    styles.backgroundColor = "#94D7A2";
  }
  //wrong answers that were not selected
  else if (checkAnswers && option !== selectedAnswer) {
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
