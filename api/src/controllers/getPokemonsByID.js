// api/src/controllers/getPokemonsById.js
const axios = require('axios');

const getPokemonById = async (req, res) => {
  const { idPokemon } = req.params;

  try {
    // Realiza una solicitud a la API externa para obtener los detalles del Pokémon
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    const pokemonFromAPI = response.data;

    // Verifica si la respuesta de la API contiene datos
    if (!pokemonFromAPI) {
      const error = 'No se encontró el Pokémon en la API';
      console.error(error);
      res.status(404).json({ success: false, error });
      return;
    }

    // Devuelve los datos del Pokémon desde la API
    const success = true;
    res.status(200).json({ success, data: pokemonFromAPI });
  } catch (error) {
    console.error('Error obteniendo detalle del Pokémon desde la API:', error);
    const success = false;
    res.status(500).json({ success, error: 'Error obteniendo detalle del Pokémon desde la API' });
  }
};

module.exports = {
  getPokemonById,
};