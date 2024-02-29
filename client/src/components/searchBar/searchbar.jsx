//client/src/components/SearchBar/SearchBar.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";
import "./searchBar.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNamePokemons(name));
  };

  return (
    <div className="search-bar-container" >
      <input
        className="search-input"
        type="text"
        placeholder="Encuentra Pokemons"
        onChange={(e) => handleInputChange(e)}
      />
      <button className="search-button" type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;