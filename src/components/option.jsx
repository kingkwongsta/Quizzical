import { useState } from "react";
import { decode } from "html-entities";

export default function Option({ op, updateAnswer, selectedAnswer }) {
  const styles = { backgroundColor: false ? "#D6DBF5" : "transparent" };

  return (
    <div className="quiz-button" style={styles} onClick={updateAnswer}>
      {decode(op)}
    </div>
  );
}
