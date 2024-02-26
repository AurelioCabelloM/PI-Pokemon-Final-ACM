// client/src/pages/LandingPage.jsx
import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Henry Pokemon!</h1>
      <Link to="home">
        <button> Ir a la pagina principal</button>
      </Link>
    </div>
  );
}

export default LandingPage;