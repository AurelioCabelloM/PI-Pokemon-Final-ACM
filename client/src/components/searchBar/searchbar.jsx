//client/src/components/SearchBar/SearchBar.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";

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
    <div>
      <input
        type="text"
        placeholder="Pokedex..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;