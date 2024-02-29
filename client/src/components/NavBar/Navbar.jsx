//client/src/components/NavBar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchbar";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <div>
          {"buscar imagen para aqui"}
        </div>
      </Link>
      <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/create"}>Crea tu propio Pokemon!</Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;