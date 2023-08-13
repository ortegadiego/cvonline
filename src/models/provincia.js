const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')
const { Localidad } = require('./localidad')

class Provincia extends Model {
}

Provincia.init({
  pvcId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pvcDescripcion: {
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
  modelName: 'provincias',
  createdAt: false,
  updatedAt: false
},
 
)
Provincia.hasMany(Localidad, { foreignKey: 'loc_pvcId'})
Localidad.belongsTo(Provincia, { foreignKey: 'loc_pvcId'})

module.exports = { Localidad }