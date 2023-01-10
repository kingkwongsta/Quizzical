import { useState } from "react";
import { decode } from "html-entities";

export default function Option(props) {
  const [isSelected, setIsSelected] = useState(false);
  const styles = { backgroundColor: isSelected ? "#D6DBF5" : "transparent" };

  function handleSelect() {
    setIsSelected((previous) => !previous);
    //update Selected Answer to this components option
    props.handleSelectedAnswer(props.op);
  }
  return (
    <div className="quiz-button" style={styles} onClick={handleSelect}>
      {decode(props.op)}
    </div>
  );
}
