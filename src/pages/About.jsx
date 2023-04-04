import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <img src="../images/about-img.jpg" className="about-image" alt="" />
      <div className="about-content">
        <h1>
          Living up your life experience when staying at our unique off-grid
          home.
        </h1>
        <p>
          Our mission is to enliven your vacation with the perfect off-grid home
          rental. Our homes are maintained and cleaned up before each trip to
          ensure your travel plans can go off without a hitch.
        </p>
        <p>
          Our homes are located at unique location surrounding by nature giving
          you the best off-grid living experience.
        </p>
      </div>
      <div className="about-cta">
        <h2>
          Your destination is waiting.
          <br />
          The road is calling.
        </h2>
        <Link className="link-button" to="/homes">
          Explore our homes
        </Link>
      </div>
    </div>
  );
}

export default About;
