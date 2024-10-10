// src/components/About.jsx

import React from "react";
import "./About.css"; // Make sure to create or update this CSS file

function About() {
  return (
    <section className="about">
      <img
        src="src/assets/7D1E58BB-E346-4888-BF43-46D22DBAE450_1_105_c.jpeg"
        alt="Your Name"
        className="about-image"
      />
      <div className="about-content">
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            Hi there! I'm a passionate web developer with a strong interest in
            networks and new technologies. When I'm not coding, you can find me
            at the gym, lifting weights and staying fit. I love to explore new
            places, travel, and try out different cuisines—there's always
            something new to discover!
          </p>
          <p>
            I enjoy spending quality time with my family and believe that
            balance is key to a fulfilling life. My career goal is to find a
            position with growth opportunities where I can truly thrive and make
            an impact.
          </p>
          <p>
            Fun Fact: I once attempted to learn how to cook a dish from every
            continent—let's just say, some dishes turned out better than others!
          </p>
        </div>
        <div className="about-education">
          <h3>Education</h3>
          <p>SUNY Orange - Associate's Degree in Computer Science</p>
          <p>SUNY New Paltz - Bachelor’s Degree in Computer Science</p>
        </div>
      </div>
    </section>
  );
}

export default About;
