import { useState, useEffect } from "react";
import Option from "./option";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question({
  correct,
  incorrect,
  thequestion,
  allOptions,
}) {
  //State to store selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [options, setOptions] = useState(allOptions);
  const [elements, setElements] = useState();
  // useEffect(() => {
  //   console.log("Setting Options");
  //   setOptions(defineOptions);
  //   // optionsElement = defineOptions();
  // }, []);

  //update Elements when options state is set
  useEffect(() => {
    // console.log("checking and setting elements state");
    // console.log(options);
    setElements(createOptions());
  }, []);

  //check if selected answers got updated
  useEffect(() => {
    console.log("selected answer state has changed");
    console.log(selectedAnswer);
  }, [selectedAnswer]);

  function createOptions() {
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
    console.log(selectedAnswer);
  }

  return (
    <>
      <div className="quiz-question">{decode(thequestion)}</div>
      {/* <div className="quiz-option-container">{options}</div> */}
      <div className="quiz-option-container">{elements}</div>
    </>
  );
}
