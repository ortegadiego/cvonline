const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')


class Curriculum extends Model {
}

Curriculum.init({
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
        msg: 'La descripción es obligatoria'
      }
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El nombre es obligatorio'
      }
    }
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El apellido es obligatorio'
      }
    }
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El correo es obligatorio'
      }
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El teléfono es obligatorio'
      }
    }
  },
  idRubro: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize: dbInstance,
  modelName: 'cvs',
  createdAt: false,
  updatedAt: false
},
 
)

module.exports = { Curriculum }