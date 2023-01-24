import React from "react";

// export const fetchData = async () => {
//   console.log("fetching data");
//   const response = await fetch(
//     "https://opentdb.com/api.php?amount=5&type=multiple"
//   );
//   const data = await response.json();
//   const data2 = await data.results.map((x) => x);
//   return data.results;
// };

export const fetchData = async () => {
  console.log("fetching data");
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple"
  );

  const data = await response.json();
  const data2 = await data.results.map((x) => {
    const combineOptions = x.incorrect_answers;
    combineOptions.push(x.correct_answer);
    combineOptions.sort();
    return { ...x, options: combineOptions };
  });
  return data2;
};
