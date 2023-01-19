import { useState, useEffect } from "react";
import Option from "./option";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question(props) {
  //State to store selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(1);
  const [options, setOptions] = useState();
  const [work, setWork] = useState("");
  const [state, setState] = useState(0);

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
    const optionElements = allOptions.map((x, index) => {
      return (
        <Option
          key={index}
          op={x}
          handler={() => handler()}
          handleSelection={() => handleSelection(x)}
          // selectedAnswer={selectedAnswer}
        />
      );
    });
    return optionElements;
  }
  function handler() {
    setState((x) => x + 1);
    console.log(state);
  }

  function handleSelection(selection) {
    setSelectedAnswer((x) => {
      return x + 1;
    });
    console.log("handleSelection in parent");
    console.log(`parameter ${selection}`);
    console.log(selectedAnswer);
  }

  useEffect(() => {
    console.log("answer has been updated");
  }, [selectedAnswer]);

  return (
    <>
      <div className="quiz-question">{decode(props.question)}</div>
      <div className="quiz-option-container">{options}</div>
    </>
  );
}
