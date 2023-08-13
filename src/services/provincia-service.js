const { Provincia } = require('../models/provincia')
const { Localidad } = require('../models/localidad')

async function getAll() {
  const list = await Provincia.findAll()
  return list
}

async function getById(id) {
  const provincia = await Provincia.findOne({
    where: {
      id: id
    },
    include: [{
      model: Localidad
    }]
  })
  
  if (provincia == null) {
    throw new Error("Provincia no encontrada")
  }

  return provincia
}

module.exports = { getAll, getById }