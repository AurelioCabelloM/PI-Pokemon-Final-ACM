// api/src/controllers/getPokemons.js
const axios = require('axios');

const getPokemons = async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = response.data.results;

    // Transforma los resultados para cumplir con el formato requerido
    const formattedPokemons = pokemons.map((pokemon) => ({
      name: pokemon.name,
      id: pokemon.id,
    }));

    const success = true;
    res.status(200).json({ success, data: formattedPokemons });
  } catch (error) {
    console.error('Error obteniendo pokemones desde la API:', error);
    const success = false;
    res.status(500).json({ success, error: 'Error obteniendo pokemones desde la API', details: error.message });
  }
};

module.exports = {
  getPokemons,
};