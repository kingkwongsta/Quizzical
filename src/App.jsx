import { useEffect, useState, useRef } from "react";
import "./App.css";
import { nanoid } from "nanoid";
// COMPONENTS
import Home from "./components/home";
import Quiz from "./components/quiz";
// REACT QUERY
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./data";
// REACT ROUTER
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  const { isLoading, error, data, isFetching } = useQuery(["data"], fetchData);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
