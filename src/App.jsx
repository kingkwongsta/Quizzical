import { useEffect, useState, useRef } from "react";
import "./App.css";
import { nanoid } from "nanoid";
// COMPONENTS
import Home from "./components/home";
import Quiz from "./components/quiz";
// REACT ROUTER
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
