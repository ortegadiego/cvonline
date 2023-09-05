const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Rubro extends Model {
}

Rubro.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El nombre es obligatorio'
      }
    }
  }
}, {
  sequelize: dbInstance,
  modelName: 'rubros',
  createdAt: false,
  updatedAt: false
},
 
)

module.exports = { Rubro }