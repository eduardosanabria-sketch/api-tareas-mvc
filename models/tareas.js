'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tareas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tareas.init({
    titulo: DataTypes.STRING,
    completada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tareas',
  });
  return tareas;
};