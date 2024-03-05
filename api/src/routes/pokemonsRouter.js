//api/src/routes/pokemonsRouter
const { Router } = require("express");
const routerPk = Router();
const {
  getPokemonsHandler,
  getPokemonsIdHandler,
  createPokemonsHandler,
} = require("../handlers/pokemonsHandlers.js");


routerPk.get("/", getPokemonsHandler);
routerPk.get("/:idPokemon", getPokemonsIdHandler);
routerPk.post("/create",createPokemonsHandler);

module.exports = routerPk;
