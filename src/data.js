import React from "react";

export const fetchData = async () => {
  console.log("fetching data");
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple"
  );
  const data = await response.json();
  return data.results;
};

//Fetch Quiz Data
const fetchQuizData = () => {
  fetch("https://opentdb.com/api.php?amount=5&type=multiple").then(
    (response) => {
      return response.json();
    }
  );
  // .then((data) => {
  //   const temp = data.results;
  //   // hydrate quizData
  //   setQuizData(temp);
  //   console.log("setting QuizData");
  //   // hydrate quizElements
  //   const temp1 = temp.map((x) => {
  //     const allOptions = x.incorrect_answers;
  //     allOptions.push(x.correct_answer);
  //     return (
  //       <Quiz
  //         key={nanoid()}
  //         question={x.question}
  //         options={allOptions}
  //         correct={x.correct_answer}
  //       />
  //     );
  //   });
  //   setQuizElements(temp1);
  //   console.log(temp1);
  // });
};
