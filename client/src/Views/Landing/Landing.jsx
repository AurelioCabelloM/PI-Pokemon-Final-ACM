//Landing/src/Views/Landing/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {
  return (
    <div className="landing-container" >
      <div>
        <div>
          <Link to="/home">
            <button>
              <span>¡Atrapalos ya!</span> 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;