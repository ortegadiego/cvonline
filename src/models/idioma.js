const { Model,  DataTypes} = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Idioma extends Model {}

Idioma.init({
  // Model attributes are defined here
    
  idioma_id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull: {
        msg: 'El nombre del idioma es un campo obligatorio'
      }
    }
  },
  nivel: {
    type: DataTypes.STRING,
    allowNull: true
  }


}, {
  // Other model options go here
  sequelize:dbInstance, // We need to pass the connection instance
  modelName: 'Idioma', // We need to choose the model name
  createdAt:false,
  updatedAt:false
});
module.exports = {Idioma}
