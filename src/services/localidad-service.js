const { Localidad } = require('../models/localidad')
const { Op } = require("sequelize");

async function getAllByIdProvincia(id) {
  const list = await Localidad.findAll(
    {
      where: {
          loc_pvcId: id
      }
  }
  )
  return list
}

async function getById(id) {
  const localidad = await Localidad.findByPk(id)
  
  if (localidad == null) {
    throw new Error("Localidad no encontrada")
  }

  return localidad
}

module.exports = { getById, getAllByIdProvincia }