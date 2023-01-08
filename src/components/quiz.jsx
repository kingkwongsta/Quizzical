import { useState } from "react";
import { nanoid } from "nanoid";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import Option from "./option";

export default function Quiz(props) {
  const [allOptions, setAllOptions] = useState(createOptions());
  function createOptions() {
    const temp = props.options;
    const optionsArray = temp.map((x) => {
      return { option: x, isSelected: false };
    });
    return optionsArray;
  }
  // const [isSelected, setIsSelected] = useState(false);
  // function handleSelect() {
  //   setIsSelected((x) => !x);
  // }
  // Variable to dynamically generate answer options
  console.log(allOptions);
  // const styles = { backgroundColor: isSelected ? "#D6DBF5" : "transparent" };
  const answerElements2 = allOptions.map((x) => {
    return <Option value={x.option} />;
  });
  const answerElements = props.options.map((x) => {
    return (
      <>
        <div className="quiz-options-container">
          <button
            key={nanoid()}
            className="quiz-button"
            // style={styles}
            // onClick={handleSelect}
          >
            {x}
          </button>
        </div>
      </>
    );
  });
  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{props.question}</h2>
      <div className="quiz-options">{answerElements2}</div>
      <hr className="quiz-border" />
    </div>
  );
}
