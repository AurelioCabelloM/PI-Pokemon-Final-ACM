// api/src/controllers/getPokemonsByName.js
const axios = require('axios');
const { Pokemon, Type, sequelize } = require('../db');

const getPokemonsByName = async (req, res) => {
  const { name } = req.query;

  try {
    // Buscar en la base de datos los pokémons que coincidan con el nombre
    const pokemonsFromDatabase = await Pokemon.findAll({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), 'LIKE', `%${name.toLowerCase()}%`),
      include: Type, // Incluir los tipos asociados
    });

    // Transforma los resultados para cumplir con el formato requerido
    const formattedPokemons = pokemonsFromDatabase.map((pokemon) => ({
      name: pokemon.name,
      types: pokemon.types.map((type) => type.name),
    }));

    // Responder con los pokémons encontrados
    const success = true;
    res.status(200).json({ success, data: formattedPokemons });
  } catch (error) {
    console.error('Error obteniendo pokémon por nombre:', error);
    res.status(500).json({ success: false, error: 'Error obteniendo pokémon por nombre' });
  }
};

module.exports = {
  getPokemonsByName,
};