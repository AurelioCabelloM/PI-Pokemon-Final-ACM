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
          const createdFilter = action.payload === "created"
            ? state.allPokemons.filter((e) => e.createdInDb)
            : state.allPokemons.filter((e) => !e.createdInDb);
        
          let filteredPokemons = action.payload === "All" ? state.allPokemons : createdFilter;
        
          if (state.filterTypeValue !== "All") {
            filteredPokemons = filteredPokemons.filter((e) =>
              e.types.includes(state.filterTypeValue)
            );
          }
        
          if (state.orderBy === "name") {
            filteredPokemons.sort((a, b) => {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              return state.order === "asc" ? (nameA > nameB ? 1 : -1) : (nameB > nameA ? 1 : -1);
            });
          } else if (state.orderBy === "attack") {
            if (state.order === "min") {
              filteredPokemons.sort((a, b) => a.attack - b.attack);
            } else if (state.order === "max") {
              filteredPokemons.sort((a, b) => b.attack - a.attack);
            }
          }
        
          return {
            ...state,
            pokemons: filteredPokemons,
          };
          
        case ORDER_BY_NAME:
          let sortedName =
            action.payload === "asc"
              ? state.pokemons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
              : state.pokemons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
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
  