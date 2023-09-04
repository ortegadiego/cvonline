const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')
const { Localidad } = require('./localidad')
const {Provincia} = require('./provincia')

class Direccion extends Model {
}

Direccion.init({
    direccion_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    validate:{
      notNull:{
        msg:'El codigo de Direcciones es obligatorio'
      }
    }
  },
    calle:{
        type: DataTypes.STRING,
        allowNull: true
    },
    numero:{
        type: DataTypes.STRING,
        allowNull: true
    },
    prvId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Codigo de provincia obligatorio'
      }
    }
    },
    locId :{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notNull:{
                msg:'Codigo de localidad obligatorio'
            }
        }
    }
}, {
  sequelize: dbInstance,
  modelName: 'direcciones',
  createdAt: false,
  updatedAt: false
},
 
)
Direccion.hasOne(Provincia, { foreignKey: 'prvId'})
Provincia.belongsTo(Direccion, { foreignKey: 'prvId'})

Direccion.hasOne(Localidad, {foreignKey:'locId'})
Localidad.belongsTo(Direccion,{foreignKey:'locId'})

module.exports = { Direccion }