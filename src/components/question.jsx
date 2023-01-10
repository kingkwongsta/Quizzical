import { useState, useEffect } from "react";
import Option from "./option";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question(props) {
  //State to store selected answer
  const [selectedAnswer, setselectedAnswer] = useState("");
  const [options, setOptions] = useState();

  useEffect(() => {
    console.log("Setting Options");
    setOptions(defineOptions);
  }, []);

  // ------ Option Component Creation ------
  function defineOptions() {
    //Create Array for Option Data to be passed down
    const allOptions = props.incorrect;
    allOptions.push(props.correct);
    //Sort to mix correct + incorrect answers
    allOptions.sort();
    const optionElements = allOptions.map((x) => {
      return (
        <Option
          key={nanoid()}
          op={x}
          handleSelectedAnswer={handleSelectedAnswer}
        />
      );
    });
    return optionElements;
  }

  function handleSelectedAnswer(selection) {
    setselectedAnswer(selection);
  }

  return (
    <>
      <div className="quiz-question">{decode(props.question)}</div>
      <div className="quiz-option-container">{options}</div>
    </>
  );
}
