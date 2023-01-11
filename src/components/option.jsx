import { useState } from "react";
import { decode } from "html-entities";

export default function Option({ op, handleSelection, handleSelectedAnswer }) {
  const styles = { backgroundColor: false ? "#D6DBF5" : "transparent" };

  return (
    <div className="quiz-button" style={styles} onClick={handleSelection}>
      {decode(op)}
    </div>
  );
}
