import { useState } from "react";
import "./App.css";
import Home from "./components/home";

function App() {
  const [displayHome, setDisplayHome] = useState(true);

  function startQuiz() {
    setDisplayHome(false);
  }

  return (
    <div className="App">
      {displayHome ? <Home startQuiz={startQuiz} /> : ""}
    </div>
  );
}

export default App;
