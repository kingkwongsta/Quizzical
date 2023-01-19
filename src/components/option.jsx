import { useState } from "react";
import { decode } from "html-entities";

export default function Option({ op, handleSelection, handler }) {
  const styles = { backgroundColor: false ? "#D6DBF5" : "transparent" };

  return (
    <div className="quiz-button" style={styles} onClick={handler}>
      {decode(op)}
    </div>
  );
}
