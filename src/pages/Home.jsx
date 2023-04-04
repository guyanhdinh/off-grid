import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got a home for you.</h1>
      <p>
        Add adventure to your life by joining the #offgridliving movement. Rent
        the perfect home at our unique off-grid location to make your perfect
        off-grid living experience.
      </p>
      <div className="home-link">
        <Link to="homes">Find your home</Link>
      </div>
    </div>
  );
}

export default Home;
