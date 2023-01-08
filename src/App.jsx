import { useEffect, useState, useRef } from "react";
import "./App.css";
import { nanoid } from "nanoid";
// COMPONENTS
import Home from "./components/home";
import Quiz from "./components/quiz";
// IMAGES
import blob_top from "./assets/blob-top.png";
import blob_bot from "./assets/blob-bottom.png";
// REACT QUERY
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./data";

function App() {
  //State to control when to show the Home Page
  const [displayHome, setDisplayHome] = useState(true);
  //State to store quiz data
  const [quizData, setQuizData] = useState();
  //useRef to run data fetch once
  const dataFetchedRef = useRef(false);

  const { isLoading, error, data, isFetching } = useQuery(["data"], fetchData);
  //Function to begin the quiz game
  function startQuiz() {
    setDisplayHome(false);
  }

  //   <Quiz
  //     key={nanoid()}
  //     question={x.question}
  //     options={x.incorrect_answers}

  return (
    <div className="App">
      {data &&
        data.map((x) => (
          <Quiz
            key={nanoid()}
            question={x.question}
            options={x.incorrect_answers}
            isSelected={false}
          />
        ))}
      {/* {displayHome ? <Home startQuiz={startQuiz} /> : ""} */}
      <img src={blob_top} alt="blob graphic top" className="blob-top" />
      <img src={blob_bot} alt="blob graphic bot" className="blob-bot" />
    </div>
  );
}

export default App;
