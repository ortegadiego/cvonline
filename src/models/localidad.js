const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Localidad extends Model {
}

Localidad.init({
  locId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  locDescripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'La localidad es obligatoria'
      }
    }
  },
  loc_pvcId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: dbInstance,
  modelName: 'localidades',
  createdAt: false,
  updatedAt: false
})

module.exports = { Localidad }