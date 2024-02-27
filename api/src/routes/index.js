//api/src/routes/index.js
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const createPokemonController = require("../controllers/createPokemon")
const getPokemonsController = require('../controllers/getPokemons');
const getPokemonsByIdController = require("../controllers/getPokemonsByID");
const getTypesController = require('../controllers/getTypes');
const getPokemonsByNameController = require("../controllers/getPokemonsByName");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/pokemons", createPokemonController.createPokemon)
router.get('/pokemons', getPokemonsController.getAllPokemons);
router.get('/pokemons/:idPokemon', getPokemonsByIdController.getPokemonById);
router.get('/types', getTypesController.getTypes); 
router.get('/pokemons/name', getPokemonsByNameController.getPokemonsByName);
module.exports = router;
