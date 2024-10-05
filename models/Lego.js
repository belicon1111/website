const sequelize = require('../db');
const { Model, DataTypes } = require('sequelize');

class Lego extends Model {}

Lego.init({
  Item: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ProductName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CollectionName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Ages: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Pieces: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Price: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  PictureId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Lego',
  tableName: 'Lego',
  timestamps: false
});

module.exports = Lego;
