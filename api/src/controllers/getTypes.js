// api/src/controllers/getTypes.js
const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
  try {
    // Verificar si la base de datos de tipos está vacía
    const typesInDatabase = await Type.findAll();

    if (typesInDatabase.length === 0) {
      // La base de datos de tipos está vacía, obtener tipos desde la API
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const apiTypes = response.data.results;

      // Guardar los tipos obtenidos en la base de datos
      const typesToSave = apiTypes.map(apiType => ({
        name: apiType.name,
      }));

      await Type.bulkCreate(typesToSave);
    }

    // Obtener la lista de tipos desde la base de datos
    const typesFromDatabase = await Type.findAll();

    // Responder con la lista de tipos
    res.status(200).json({ success: true, data: typesFromDatabase });
  } catch (error) {
    console.error('Error obteniendo tipos:', error);
    res.status(500).json({ success: false, error: 'Error obteniendo tipos' });
  }
};

module.exports = {
  getTypes,
};