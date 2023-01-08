import React from "react";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";

export default function Home(props) {
  return (
    <div className="home">
      <h1 className="home-title">Quizzical</h1>
      <h2 className="home-description">
        A trivia game of 5 questions from many different topics
      </h2>
      <button className="home-start-button" onClick={props.startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}
