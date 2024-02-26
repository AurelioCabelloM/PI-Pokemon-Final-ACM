// client/src/redux/reducers.js
import { GET_POKEMONS, GET_POKEMONS_BY_NAME, GET_POKEMON_BY_ID, GET_TYPES, CREATE_POKEMON } from "./actions";
const initialState = {
  pokemons: [],
  selectedPokemon: null,
  searchedPokemons: [],
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      console.log("Reducer received GET_POKEMONS action with payload:", action.payload);
      return { ...state, pokemons: action.payload };
    case 'GET_POKEMON_BY_ID':
      return { ...state, selectedPokemon: action.payload };
    case 'GET_POKEMONS_BY_NAME':
      return { ...state, searchedPokemons: action.payload };
    case 'GET_TYPES':
      return { ...state, types: action.payload };
    case 'CREATE_POKEMON':
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;