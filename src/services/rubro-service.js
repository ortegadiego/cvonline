const { Rubro } = require('../models/rubro')

async function getAll() {
  const list = await Rubro.findAll()
  return list
}

async function getById(id) {
  const rubro = await Rubro.findOne({
    where: {
      id: id
    }
  })
  
  if (rubro == null) {
    throw new Error("Rubro no encontrado")
  }

  return rubro
}

module.exports = { getAll, getById }