import { useEffect, useState, useRef } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Home from "./components/home";
import Quiz from "./components/quiz";

function App() {
  //State to control when to show the Home Page
  const [displayHome, setDisplayHome] = useState(true);
  //State to store quiz data
  const [quizData, setQuizData] = useState();
  //Statee to dynamically generate quiz Q & A
  const [quizElements, setQuizElements] = useState();
  //useRef to run data fetch once
  const dataFetchedRef = useRef(false);

  //Function to begin the quiz game
  function startQuiz() {
    setDisplayHome(false);
  }

  //Fetch Quiz Data
  const fetchQuizData = () => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temp = data.results;
        // hydrate quizData
        setQuizData(temp);
        console.log("setting QuizData");
        // hydrate quizElements
        const temp1 = temp.map((x) => {
          const allOptions = x.incorrect_answers;
          allOptions.push(x.correct_answer);
          return (
            <Quiz
              key={nanoid()}
              question={x.question}
              options={allOptions}
              correct={x.correct_answer}
            />
          );
        });
        setQuizElements(temp1);
        console.log(temp1);
      });
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchQuizData();
    console.log("run effect");
  }, []);

  //

  //     .then((data) => {
  //       setQuizElements(
  //         data.map((x) => {
  //           return (
  //             <Quiz
  //               key={nanoid()}
  //               question={x.question}
  //               options={x.incorrect_answers}
  //             />
  //           );
  //         })
  //       );
  //     });

  // //Generate Temp Quiz Data
  // function tempQuizData() {
  //   const tempData = [];
  //   for (let i = 0; i < 5; i++) {
  //     tempData.push({
  //       id: i,
  //       question: `${i} - the question`,
  //       options: [1, 2, 3, 4],
  //     });
  //   }
  //   return tempData;
  // }

  return (
    <div className="App">
      {displayHome ? <Home startQuiz={startQuiz} /> : quizElements}
    </div>
  );
}

export default App;
