import { useState, useEffect } from "react";
import Option from "./option";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question(props) {
  //State to store selected answer
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [options, setOptions] = useState([]);
  // useEffect(() => {
  //   console.log("Setting Options");
  //   setOptions(defineOptions);
  //   // optionsElement = defineOptions();
  // }, []);

  useEffect(() => {
    console.log("Setting Options");
    //Create Array for Option Data to be passed down
    const allOptions = props.incorrect;
    allOptions.push(props.correct);
    //Sort to mix correct + incorrect answers
    allOptions.sort();
    setOptions(allOptions);
  }, [options]);

  function createOptions() {
    return options.map((option, index) => {
      <Option
        key={index}
        option={option}
        selectedAnswer={selectedAnswer}
        handleSelection={() => handleSelection(option)}
      />;
    });
  }
  // ------ Option Component Creation ------
  function defineOptions() {
    //Create Array for Option Data to be passed down
    const allOptions = props.incorrect;
    allOptions.push(props.correct);
    //Sort to mix correct + incorrect answers
    allOptions.sort();
    const optionElements = allOptions.map((option, index) => {
      return (
        <Option
          key={index}
          option={option}
          selectedAnswer={selectedAnswer}
          handleSelection={() => handleSelection(option)}
        />
      );
    });
    return optionElements;
  }

  function handleSelection(selection) {
    setSelectedAnswer(selection);
    console.log("handleSelection in parent");
    console.log(`parameter ${selection}`);
    console.log(selectedAnswer);
  }

  return (
    <>
      <div className="quiz-question">{decode(props.question)}</div>
      {/* <div className="quiz-option-container">{options}</div> */}
      <div className="quiz-option-container">{createOptions()}</div>
    </>
  );
}
