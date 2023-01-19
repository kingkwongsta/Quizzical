import { useState } from "react";
import { decode } from "html-entities";

export default function Option({ option, handleSelection, selectedAnswer }) {
  const styles = {
    backgroundColor: selectedAnswer == option ? "#D6DBF5" : "transparent",
  };

  return (
    <div className="quiz-button" style={styles} onClick={handleSelection}>
      {decode(option)}
    </div>
  );
}
