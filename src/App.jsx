// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Ensure this import is correct
import ProjectDetails from "./components/ProjectDetails"; // Detailed project page

function App() {
  return (
    <Router basename="/my-resume">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
