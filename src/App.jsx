import Garden from "./components/Garden.jsx";
import Instagram from "./components/Instagram.jsx";
import Schedule from "./components/Schedule.jsx";
import Team from "./components/Team.jsx";
import Arena from "./components/Arena.jsx"

import React, { useState } from "react";

import "./App.css";
("");

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

function App() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <main>
        <a href="#title">
          <img
            id="anchor"
            src="https://image-gosting.s3.amazonaws.com/ddap/a.svg"
            style={{ stroke: "white" }}
            className={`controlsHoverIn ${hovered ? "" : "controlsHoverOut"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></img>
        </a>
        <Garden />

        <section id="title" className="title-section">
          <div>
            <div className="title">DIGITAL DESIGN @ PARSONS</div>
          </div>

          <p className="what-we-do">
            D-DAP is a student-run club for designers interested in areas like
            web design, UX and creative coding.
          </p>
          <p className="what-we-do">
            We meet on <u>Wednesdays from 4-6pm,</u> either hosting guest
            speakers, live demos or sharing our work
          </p>
          <p>Our meetings are open to everyone !</p>
          <p>
            We send out weekly{" "}
            <a
              href="https://forms.gle/R66VYV9Qq81R2YU68"
              target="_blank"
            >
              e-mail updates
            </a>{" "}
            about upcoming events ꕤꕤꕤꕤꕤ <br />
            <br />
          </p>
        </section>
        <section>
          {/* The schedule would be contained here as a React component */}
          <Schedule />
        </section>
        <section>
          <h2 className="section-title">Gallery</h2>
          <div>
            <Instagram />
          </div>
        </section>
        <section>
            <Arena />
        </section>
        <section>
          <h2 className="section-title">Leadership</h2>
          <div>
            <Team />
          </div>
          <div className="ig-link">
            <a
              className="ig-icon"
              href="https://www.instagram.com/digitaldesignatparsons/"
              target="_blank"
            >
              <img src="https://image-gosting.s3.amazonaws.com/ddap/ig.svg" />
            </a>
          </div>
        </section>

        <footer></footer>
      </main>
    </>
  );
}

export default App;
