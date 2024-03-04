import React from "react";
import "./Pagination.css"

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
  page
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav className="pagination" >
      <ul>
        {pageNumbers &&
          pageNumbers.map((number, index) => (
            <li
              key={index}
            >
              <button
                className="button-p"
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}