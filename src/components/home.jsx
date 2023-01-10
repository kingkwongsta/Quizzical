import React from "react";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Quizzical</h1>
      <h2 className="home-description">
        A trivia game of 5 questions from many different topics
      </h2>
      <Link to="/quiz">
        <button className="home-start-button">Start Quiz</button>
      </Link>
      <img src={blob_top} alt="blob graphic top" className="blob-top" />
      <img src={blob_bot} alt="blob graphic bot" className="blob-bot" />
    </div>
  );
}
