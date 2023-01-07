import React from "react";
import { nanoid } from "nanoid";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";

export default function Quiz(props) {
  // Variable to dynamically generate answer options
  //   const combineOptions = props.options;
  //   combineOptions.push(props.correct);
  //   console.log(combineOptions);
  console.log("checking Quiz Options");
  const answerElements = props.options.map((x) => {
    return (
      <button key={nanoid()} className="quiz-button">
        {x}
      </button>
    );
  });
  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{props.question}</h2>
      <div className="quiz-options">{answerElements}</div>
      {/* <img src={blob_top} alt="blob graphic top" className="home-blob-top" />
      <img src={blob_bot} alt="blob graphic bot" className="home-blob-bot" /> */}
    </div>
  );
}
