import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterCreated, getTypes, orderByName, orderByAttack, filterByType } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Navbar from "../../components/NavBar/Navbar";
import Pagination from "../../components/pagination/pagination";
import "./Home.css"


const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const notFound = useSelector((state) => state.notFound);
  const [, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(10);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  const handleSortAttack = (e) => {
    e.preventDefault();
    if (e.target.value !== "attack") {
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);}
  };

  const handleFilterTypes = (e) => {
    e.preventDefault();
    if (e.target.value !== "Tipos") {
      dispatch(filterByType(e.target.value));
    }
  };

  

  

  return (
    <div className="home-container" >
      <Navbar />
      <div className="filters-container" >
        <button onClick={(e) => handleClick(e)} className="filter-button" >Recargar</button>
        <select onChange={(e) => handleSort(e)} className="filter-button" >
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>
        <select onChange={(e) => handleFilterTypes(e)} className="filter-button" >
          <option>Tipos</option>
          <option value="All">Todos</option>
          {allTypes?.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleSortAttack(e)} className="filter-button" >
          <option value="attack">Ataque</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
        <select onChange={(e) => handleFilterCreated(e)} className="filter-button" >
          <option value="All">Origen</option>
          <option value="created">Creados</option>
          <option value="api">Api</option>
        </select>
      </div>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
        page={currentPage}
      />
      <div className="card-container" >
        {currentPokemons.length ? (
          currentPokemons?.map((e, index) => (
            <Link key={index} to={`/detail/${e.id}`} className="card" >
              <Card name={e.name} hp={e.hp} attack={e.attack} image={e.image} id={e.id} types={e.types} key={index} />
            </Link>
          ))
        ) : notFound ? (
          <div>
            <p>No existe Pokémon con ese nombre</p>
          </div>
        ) : (
          <div>
            <p>Cargando...</p>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Home;