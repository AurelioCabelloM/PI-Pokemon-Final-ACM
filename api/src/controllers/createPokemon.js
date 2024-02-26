// api/src/controllers/createPokemon.js
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const createPokemon = async (req, res) => {
  const { name, image, vida, ataque, defensa, velocidad, altura, peso, types } = req.body;

  try {
    // Hacer una llamada a la API de tipos para obtener detalles
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const allTypes = response.data.results;

    // Filtrar los tipos seleccionados por el cliente
    const selectedTypes = allTypes
      .filter(type => types.includes(type.name))
      .map(type => type.name); // Obtener solo los nombres de los tipos

    // Crear el Pokémon y asociar los tipos
    const createdPokemon = await Pokemon.create({
      name,
      image,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
    });

    // Obtener instancias de los tipos seleccionados
    const typeInstances = await Type.findAll({
      where: {
        name: selectedTypes,
      },
    });

    // Asociar el Pokémon con los tipos utilizando las instancias
    await createdPokemon.setTypes(typeInstances);

    const success = true;
    res.status(201).json({ success, data: createdPokemon });
  } catch (error) {
    console.error('Error creando un nuevo Pokémon:', error);
    const success = false;
    res.status(500).json({ success, error: 'Error creando un nuevo Pokémon' });
  }
};

module.exports = {
  createPokemon,
};