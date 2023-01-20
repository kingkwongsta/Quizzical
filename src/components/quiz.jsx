import { useState } from "react";
import { nanoid } from "nanoid";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import Question from "./question";

export default function Quiz(props) {
  // const [isSelected, setIsSelected] = useState(false);
  // function handleSelect() {
  //   setIsSelected((x) => !x);
  // }
  // // Variable to dynamically generate answer options
  // console.log("checking Quiz Options");
  // const styles = { backgroundColor: isSelected ? "#D6DBF5" : "transparent" };
  const quizData = props.data;
  console.log(quizData);
  const answerElements = quizData.map((x, index) => {
    return (
      <Question
        key={index}
        correct={x.correct_answer}
        incorrect={x.incorrect_answers}
        thequestion={x.question}
        allOptions={x.options}
      />
    );
  });

  return <div className="quiz-container">{answerElements}</div>;
}
