//client/src/redux/reducer.js
import {
    GET_POKEMONS,
    FILTER_CREATED,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    FILTER_BY_TYPE,
    GET_NAME_POKEMONS,
    GET_TYPES,
    GET_DETAIL,
    CLEAR_DETAIL,
  } from "./actions";
  
  let initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: {},
    notFound: false,
    filterTypeValue: "All",
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload,
          notFound: false,
        };
      case GET_NAME_POKEMONS:
        if (action.payload.error) {
          return {
            ...state,
            pokemons: [],
            notFound: true,
          };
        } else {
          return {
            ...state,
            pokemons: action.payload,
            notFound: false,
          };
        }
  
      case GET_TYPES:
        return {
          ...state,
          types: action.payload,
        };
      case FILTER_CREATED:
        const createdFilter =
          action.payload === "created"
            ? state.allPokemons.filter((e) => e.createdInDb)
            : state.allPokemons.filter((e) => !e.createdInDb);
        return {
          ...state,
          pokemons: action.payload === "All" ? state.allPokemons : createdFilter,
        };
        case ORDER_BY_NAME:
          let sortedName =
            action.payload === "asc"
              ? state.pokemons.sort((a, b) => (a.name > b.name ? 1 : -1))
              : state.pokemons.sort((a, b) => (a.name > b.name ? -1 : 1));
          return {
            ...state,
            pokemons: sortedName,
          };
  
        case ORDER_BY_ATTACK:
          let sortedAttack =
            action.payload === "min"
              ? state.pokemons.sort((a, b) => a.attack - b.attack)
              : action.payload === "max"
              ? state.pokemons.sort((a, b) => b.attack - a.attack)
              : [...state.allPokemons];
    
          let filteredByType =
            state.filterTypeValue === "All"
              ? sortedAttack
              : sortedAttack.filter((e) => e.types.includes(state.filterTypeValue));
    
          return {
            ...state,
            pokemons: filteredByType,
          };

      
        case FILTER_BY_TYPE:
          let filterType =
            action.payload === "All"
              ? state.allPokemons
              : state.allPokemons.filter((e) => e.types.includes(action.payload));
          return {
            ...state,
            pokemons: filterType,
            filterTypeValue: action.payload,
          };


      case GET_DETAIL:
        return {
          ...state,
          detail: action.payload,
        };

        
      case CLEAR_DETAIL:
        return {
          ...state,
          detail: {},
        }; 
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  