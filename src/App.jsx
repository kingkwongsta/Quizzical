import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Home from "./components/home";
import Quiz from "./components/quiz";

function App() {
  //State to control when to show the Home Page
  const [displayHome, setDisplayHome] = useState(false);
  //State to store quiz data
  const [quizData, setQuizData] = useState();
  //Statee to dynamically generate quiz Q & A
  const [quizElements, setQuizElements] = useState();

  //Function to begin the quiz game
  function startQuiz() {
    setDisplayHome(false);
  }

  //Fetch Quiz Data
  const fetchQuizData = () => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => {
        return response.json();
        // hydrate quizData
      })
      .then((data) => {
        const temp1 = data.results;
        setQuizData(temp1);
        console.log(quizData);
        // hydrate quizElements
        const temp = temp1.map((x) => {
          return (
            <Quiz
              key={nanoid()}
              question={x.question}
              options={x.incorrect_answers}
            />
          );
        });
        setQuizElements(temp);
        // console.log(quizElements);
      });
  };

  useEffect(() => {
    fetchQuizData();
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
      {/* {quizElements} */}
      {/* {displayHome ? <Home startQuiz={startQuiz} /> : quizElements} */}
    </div>
  );
}

export default App;
