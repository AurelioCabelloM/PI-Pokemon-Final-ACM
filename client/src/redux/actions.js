// client/src/redux/actions.js
import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const GET_TYPES ="GET_TYPES";
export const CREATE_POKEMON ="CREATE_POKEMON"

// Acciones relacionadas con la obtención de pokémons
export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons/");
      console.log("getPokemons action dispatched with data:", response.data);
      return dispatch({ type: GET_POKEMONS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemonById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemons/?id=${id}`);
    dispatch({ type: 'GET_POKEMON_BY_ID', payload: response.data.data });
  } catch (error) {
    console.error(`Error obteniendo detalles del Pokémon con ID ${id}:`, error);
    // Puedes manejar el error de la manera que prefieras
  }
};

export const getPokemonsByName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
    dispatch({ type: 'GET_POKEMONS_BY_NAME', payload: response.data.data });
  } catch (error) {
    console.error(`Error obteniendo pokémon por nombre (${name}):`, error);
    // Puedes manejar el error de la manera que prefieras
  }
};

export const getTypes = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/types');
    dispatch({ type: 'GET_TYPES', payload: response.data.data });
  } catch (error) {
    console.error('Error obteniendo tipos:', error);
    // Puedes manejar el error de la manera que prefieras
  }
};

// Acción relacionada con la creación de un nuevo Pokémon
export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.post('/pokemons', pokemonData);
    dispatch({ type: 'CREATE_POKEMON', payload: response.data.data });
  } catch (error) {
    console.error('Error creando un nuevo Pokémon:', error);
    // Puedes manejar el error de la manera que prefieras
  }
};