import React from "react";

export const fetchData = async () => {
  console.log("fetching data");
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple"
  );
  const data = await response.json();
  return data.results;
};
