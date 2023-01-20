import { useState, useEffect } from "react";
import Option from "./option";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question({
  correct,
  incorrect,
  thequestion,
  allOptions,
  checkAnswers,
  setCorrectCounter,
}) {
  //State to store selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");
  //State to store all options
  const [options, setOptions] = useState(allOptions);

  function createOptions() {
    return options.map((option, index) => {
      return (
        <Option
          key={index}
          option={option}
          correct={correct}
          selectedAnswer={selectedAnswer}
          handleSelection={() => handleSelection(option)}
          handleCounter={() => handleCounter()}
          checkAnswers={checkAnswers}
        />
      );
    });
  }

  function handleSelection(selection) {
    setSelectedAnswer(selection);
  }

  //Add correct answers to correctCounter
  useEffect(() => {
    if (checkAnswers === true && selectedAnswer === correct) {
      setCorrectCounter((prev) => prev + 1);
    }
  }, [checkAnswers]);

  return (
    <>
      <div className="quiz-question">{decode(thequestion)}</div>
      {/* <div className="quiz-option-container">{options}</div> */}
      <div className="quiz-option-container">{createOptions()}</div>
    </>
  );
}
