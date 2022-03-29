import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Todolist from "./pages/Todolist";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todolist" element={<Todolist />} />
      </Routes>
    </div>
  );
};

export default App;
