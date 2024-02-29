//api/src/models/Type.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Type', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {freezeTableName: true, timestamps: false} );
};