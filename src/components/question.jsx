import { useState, useEffect } from "react";
import Option from "./option";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question(props) {
  //State to store selected answer
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [options, setOptions] = useState([]);
  const [render, setRender] = useState(0);
  const [elements, setElements] = useState();
  // useEffect(() => {
  //   console.log("Setting Options");
  //   setOptions(defineOptions);
  //   // optionsElement = defineOptions();
  // }, []);

  //modify API to get all options
  useEffect(() => {
    console.log("Setting Options");
    //Create Array for Option Data to be passed down
    const allOptions = props.incorrect;
    allOptions.push(props.correct);
    //Sort to mix correct + incorrect answers
    allOptions.sort();
    setOptions(allOptions);
  }, []);

  //update Elements when options state is set
  useEffect(() => {
    console.log("checking and setting elements state");
    console.log(options);
    setElements(createOptions());
  }, [options]);

  //check if selected answers got updated
  useEffect(() => {
    console.log("checking selected answer state");
    console.log(selectedAnswer);
  }, [selectedAnswer]);

  function createOptions() {
    console.log("create options execute");
    console.log(options);
    return options.map((option, index) => {
      return (
        <Option
          key={index}
          option={option}
          selectedAnswer={selectedAnswer}
          handleSelection={() => handleSelection(option)}
        />
      );
    });
  }

  function handleSelection(selection) {
    setSelectedAnswer(selection);
    console.log("handleSelection in parent");
    console.log(`parameter ${selection}`);
  }

  return (
    <>
      <div className="quiz-question">{decode(props.question)}</div>
      {/* <div className="quiz-option-container">{options}</div> */}
      <div className="quiz-option-container">{elements}</div>
    </>
  );
}
