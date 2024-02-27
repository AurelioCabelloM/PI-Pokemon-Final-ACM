//Landing/src/Views/Landing/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <div>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F98%2FInternational_Pok%25C3%25A9mon_logo.svg%2F1200px-International_Pok%25C3%25A9mon_logo.svg.png&tbnid=uNSKqqPma5H7CM&vet=12ahUKEwjx8rqjp8uEAxXeN94AHcKlAlsQMygAegQIARBy..i&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPok%25C3%25A9mon&docid=Atnr2etgLjAtUM&w=1200&h=442&q=pokemon&ved=2ahUKEwjx8rqjp8uEAxXeN94AHcKlAlsQMygAegQIARBy" alt="pueblo paletta" />
          <Link to="/home">
            <button>
              Ir a Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;