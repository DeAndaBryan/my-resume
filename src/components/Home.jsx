// src/components/Home.jsx
import React from "react";
import Header from "./Header"; // Make sure your Header component is in the same directory
import Projects from "./Projects"; // Your existing Projects component
import About from "./About"; // Your existing About component
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
    </div>
  );
}

export default Home;
