// client/src/pages/home.jsx
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getPokemons, getTypes } from '../../redux/actions';
import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch])


  return (
    <div className='home'>
      <h1 className='home-title'>Home</h1>
      <NavBar />
      

    </div>
  );
}

export default Home;